import type { minimal } from "@domtree/flavors";
import { NonemptyList } from "../../utils";
import { OrderedIndex } from "../../utils/index-map";
import { isPresent } from "../../utils/presence";
import {
  RenderedContent,
  type RenderedContentMetadata,
} from "../interfaces/rendered-content";
import type { ContentsIndex } from "./loop";

export class RenderSnapshot {
  static from(list: readonly KeyedContent[]): RenderSnapshot {
    if (list.length === 0) {
      return RenderSnapshot.of(null);
    }

    return RenderSnapshot.of(NonemptyList.verify(list));
  }

  static of(list: NonemptyList<KeyedContent> | null): RenderSnapshot {
    if (list === null) {
      return new RenderSnapshot(
        null,
        { isConstant: true },
        OrderedIndex.empty((keyed) => keyed.key)
      );
    }

    return new RenderSnapshot(
      list,
      {
        isConstant: [...list].every((item) =>
          RenderedContent.isConstant(item.content)
        ),
      },
      OrderedIndex.create(list.asArray(), (keyed) => keyed.key)
    );
  }

  readonly #list: NonemptyList<KeyedContent> | null;

  private constructor(
    list: NonemptyList<KeyedContent> | null,
    readonly metadata: RenderedContentMetadata,
    readonly contents: ContentsIndex
  ) {
    this.#list = list;
  }

  isEmpty(): boolean {
    return this.#list === null;
  }

  adding(...content: readonly KeyedContent[]): RenderSnapshot {
    if (content.length === 0) {
      return this;
    } else if (this.#list === null) {
      return RenderSnapshot.from(content);
    } else {
      return RenderSnapshot.of(this.#list.pushing(...content));
    }
  }

  get boundaries(): [first: KeyedContent, last: KeyedContent] | null {
    if (this.#list) {
      return [this.#list.first, this.#list.last];
    } else {
      return null;
    }
  }

  getPresent(keys: readonly unknown[]): readonly KeyedContent[] {
    let contents = this.contents;
    return keys.map((key) => contents.get(key)).filter(isPresent);
  }

  get keys(): readonly unknown[] {
    return this.contents.keys;
  }

  get(key: unknown): KeyedContent | null {
    return this.contents.get(key);
  }

  initialize(inside: minimal.ParentNode): void {
    if (this.#list) {
      for (let item of this.#list) {
        item.content.initialize(inside);
      }
    }
  }

  poll(inside: minimal.ParentNode): void {
    if (this.#list) {
      for (let item of this.#list) {
        item.content.poll(inside);
      }
    }
  }
}

export class KeyedContent {
  static create(key: unknown, content: RenderedContent): KeyedContent {
    return new KeyedContent(key, content);
  }

  private constructor(
    readonly key: unknown,
    readonly content: RenderedContent
  ) {}
}
