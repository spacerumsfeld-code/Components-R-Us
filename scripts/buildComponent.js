import { existsSync, writeFileSync } from "fs";
import argv from "../utils/argv.js";
import replace from "replace";
import TemplateEnum from "../templates/TemplateEnum.enum.js";
import chalk from "chalk";

function buildTemplate() {
  const template = TemplateEnum.component;
  const componentPath = `${argv.path}/${argv.name}.tsx`;

  /** if file already exists, return */
  if (existsSync(componentPath)) {
    console.log(chalk.red("That file already exists!"));
    process.exit(1);
  }

  /** Create the file */
  try {
    writeFileSync(componentPath, template);
    console.log(chalk.green(`Component ${argv.name} successfully created`));
  } catch (e) {
    console.log(
      chalk.red(
        `There was an issue creating component ${argv.name}: ${e.message}`
      )
    );
  }

  /**  Inject the specified component name into file */
  try {
    replace({
      regex: "ReactComponent",
      replacement: argv.name,
      paths: [componentPath],
      recursive: false,
      silent: true,
    });
  } catch (e) {
    console.log(chalk.red(e.message));
  }
}

buildTemplate();
