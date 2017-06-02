# angular-inline-resources

The current package is meant to simplify the packaging workflow of an angular library, by inlining the html templates and the stylesheets of your angular components. The inlining logic is from [@angular/material2](https://github.com/angular/material2) library.

## Installation

```
npm install angular-inline-resources --save-dev
```

## Usage

```js
const inlineResources = require('angular-inline-resources');

// 
// In your packaging worflow, typically after copying your sources
//
.then(() => inlineResources(<path-to-copied-sources>))
```

or in your gulp workflow:

```js
//
// Example of a gulp task
//
gulp.task('angular:inline', () => {
  return Promise.resolve()
    .then(() => inlineResources(<path-to-copied-sources>));
});
```

The above will process all your `*.ts` or `*.js` component files from _<path-to-copied-sources>_, and replace all `templateUrl` and `styleUrls` properties to their inline equivalent.
