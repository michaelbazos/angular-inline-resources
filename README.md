# angular-inline-resources

The current package is meant to simplify the packaging workflow of an angular library, by inlining the html templates and the stylesheets of your angular components. The inlining logic is from [@angular/material2](https://github.com/angular/material2) library.

## Installation

```
npm install angular-inline-resources --save-dev
```

## Usage

```
const inlineResources = require('angular-inline-resources');

// In your packaging worflow, typically right after copying your sources
// to some build folder
inlineResources(<path-to-folder>);
```

The above will process all your `*.ts` files _<path-to-folder>_ and replace all `templateUrl` and `styleUrls` properties to their inline equivalent.
