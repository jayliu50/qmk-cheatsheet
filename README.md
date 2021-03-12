# QMK Cheatsheet #

Source code for the unofficial QMK Cheatsheet.

Goals of this cheatsheet

- be helpful for 80% of the users
- brevity
- give consistent albeit opinionated examples

As some information may be incomplete, please submit pull requests.

## Things to do ##

- add more topics (below)
- update to new macro implementation

## Topics not (yet?) covered ##

- tap dance, advanced functions
- unicode, advanced
- custom functions
- common config.h and rules.mk settings

Contributions are welcome. Just let me know of your intent to write something, if it deals with one of the topics above.

# Development #

******NOTE: due to the age of the dependencies, please use Node v7 or _earlier_.******

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

Then hit `localhost:4200` to see your changes.

### Build the site ###
```
npm run build
```

If the above doesn't work, then do the following.

Remove the `/docs` folder, then run the following:

```
broccoli build docs
```

## Known Issues with the Development Environment ##

- Windows development environment is NOT supported, because it is not fully supported by broccoli
