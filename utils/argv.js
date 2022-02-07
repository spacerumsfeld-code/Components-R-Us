import yargs from "yargs";
import { hideBin } from "yargs/helpers";

const argv = yargs(hideBin(process.argv))
  .option("name", {
    description: "The desired component name",
    alias: "n",
    type: "String",
  })
  .option("path", {
    description: "The path where the component should be generated",
    alias: "p",
    type: "String",
  })
  .help()
  .alias("help", "h").argv;

export default argv;
