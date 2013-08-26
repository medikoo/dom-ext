# dom-ext - DOM extensions

DOM functions, methods and objects that are not part of the DOM standard.

## Installation

Can be used in any environment that provides DOM implementation.

### NPM:

	$ npm install dom-ext

### Browser:

For browser, you can create custom toolset with help of
[modules-webmake](https://github.com/medikoo/modules-webmake)

# API

## Document extensions

### isDocument(x)

Whether object is an instance of DOM Document

### validDocument(x)

If given object is not DOM Document throw TypeError in other case return it.

## DocumentFragment extensions

### isDocumentFragment(x)

Whether object is an instance of DocumentFragment

## Node extensions

### isNode(x)

Whether object represents any DOM node

## Tests [![Build Status](https://api.travis-ci.org/medikoo/dom-ext.png?branch=master)](https://travis-ci.org/medikoo/dom-ext)

	$ npm test
