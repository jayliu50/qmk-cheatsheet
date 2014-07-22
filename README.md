# A Prototyping Framework #
*You will probably find ways that it doesn't support older browsers, or produce production-ready code. It uses all the bleeding edge stuff--the fun stuff. And you will find things set up in my own little, opinionated way of how things should be. You are free to use it, but prepare to be disappointed*

*Oh, and I would NOT recommend this to be run on Windows, not until broccoli and all its dependencies are more fully supported*

This framework uses cool stuff such as

- [Angular 1.3](https://angularjs.org/)
- [Lodash](https://angularjs.org/)
- [CoffeeScript](coffeescript.org)
- [Jade](http://jade-lang.com/)
- [FontAwesome](http://fontawesome.io/)
- [Compass](http://compass-style.org/)
- [Susy](http://susy.oddbird.net/)
- Build using [Broccoli](https://github.com/broccolijs/broccoli)

## Getting Started ##

### Requires the following to be installed ###
So go and install these for your operating system
- [Node.js](http://nodejs.org/)
- [Ruby](http://rubyinstaller.org/downloads/) with [Bundler](http://bundler.io/)

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

###Get the server running###

```
broccoli serve
```

### Build the assets only ###

```
broccoli build [your-target-name-here]
```

## Known Issues ##

- Broccoli is configured to only process CoffeeScript (not Javascript), Jade (not HTML), and SCSS
- Font-awesome has been "hard-copied", because broccoli-bower doesn't know how to deal with the bower-installed font-awesome yet.