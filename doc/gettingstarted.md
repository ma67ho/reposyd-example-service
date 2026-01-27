# Getting Started

This document provides step-by-step instructions on how to build your own reposyd service and application

## Requirements

* NodeJS >= 20.20.0
* yarn >= 1.22.22

## Creating a Project Folder

Open a shell and enter the following commands

``` shell
mkdir reposyd-example
mkdir reposyd-example/service
mkdir reposyd-example/service/src
mkdir reposyd-example/service/src/Service
```

### Building  a RePoSyD Service Instance

Open a shell and enter the following commands

``` shell
mkdir reposyd-example
mkdir reposyd-example/service
```

#### Initializing the Project

Open a shell and enter the following commands to create a `package.json` file.

``` bash
yarn init

```

```
yarn init v1.22.22
question name (service): @reposyd/example-service
...
Done in 31.43s.
```


``` json
{
  "name": "@reposyd/example-service",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
}
```
#### Installing TypeScript

Enter the following command in order to add TypeScript to the project's development envrionment:

``` 
yarn add -D typescript @types/node
```

You may verifiy the installation but entering the following command:

``` shell
npx tsc -v
Version 5.9.3
```

Run the following command to typescript to the project:
```
# npx yarn add -D typescript 
```

Create a  file named `tsconfig.json` in the root folder of the project a paste the typescript configuration below:

```
{
  "compilerOptions": {
    "outDir": "dist",
    "declaration": true,
    "declarationMap": true,
    "module": "CommonJS",
    "moduleResolution": "node",
    "target": "ES2015",
    "strict": false
  },
  "include": [
    "src/**/*.ts"
  ],
  "exclude": [
    "/node_modules/**/*",
    "/attic"
  ]
}
```

### Adding additional Packages

#### Adding `@reposyd/service-core`

Create a `.yarnrc` file in the root folder of the project and add the following line:
``` 
"@reposyd:registry" "https://pkg.reposyd.de/registry/"
```

The current packages versions of @reposyd/sercice-core are only available in RePoSyD own registry.

Run `npx yarn add @reposyd/service-core` in order to a the RePoSyD Service Core Framework.

#### Other Packages

Add the following additional packages to the project:

* lodash
* @types/lodash
