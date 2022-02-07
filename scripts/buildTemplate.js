import { existsSync, writeFileSync } from "fs";
import argv from "../utils/argv.js";
import replace from "replace";
import TemplateEnum from "../templates/TemplateEnum.enum.js";
import chalk from "chalk";

if (argv._.includes("build")) {
  if (!argv.name) {
    console.log(chalk.red("Please specify a component name with the -n flag"));
    process.exit(9);
  }
  if (!argv.path) {
    console.log(chalk.red("Please specify './' as a path with the -p flag"));
  }
  buildTemplate();
}

async function buildTemplate() {
  console.log("argv._ baby", argv._);
  const template = TemplateEnum[argv._[1]];
  const componentPath = `${argv.path}${argv.name}.tsx`;

  /** If invalid template, return */
  if (!template) {
    console.log(chalk.red("No such template exists"));
    process.exit(9);
  }

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
    console.log("componentPath", componentPath);
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
