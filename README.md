# A Prototyping Framework #
You will probably find ways that it doesn't support older browsers, or produce production-ready code. It uses all the bleeding edge stuff&mdash;the fun stuff. And you will find things set up in my own little, opinionated way of how things should be. You are free to use it, but prepare to be disappointed without making modifications yourself.

Oh, and I would NOT recommend this to be run on Windows, not until broccoli and all its dependencies are more fully supported. I have tried this on OSX and Ubuntu Linux and those seem to work fine.

This framework uses cool stuff such as

- [Angular 1.3](https://angularjs.org/)
- [Lodash](http://lodash.com/)
- [CoffeeScript](coffeescript.org)
- [Sass](http://sass-lang.com/)
- [Jade](http://jade-lang.com/)
- [FontAwesome](http://fontawesome.io/)
- [Compass](http://compass-style.org/)
- [Susy](http://susy.oddbird.net/)
- Build using [Broccoli](https://github.com/broccolijs/broccoli)

## Getting Started ##

### Knowledge Check ###
This prototyping framework draws from the following knowledge (roughly in order of importance):

- [Required] [How Angular works](http://www.thinkster.io/angularjs/GtaQ0oMGIl). How you need to [think differently](http://stackoverflow.com/questions/14994391/how-do-i-think-in-angularjs-if-i-have-a-jquery-background) than when working with jQuery.
- [Recommended] How to read and write [Sass (SCSS)](http://sass-lang.com/guide)
- [Recommended] How to read and write [CoffeeScript](http://coffeescript.org/)
- [Recommended] [What Lodash provides you](http://lodash.com/docs) (hint, it's very similar to Underscore if you have heard of it)
- [Optional] Awareness of the mixins provided by [Compass](http://compass-style.org/reference/compass/), [Susy](http://susydocs.oddbird.net/en/latest/)
- [Optional] Other Compass plugins that are enabled are [modular-scale](https://github.com/Team-Sass/modular-scale), [toolkit](https://github.com/Team-Sass/toolkit), and [breakpoint](https://github.com/Team-Sass/breakpoint)
- [Optional] Important for if you don't care for Jade or Coffeescript: know [how to edit the Brocfile.js](https://github.com/broccolijs/broccoli)
- [Optional] How to read and write [Jade](http://jade-lang.com/reference/)


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
Broccoli has the ability to build the assets without running a server

```
broccoli build [your-target-name-here]
```

## Known Issues ##

- Broccoli is configured to only process CoffeeScript (not even plain Javascript), Jade (not even plain HTML), and SCSS. For those not happy with that, it should be just a touchup in the Brocfile.js. Feel free to submit pull requests.
- Windows development environment is NOT supported, because it is not fully supported by broccoli
- Font-awesome has been "hard-copied", because broccoli-bower doesn't know how to deal with the bower-installed font-awesome yet.