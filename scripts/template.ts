import { QueryCommand } from "./support/commands";
import { UpdatePackages } from "./support/template/update-package.js";
import { updateTsconfig } from "./support/template/update-tsconfig.js";
import {
  updateLibrary,
  updatePackageJSON,
  updateTest,
} from "./support/template/updates.js";

export const TemplateCommand = QueryCommand("template", {
  description: "template a package",
  notes:
    "Packages are only included if they include a `main` field in their package.json",
}).action(({ packages, workspace, verbose }) => {
  const updater = new UpdatePackages(workspace, packages, verbose);

  updater.update((when) => {
    when(() => true, { use: updatePackageJSON });
    when((pkg) => pkg.isSupport("tests"), { use: updateTest });
    when((pkg) => pkg.isTypescript, { use: updateTsconfig });
    when((pkg) => pkg.type?.is("library") ?? false, { use: updateLibrary });
  });
});
