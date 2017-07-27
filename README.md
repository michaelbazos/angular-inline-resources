<p align="center">
    <img src="https://img.shields.io/npm/v/angular-inline-resources.svg?style=flat-square" alt="version"/>
    <img src="https://img.shields.io/npm/l/angular-inline-resources.svg?style=flat-square" alt="license"/>
    <img src="https://img.shields.io/travis/michaelbazos/angular-inline-resources.svg?style=flat-square" alt="license"/>
</p>

<h1 align="center">angular-inline-resources</h1> 

The current package is meant to simplify the packaging workflow of an angular library, by inlining the html templates and the stylesheets of your angular components. The inlining logic is from [@angular/material2](https://github.com/angular/material2) library.

## Installation

```
npm install angular-inline-resources --save-dev
```

## Usage

```js
const inlineResources = require('angular-inline-resources');
const fs = require('fs-extra');

// Copy folder 'src' to 'tmp' then inline resources
Promise.resolve()
            .then(() => fs.copy('src', 'tmp'))
            .then(() => inlineResources('tmp'))
```

or in your gulp workflow:

```js
//
// Example of a gulp task
//
gulp.task('angular:inline', () => {
  return Promise.resolve()
    .then(() => inlineResources('tmp'));
});
```

The above will process all your `*.ts` or `*.js` component files from _<path-to-copied-sources>_, and replace all `templateUrl` and `styleUrls` properties to their inline equivalent.

## License

MIT © [Michael Bazos](https://github.com/michaelbazos)