var bespoke = require('bespoke'),
  emix = require('../../../lib/bespoke-theme-emix.js'),
  keys = require('bespoke-keys'),
  touch = require('bespoke-touch'),
  bullets = require('bespoke-bullets'),
  scale = require('bespoke-scale'),
  progress = require('bespoke-progress'),
  backdrop = require('bespoke-backdrop');

bespoke.from('article', [
  emix(),
  keys(),
  touch(),
  bullets('li, .bullet'),
  scale(),
  progress(),
  backdrop()
]);
