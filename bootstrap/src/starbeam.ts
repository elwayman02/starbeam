import findWorkspaceDir from "@pnpm/find-workspace-dir";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { AbsolutePath } from "./paths.js";
import { Workspace } from "./workspace.js";

const dir = dirname(fileURLToPath(import.meta.url));
const root = await findWorkspaceDir.default(dir);

if (root === undefined) {
  console.error(`Couldn't find workspace root from ${dir}`);
  process.exit(1);
}

const WORKSPACE = await Workspace.create({
  root: AbsolutePath.directory(root),
  namespace: "@starbeam",
  // TODO: Hash the bootstrap source
  // hash: "3184dcba-b5b7-4cd1-93ea-bc85c411ed9d",
  hash: String(Math.random()),
});

for (let pkg of WORKSPACE.packages) {
  // log.heading(`- Compiling ${pkg.name}`);
  await pkg.compile({ dryRun: false });
}

function relative(path: AbsolutePath): string {
  return path.relativeFromAncestor(WORKSPACE.root);
}
