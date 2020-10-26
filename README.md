# Curry IDE for Visual Studio Code

[![Version](https://img.shields.io/visual-studio-marketplace/v/fwcd.curry)](https://marketplace.visualstudio.com/items?itemName=fwcd.curry)
[![CI Build](https://github.com/fwcd/vscode-curry/workflows/Build/badge.svg)](https://github.com/fwcd/vscode-curry/actions)
[![Downloads](https://img.shields.io/visual-studio-marketplace/d/fwcd.curry)](https://marketplace.visualstudio.com/items?itemName=fwcd.curry)
![TypeScript](https://img.shields.io/badge/language-TypeScript-2b7489.svg)

IDE support for the functional logic programming language [Curry](https://en.wikipedia.org/wiki/Curry_(programming_language)).

## Usage
Build the [Curry Language Server](https://github.com/fwcd/curry-language-server) and point the `curry.languageServer.path` option to the built executable.

## Building
* Once: `npm run compile`
* Incrementally: `npm run watch`

## Credits
Credits to [jpsikorra](https://github.com/jpsikorra) for creating the [TextMate grammar](https://github.com/jpsikorra/curry_syntax_highlight).
