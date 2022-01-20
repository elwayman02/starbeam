import type { minimal } from "@domtree/flavors";
import type { DomEnvironment } from "../../dom";
import type { ContentRange } from "../../dom/streaming/compatible-dom";
import { RangeSnapshot, RANGE_SNAPSHOT } from "../../dom/streaming/cursor";
import type { LazyDOM } from "../../dom/streaming/token";
import {
  ContentConstructor,
  TOKEN,
  TreeConstructor,
} from "../../dom/streaming/tree-constructor";
import { Reactive } from "../../reactive/core";
import { ReactiveParameter } from "../../reactive/parameter";
import { verified } from "../../strippable/assert";
import { is } from "../../strippable/minimal";
import { as } from "../../strippable/verify-context";
import { NonemptyList } from "../../utils";
import { OrderedIndex } from "../../utils/index-map";
import type { Component } from "../component";
import { RenderedCharacterData } from "../data";
import {
  AbstractContentProgramNode,
  BuildMetadata,
  ContentProgramNode,
  DYNAMIC_BUILD_METADATA,
  ProgramNode,
} from "../interfaces/program-node";
import {
  RenderedContent,
  type RenderedContentMetadata,
} from "../interfaces/rendered-content";
import { ListArtifacts } from "./diff";
import { KeyedContent, RenderSnapshot } from "./snapshot";

export type ListProgramNode = StaticListProgramNode | DynamicListProgramNode;

export class StaticLoop {
  static create<P extends ReactiveParameter>(
    iterable: Iterable<P>,
    component: Component<P>,
    key: Key<P>
  ): StaticLoop {
    let list = [...iterable];
    let isStatic = list.every(ReactiveParameter.isStatic);
    return new StaticLoop(
      [...iterable],
      key as Key<ReactiveParameter>,
      component as Component,
      {
        isStatic,
      }
    );
  }

  readonly #list: readonly ReactiveParameter[];
  readonly #key: Key<ReactiveParameter>;
  readonly #component: Component;

  private constructor(
    list: readonly ReactiveParameter[],
    key: Key<ReactiveParameter>,
    component: Component,
    readonly metadata: BuildMetadata
  ) {
    this.#list = list;
    this.#key = key;
    this.#component = component;
  }

  *[Symbol.iterator](): IterableIterator<KeyedProgramNode> {
    for (let item of this.#list) {
      yield KeyedProgramNode.component(this.#component, item, this.#key);
    }
  }

  list(): StaticListProgramNode {
    return StaticListProgramNode.of(this);
  }
}

export type Key<P extends ReactiveParameter> = (input: P) => unknown;
export type AnyKey = Key<ReactiveParameter>;

export class KeyedProgramNode
  implements AbstractContentProgramNode<RenderedContent>
{
  static component<P extends ReactiveParameter>(
    component: Component<P>,
    arg: P,
    key: unknown
  ): KeyedProgramNode {
    let node = component(arg);
    return new KeyedProgramNode(node, key, {
      isStatic: ProgramNode.isStatic(node),
    });
  }

  static render(
    node: KeyedProgramNode,
    buffer: ContentConstructor
  ): KeyedContent {
    let content = node.render(buffer);
    return KeyedContent.create(node.key, content);
  }

  readonly #node: ContentProgramNode;

  private constructor(
    node: ContentProgramNode,
    readonly key: unknown,
    readonly metadata: BuildMetadata
  ) {
    this.#node = node;
  }

  render(buffer: ContentConstructor): RenderedContent {
    return this.#node.render(buffer);
  }
}

export class CurrentLoop implements Iterable<KeyedProgramNode> {
  static create(
    list: Iterable<ReactiveParameter>,
    component: Component,
    key: AnyKey
  ): CurrentLoop {
    let index = OrderedIndex.create([...list], key);
    return new CurrentLoop(index, component);
  }

  readonly #index: OrderedIndex<unknown, ReactiveParameter>;
  readonly #component: Component;

  constructor(
    index: OrderedIndex<unknown, ReactiveParameter>,
    component: Component
  ) {
    this.#index = index;
    this.#component = component;
  }

