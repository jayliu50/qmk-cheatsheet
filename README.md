# A Prototyping Framework #
You will probably find ways that it doesn't support older browsers, or produce production-ready code. And you will find things set up in my own little, opinionated way of how things should be. You are free to use it, but prepare to be disappointed without making modifications yourself.

Oh, and I would NOT recommend this to be run on Windows, not until broccoli and all its dependencies are more fully supported. I have tried this on OSX and Ubuntu Linux and those seem to work fine.

- [Angular 1.6](https://angularjs.org/)
- [Lodash](http://lodash.com/)
- [CoffeeScript](coffeescript.org)
- [Sass](http://sass-lang.com/)
- [Pug](https://pugjs.org/api/getting-started.html)
- [FontAwesome](http://fontawesome.io/)
- Build using [Broccoli](https://github.com/broccolijs/broccoli)

## Getting Started ##

### Knowledge Check ###
This prototyping framework draws from the following knowledge (roughly in order of importance):

- [Required] [How Angular works](http://www.thinkster.io/angularjs/GtaQ0oMGIl). How you need to [think differently](http://stackoverflow.com/questions/14994391/how-do-i-think-in-angularjs-if-i-have-a-jquery-background) than when working with jQuery.
- [Recommended] How to read and write [Sass (SCSS)](http://sass-lang.com/guide)
- [Recommended] How to read and write [CoffeeScript](http://coffeescript.org/)
- [Recommended] [What Lodash provides you](http://lodash.com/docs) (hint, it's very similar to Underscore if you have heard of it)
- [Optional] Important for if you don't care for Pug or Coffeescript: know [how to edit the Brocfile.js](https://github.com/broccolijs/broccoli)
- [Optional] How to read and write [Pug](https://pugjs.org/api/getting-started.htmlreference/)

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

### Debugging Options ###

Turning on DEBUG in `Brocfile.js` will disable Angular template caching and asset-rev.

## Known Issues with the Environment ##

- Broccoli is configured to only process CoffeeScript (not even plain Javascript), Pug (not even plain HTML), and SCSS. For those not happy with that, it should be just a touchup in the Brocfile.js. Feel free to submit pull requests.
- Windows development environment is NOT supported, because it is not fully supported by broccoli

## To do ##

- Get Susy v3 set up
- Upgrade away from Bower?