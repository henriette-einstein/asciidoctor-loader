# asciidoctor-loader

[![Build](https://github.com/henriette-einstein/asciidoctor-loader/workflows/Build/badge.svg)](https://github.com/henriette-einstein/asciidoctor-loader/actions?query=workflow%3ABuild)
[![npm](https://badgen.net/npm/v/@henriette-einstein/asciidoctor-loader)](https://www.npmjs.com/package/@henriette-einstein/asciidoctor-loader)

A Webpack loader that supports Asciidoctor files. The loader returns

- The Asciidoctor file as HTML

The Asciidoctor file `test.adoc`:

```
# Testdocument

## Chapter 1
This is a paragraph
```

can be loaded with

```js
import test from "test.adoc";
```