  *[Symbol.iterator](): IterableIterator<KeyedProgramNode> {
    for (let [key, arg] of this.#index.entries()) {
      yield KeyedProgramNode.component(this.#component, arg, key);
    }
  }

  isEmpty(): boolean {
    return this.#index.list.length === 0;
  }

  get keys(): readonly unknown[] {
    return this.#index.keys;
  }

  get(key: unknown): KeyedProgramNode | null {
    let arg = this.#index.get(key);

    if (arg === null) {
      return null;
    }

    return KeyedProgramNode.component(this.#component, arg, key);
  }
}

export class DynamicLoop {
  static create<P extends ReactiveParameter>(
    iterable: Reactive<Iterable<P>>,
    component: Component<P>,
    key: Key<P>
  ): DynamicLoop {
    return new DynamicLoop(iterable, component as Component, key as AnyKey);
  }

  readonly metadata: BuildMetadata = DYNAMIC_BUILD_METADATA;
  readonly #iterable: Reactive<Iterable<ReactiveParameter>>;
  readonly #component: Component;
  readonly #key: AnyKey;

  constructor(
    iterable: Reactive<Iterable<ReactiveParameter>>,
    component: Component,
    key: AnyKey
  ) {
    this.#iterable = iterable;
    this.#component = component;
    this.#key = key;
  }

  get(parameter: ReactiveParameter): KeyedProgramNode {
    return KeyedProgramNode.component(this.#component, parameter, this.#key);
  }

  get current(): CurrentLoop {
    return CurrentLoop.create(
      this.#iterable.current,
      this.#component,
      this.#key
    );
  }

  list(): DynamicListProgramNode {
    return DynamicListProgramNode.of(this);
  }
}

export type Loop = StaticLoop | DynamicLoop;

export const Loop = {
  from: <P extends ReactiveParameter>(
    iterable: Reactive<Iterable<P>>,
    component: Component<P>,
    key: (input: P) => unknown
  ): Loop => {
    if (Reactive.isStatic(iterable)) {
      return StaticLoop.create(iterable.current, component, key);
    } else {
      return DynamicLoop.create(iterable, component, key);
    }
  },
} as const;

/**
 * The input for a `StaticListProgramNode` is a static iterable. It is static if all
 * of the elements of the iterable are also static.
 */
export class StaticListProgramNode
  implements AbstractContentProgramNode<RenderedContent>
{
  static of(loop: StaticLoop) {
    return new StaticListProgramNode([...loop], loop.metadata);
  }

  readonly #components: readonly KeyedProgramNode[];
  readonly metadata: BuildMetadata;

  constructor(
    components: readonly KeyedProgramNode[],
    metadata: BuildMetadata
  ) {
    this.#components = components;
    this.metadata = metadata;
  }

  render(buffer: TreeConstructor): RenderedContent {
    let content: KeyedContent[] = [];
    let isConstant = true;

    for (let component of this.#components) {
      let rendered = component.render(buffer);

      isConstant &&= rendered.metadata.isConstant;
      content.push(KeyedContent.create(component.key, rendered));
    }

    if (content.length === 0) {
      return RenderedCharacterData.create(
        Reactive.from(""),
        buffer.comment("", TOKEN).dom
      );
    } else {
      return RenderedStaticList.create(
        RenderSnapshot.of(NonemptyList.verify(content)),
        { isConstant }
      );
    }
  }
}

export type ContentsIndex = OrderedIndex<unknown, KeyedContent>;

export class RenderedStaticList extends RenderedContent {
  static create(
    artifacts: RenderSnapshot,
    metadata: RenderedContentMetadata
  ): RenderedStaticList {
    return new RenderedStaticList(artifacts, metadata);
  }

  readonly metadata: RenderedContentMetadata;
  readonly #artifacts: RenderSnapshot;

  constructor(artifacts: RenderSnapshot, metadata: RenderedContentMetadata) {
    super();
    this.#artifacts = artifacts;
    this.metadata = metadata;
  }

  [RANGE_SNAPSHOT](parent: minimal.ParentNode): RangeSnapshot {
    let [start, end] = verified(
      this.#artifacts.boundaries,
      is.Present,
      as(`artifact boundaries`).when(`the list is a RenderedStaticList`)
    );

    return RangeSnapshot.forContent(parent, start.content, end.content);
  }

  initialize(inside: minimal.ParentNode): void {
    this.#artifacts.initialize(inside);
  }

  poll(inside: minimal.ParentNode): void {
    this.#artifacts.poll(inside);
  }
}

export class DynamicListProgramNode
  implements AbstractContentProgramNode<RenderedDynamicList>
{
  static of(loop: DynamicLoop) {
    return new DynamicListProgramNode(loop, { isStatic: false });
  }

  readonly #loop: DynamicLoop;

  constructor(loop: DynamicLoop, readonly metadata: BuildMetadata) {
    this.#loop = loop;
  }

  render(buffer: TreeConstructor): RenderedDynamicList {
    let contents: KeyedContent[] = [];

    let fragment = buffer.fragment((buffer) => {
      for (let content of this.#loop.current) {
        let rendered = content.render(buffer);

        contents.push(KeyedContent.create(content.key, rendered));
      }
    });

    return RenderedDynamicList.create(
      this.#loop,
      ListArtifacts.create({ isStatic: false }, RenderSnapshot.from(contents)),
      fragment.dom,
      { isConstant: false }
    );
  }
}

class Fragment {
  static of(lazy: LazyDOM<ContentRange>): Fragment {
    return new Fragment(lazy, undefined);
  }

  readonly #lazy: LazyDOM<ContentRange>;
  #placeholder: minimal.ChildNode | null | undefined;

  constructor(
    lazy: LazyDOM<ContentRange>,
    placeholder: minimal.ChildNode | null | undefined
  ) {
    this.#lazy = lazy;
    this.#placeholder = placeholder;
  }

  get environment(): DomEnvironment {
    return this.#lazy.environment;
  }

  initialize(inside: minimal.ParentNode): void {
    this.#lazy.get(inside);
  }

  get(inside: minimal.ParentNode): minimal.ChildNode {
    if (this.#placeholder === undefined) {
      this.#placeholder = verified(
        this.#lazy.get(inside).asNode(),
        is.Comment,
        as(`the ContentRange for a rendered list`).when(`the list was empty`)
      );
    }

    return verified(
      this.#placeholder,
      is.Present,
      as(`The ContentRange for a rendered list`).when(`the list was empty`)
    );
  }

  set(placeholder: minimal.ChildNode | null): void {
    this.#placeholder = placeholder;
  }
}

export class RenderedDynamicList extends RenderedContent {
  static create(
    loop: DynamicLoop,
    artifacts: ListArtifacts,
    fragment: LazyDOM<ContentRange>,
    metadata: RenderedContentMetadata
  ): RenderedDynamicList {
    return new RenderedDynamicList(
      loop,
      artifacts,
      Fragment.of(fragment),
      metadata
    );
  }

  readonly #loop: DynamicLoop;
  readonly #artifacts: ListArtifacts;
  readonly #fragment: Fragment;

  private constructor(
    loop: DynamicLoop,
    artifacts: ListArtifacts,
    fragment: Fragment,
    readonly metadata: RenderedContentMetadata
  ) {
    super();
    this.#loop = loop;
    this.#artifacts = artifacts;
    this.#fragment = fragment;
  }

  [RANGE_SNAPSHOT](parent: minimal.ParentNode): RangeSnapshot {
    let boundaries = this.#artifacts.boundaries;

    if (boundaries) {
      let [start, end] = boundaries;
      return RangeSnapshot.forContent(parent, start.content, end.content);
    } else {
      let placeholder = this.#fragment.get(parent);
      return RangeSnapshot.create(this.#fragment.environment, placeholder);
    }
  }

  initialize(inside: minimal.ParentNode): void {
    this.#fragment.initialize(inside);
    this.#artifacts.initialize(inside);
  }

  poll(inside: minimal.ParentNode): void {
    let placeholder = this.#artifacts.poll(
      this.#loop.current,
      inside,
      this[RANGE_SNAPSHOT](inside)
    );

    if (placeholder === undefined) {
      return;
    } else {
      this.#fragment.set(placeholder);
    }
  }
}
