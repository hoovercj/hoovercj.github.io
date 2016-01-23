---
layout: portfolio
group: portfolio
featured: featured
image: vscode.png
label: Visual Studio Code
title: Visual Studio Code
subtitle: Contributing to OSS
displayType: VSCode Extensions
displayDate: Winter 2015
misc:
    name: Source
    text: github
    link: https://github.com/search?q=user%3Ahoovercj+vscode
technologies:
    VS Code: https://code.visualstudio.com
    Typescript: http://www.typescriptlang.org/
    Node.js: http://www.nodejs.org
---	
<!-- +++++ Projects Section +++++ -->
[Visual Studio Code](https://code.visualstudio.com) was officially made open source in November of 2015 and I immediately began building extensions for it. I had spent the summer as an intern working on internal tools for the Visual Studio Code team but the extensibility API had not yet been built so I got to learn with the rest of the community. I recognized that most of the effort was being put into extensions for javascript and javascript-adjacent areas such as TypeScript and Angular and I could provide more value if I pursued less crowded options. I was taking a couple classes that used Ruby and Haskell so I decided that's where I would focus my effort. I started with a utility extension for converting between numeric bases, then created a couple linters, and most recently have been working to add more sophisticated language support for Haskell leveraging a tool called `ghc-mod`. Along the way I've also made a handful of pull requests against the actual Visual Studio Code repository, related tools, and the docs. You can read more about my published extensions below.

- [Base Converter](https://marketplace.visualstudio.com/items/hoovercj.base-converter) - A simple utility for converting between bases. i.e. Converting 5 in decimal to 101 in binary. ([repo]())
- [Ruby linter](https://marketplace.visualstudio.com/items/hoovercj.ruby-linter) - Brings built in ruby linting capabilities to VS Code. ([repo](https://github.com/hoovercj/vscode-ruby-linter))
- [Haskell Linter](https://marketplace.visualstudio.com/items/hoovercj.haskell-linter) - Brings [hlint](https://github.com/ndmitchell/hlint#readme) suggestions to VS Code and provides code actions to turn the suggestions into code changes. ([repo](https://github.com/hoovercj/vscode-haskell-linter))
- [Haskell ghc-mod](https://marketplace.visualstudio.com/items/hoovercj.vscode-ghc-mod) - Utilizes a tool called [ghc-mod](http://www.mew.org/~kazu/proj/ghc-mod/en/) to bring type and definition information for haskell projects to VS Code. ([repo](https://github.com/hoovercj/vscode-ghc-mod))