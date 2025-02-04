import { DevCommand } from "./support/commands.js";
import sh from "shell-escape-tag";

export const ReleaseCommand = DevCommand("release", {
  description: "prepare the packages for publishing and release them",
}).action(async ({ workspace }) => {
  await workspace.exec(sh`pnpm build`);
  await workspace.exec(sh`pnpm publish -r --access public`);
});
