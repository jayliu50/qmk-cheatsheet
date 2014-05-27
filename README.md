# A Prototyping Framework #
*You will probably find ways that it doesn't support older browsers, or produce production-ready code. It uses all the bleeding edge stuff--the fun stuff. And you will find things set up in my own little, opinionated way of how things should be. You are free to use it, but prepare to be disappointed*

This framework uses cool stuff such as

- [Angular 1.3](https://angularjs.org/)
- [Lodash](https://angularjs.org/)
- [CoffeeScript](coffeescript.org)
- [Jade](http://jade-lang.com/)
- [FontAwesome](http://fontawesome.io/)
- [Compass](http://compass-style.org/)
- Build using [Broccoli](https://github.com/broccolijs/broccoli)

## Getting Started ##

### Requires the following to be installed ###
So go and install these for your operating system
- [Node.js](http://nodejs.org/)
- [Ruby](http://rubyinstaller.org/downloads/) with [Bundler](http://bundler.io/)

Run this

```
npm install -g broccoli-cli bower
bundle install
```

Run after getting source code, in the source root directory

```
npm install
bower install
```

###<del>Get the server running</del>###
*(not working right now :( )*

```
broccoli serve
```

### Get the server running (Workaround) ###
```
# in Terminal 1
npm install -g http-server
cd [your-target-name-here]
http-server # go and check http://0.0.0.0:8080
```

Incremental: 

```
# in Terminal 2
rm -r [your-target-name-here] # if already built
broccoli build [your-target-name-here]
```

### Build the assets only ###

```
broccoli build [your-target-name-here]
```

## Known Issues ##

- Not sure how to get Broccoli to serve!
- Broccoli is configured to only process CoffeeScript (not Javascript), Jade (not HTML), and SCSS
- Font-awesome has been "hard-copied", because broccoli-bower doesn't know how to deal with the bower-installed font-awesome yet.