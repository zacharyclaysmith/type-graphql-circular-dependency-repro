# type-graphql-circular-dependency-repro
Reproduces a circular dependency issue

## Running Locally

### To Initialize

```bash
yarn
```

### To Run

```bash
yarn start

# OR

yarn start:watch
```

> NOTE: The same error occurs for both start commands.

## Example Error

This error shows up while starting the application.

```
yarn run v1.22.19
$ npm run compile && node --experimental-specifier-resolution=node ./dist/index.js

> api@1.0.0 compile
> npm run clean && tsc


> api@1.0.0 clean
> rm -rf dist && rm -rf tsconfig.tsbuildinfo

(node:69800) ExperimentalWarning: The Node.js specifier resolution flag is experimental. It could change or be removed at any time.
(Use `node --trace-warnings ...` to show where the warning was created)
file:///<...>/type-graphql-circular-dependency-repro/dist/entities/Item.js:24
    __metadata("design:type", User)
                              ^

ReferenceError: Cannot access 'User' before initialization
    at file:///<...>/type-graphql-circular-dependency-repro/dist/entities/Item.js:24:31
    at ModuleJob.run (node:internal/modules/esm/module_job:198:25)
    at async Promise.all (index 0)
    at async ESMLoader.import (node:internal/modules/esm/loader:409:24)
    at async loadESM (node:internal/process/esm_loader:85:5)
    at async handleMainPromise (node:internal/modules/run_main:61:12)

Node.js v18.5.0
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```