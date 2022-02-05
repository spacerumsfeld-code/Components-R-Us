import yargs from "yargs";
import { hideBin } from "yargs/helpers";

const argv = yargs(hideBin(process.argv))
  .command(
    "build",
    "generates a template of your choosing in the current directory"
  )
  .option("name", {
    description: "The desired component name",
    alias: "n",
    type: "String",
  })
  .help()
  .alias("help", "h").argv;

export default argv;
