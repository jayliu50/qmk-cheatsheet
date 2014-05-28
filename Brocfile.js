var filterCoffeeScript = require('broccoli-coffee')
var compileSass = require('broccoli-sass')
var compass = require('broccoli-compass')
var compileJade = require('broccoli-jade')
var pickFiles = require('broccoli-static-compiler')
var mergeTrees = require('broccoli-merge-trees')
// todo: remove broccoli-bower. it's of the devil
// todo: use bower for font-awesome and angular-placeholders
var findBowerTrees = require('broccoli-bower')

var removeTrees = require('broccoli-file-remover')
var concatenate = require('broccoli-concat')
var uglify = require('broccoli-uglify-js');

removeTrees('dist', {
  files: '**.*'
})

var app = 'app'

var coffee = pickFiles(app, {
  srcDir: 'scripts',
  files: ['**/*.coffee', '**/*.js'],
  destDir: 'scripts'
})

var scripts = filterCoffeeScript(coffee, {
  bare: true
})

var styles = pickFiles(app, {
  srcDir: 'styles',
  files: ['**/*.scss'],
  destDir: 'styles'
})

styles = compass(styles, {
  outputStyle: 'expanded',
  // todo: fork a change in broccoli-compass that lets you pass in an array. Modify generateArgs(options).
  require: 'modular-scale --require singularitygs --require breakpoint'
})

styles = concatenate(styles, {
  inputFiles: ['**/*.css'],
  outputFile: '/styles/app.css'
})

styles_vendor = pickFiles(app, {
  srcDir: 'styles',
  files: ['**/*.css'],
  destDir: 'styles'
})

styles = mergeTrees([
  styles_vendor,
  styles
])

var views = pickFiles(app, {
  srcDir: '/',
  files: ['**/*.jade'],
  destDir: ''
})

var fonts = pickFiles(app, {
  srcDir: 'fonts',
  destDir: 'fonts'
})

var appCss = styles

var bower = mergeTrees(findBowerTrees())

bower = concatenate(bower, {
  inputFiles: ['**/*.js'],
  outputFile: '/scripts/vendor.js'
})

bower = uglify(bower, {
  mangle: false
})

scripts = concatenate(scripts, {
  inputFiles: ['**/*.js'],
  outputFile: '/scripts/app.js'
})

var appJs = mergeTrees([scripts, bower])

var appHtml = compileJade(views)


module.exports = mergeTrees([appJs, appHtml, appCss, fonts])

