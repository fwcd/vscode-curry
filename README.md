# Curry IDE for Visual Studio Code

[![Version](https://raster.shields.io/visual-studio-marketplace/v/fwcd.curry)](https://marketplace.visualstudio.com/items?itemName=fwcd.curry)
[![Build](https://raster.shields.io/github/actions/workflow/status/fwcd/vscode-curry/build.yml)](https://github.com/fwcd/vscode-curry/actions)
[![Downloads](https://raster.shields.io/visual-studio-marketplace/d/fwcd.curry)](https://marketplace.visualstudio.com/items?itemName=fwcd.curry)
![TypeScript](https://raster.shields.io/badge/language-TypeScript-2b7489.png)

IDE support for the functional logic programming language [Curry](https://en.wikipedia.org/wiki/Curry_(programming_language)).

## Usage
Build the [Curry Language Server](https://github.com/fwcd/curry-language-server) and point the `curry.languageServer.path` option to the built executable.

## Building
* Once: `npm run compile`
* Incrementally: `npm run watch`

## Credits
Credits to [jpsikorra](https://github.com/jpsikorra) for creating the [TextMate grammar](https://github.com/jpsikorra/curry_syntax_highlight).
