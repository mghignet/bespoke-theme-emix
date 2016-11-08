[![Build Status](https://secure.travis-ci.org/mghignet/bespoke-theme-emix.png?branch=master)](https://travis-ci.org/mghignet/bespoke-theme-emix)

# bespoke-theme-emix

A simple and elegant [Bespoke.js](http://markdalgleish.com/projects/bespoke.js) theme &mdash; [View demo](http://mghignet.github.io/bespoke-theme-emix)

## Download

Download the [production version][min] or the [development version][max], or use a [package manager](#package-managers).

[min]: https://raw.github.com/mghignet/bespoke-theme-emix/master/dist/bespoke-theme-emix.min.js
[max]: https://raw.github.com/mghignet/bespoke-theme-emix/master/dist/bespoke-theme-emix.js

## Usage

This theme is shipped in a [UMD format](https://github.com/umdjs/umd), meaning that it is available as a CommonJS/AMD module or browser global.

For example, when using CommonJS modules:

```js
var bespoke = require('bespoke'),
  emix = require('bespoke-theme-emix');

bespoke.from('#presentation', [
  emix()
]);
```

When using browser globals:

```js
bespoke.from('#presentation', [
  bespoke.themes.emix()
]);
```

## Package managers

### npm

```bash
$ npm install bespoke-theme-emix
```

### Bower

```bash
$ bower install bespoke-theme-emix
```

## Credits

This theme was built with [generator-bespoketheme](https://github.com/markdalgleish/generator-bespoketheme).

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
