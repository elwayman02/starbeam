import sh from "shell-escape-tag";
import { DevCommand } from "./support/commands.js";

export const BuildCommand = DevCommand("build", {
  description: "prepare the packages for publishing",
}).action(({ workspace }) => {
  workspace.exec(sh`pnpm build:scripts`);
  workspace.exec(sh`pnpm build:packages`);
});
