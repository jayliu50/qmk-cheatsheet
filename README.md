# QMK Cheatsheet #

Source code for the QMK Cheatsheet.



## Things to do ##

- add styling
- make printable
- add more topics (below)

## Topics not (yet?) covered ##

- dynamic macros
- mouse keys
- custom functions
- leader key
- common config.h settings

# Development #
Here are the instructions for building this cheatsheet in a development environment.

Oh, and I would NOT recommend this to be run on Windows, not until broccoli and all its dependencies are more fully supported. I have tried this on OSX and Ubuntu Linux and those seem to work fine.

- [Sass](http://sass-lang.com/)
- [Pug](https://pugjs.org/api/getting-started.html)
- Build using [Broccoli](https://github.com/broccolijs/broccoli)

## Getting Started ##

### Requires the following to be installed ###
So go and install these for your operating system
- [Node.js](http://nodejs.org/)

Run this

```
[sudo] npm install -g broccoli-cli bower
bundle install
```

Run after getting source code, in the source root directory

```
[sudo] npm install
bower install
```

### Get the server running ###

```
broccoli serve
```

### Watch but don't serve ###

The following code makes it so that broccoli will watch your code and push changes, but it doesn't open up a server. This is good for updating the `/dist` directory

First, run this to install the tool

```
[sudo] npm install -g broccoli-timepiece
```

Then run this to keep the `/dist` folder up to date

```
broccoli-timepiece dist
```

Changes will then be pushed out to the `/dist` folder.

### Build the assets only ###
Broccoli has the ability to build the assets without running a server

```
broccoli build [your-target-folder-name-here]
```

## Known Issues with the Development Environment ##

- Windows development environment is NOT supported, because it is not fully supported by broccoli