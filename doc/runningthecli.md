# Running the CLI

Create a section `"scripts": {}` in the file 'package.json' and add entries for `build`, `start` and `tsc`:

``` json
"bulld": "tsc",
"start": "node ./dist/lib/index.js",
"tsc": "tsc"
```

The `package.json` should include the following lines:

``` json
{
  "name": "@reposyd/example-service",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "scripts": {
    "build": "tsc",
    "start": "node ./dist/index.js",
    "tsc": "tsc"
  },
  "type": "module",
  "devDependencies": {
    "@types/node": "^25.0.9",
    "typescript": "^5.9.3"
  },
  "dependencies": {
    "commander": "^14.0.2"
  }
}
```
