## biproxi-template-generator

Generate React components, hooks, Next.JS pages, and API services in line with biproxi conventions with a simple command.

### How to Install

`npm i biproxi-template-generator --save-dev`

### How it Works

1. Install the library.
2. Make an npm script for each template you want to build.
3. ???
4. Profit

### Example:

```
{
  scripts:
    "buildComponent": "node ./node_modules/biproxi-template-generator/scripts/buildTemplate.js build component -n $npm_config_name -p $INIT_CWD",
    "buildPage": ...
    ...
}
```

Run the script from the directory you want to generate the template in, specifying a name:

`node run buildComponent --name=Button`

### Template Key Features

#### React Component

1. Common imports
2. Styled container for component
3. Typing for component props
4. Component with State, Hooks, Actions, GraphQL, Effects, and Render sections
5. Default export

#### Hook

#### Next.JS Page

#### Service (API)

### To-dos

1. Add Next.JS pages
2. Add hooks
3. Clean up this README
4. Add API services and sub-components
