---
layout: portfolio
group: portfolio
image: chip8.png
label: Chip8 Emulator
title: Chip8 Emulator
featured: featured
subtitle: A Blast from the Past
displayType: Emulator, Interpreter
displayDate: September 2016
misc:
    name: Source
    text: github
    link: https://github.com/hoovercj/chip8
technologies:
    Typescript: https://www.typescriptlang.org/docs/
    Chip8: https://en.wikipedia.org/wiki/CHIP-8#Virtual_machine_description

---	
<!-- +++++ Projects Section +++++ -->
I read a Hacker News article titled ["My Most Important Project Was a Bytecode Interpreter"](https://news.ycombinator.com/item?id=12553591) and got to thinking, "Hey, that's not a bad idea." After going through the comments and reading about similar projects, I stumbled across [this introduction](http://www.multigesture.net/articles/how-to-write-an-emulator-chip-8-interpreter/) to Chip8 emulation and knew that I had found my next project.

Chip8 is a 1970's era programming language made by Joseph Weisbecker and adopted by a handful of systems over the years. Each system would interpret the program to run on its own hardware. You can read a comprehensive system spec [here](http://devernay.free.fr/hacks/chip8/C8TECH10.HTM#2.2). Today's hardware is the web so I've written a browser-based emulator with a TypeScript interpreter. After spending several years at higher levels of abstraction for web applications it was nice to dig in to the lower levels again -- bit manipulation, stack management, etc. This is just the beginning, though, and I hope to go a bit further by making my own program to run on the Chip8

Enough talk, [check out](http://www.codyhoover.com/chip8) the emulator for yourself. 