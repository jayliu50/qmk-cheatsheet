var filterCoffeeScript = require('broccoli-coffee')
var compileSass = require('broccoli-sass')
var compass = require('broccoli-compass')
var compileJade = require('broccoli-jade')
var pickFiles = require('broccoli-static-compiler')
var mergeTrees = require('broccoli-merge-trees')
// todo: add font-awesome when either broccoli-bower learns to use globs or font-awesome stops putting a glob in as its main file
var findBowerTrees = require('broccoli-bower')
var removeTrees = require('broccoli-file-remover')
var concatenate = require('broccoli-concat')
var uglify = require('broccoli-uglify-js')

removeTrees('dist', {
  files: '**.*'
})

var app = 'app'

var coffee = pickFiles(app, {
  srcDir: '',
  files: ['**/*.coffee'],
  destDir: ''
})

var scripts = filterCoffeeScript(coffee, {
  bare: true
})

scripts = concatenate(scripts, {
  inputFiles: ['**/*.js'],
  outputFile: '/scripts/app.js'
})

var styles = pickFiles(app, {
  srcDir: 'styles',
  files: ['**/*.scss'],
  destDir: 'styles'
})

styles = compass(styles, {
  outputStyle: 'expanded',
  // todo: fork a change in broccoli-compass that lets you pass in an array. Modify generateArgs(options).
  require: 'modular-scale --require susy --require breakpoint --require toolkit'
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
  destDir: '/'
})

var fonts = pickFiles(app, {
  srcDir: 'fonts',
  destDir: 'fonts'
})

var appCss = styles

var bower = mergeTrees(findBowerTrees())

bower = pickFiles(bower, {
  srcDir: '/',
  destDir: 'bower'
})

// var vendor = pickFiles(app, {
//   srcDir: '/scripts/vendor',
//   files: ['**/*.js'],
//   destDir: 'scripts/vendor'
// })

// bower = uglify(bower, {
//   mangle: false
// })


var appJs = mergeTrees([scripts, bower]) // todo: merge vendor stuff into appJs if applicable

var appHtml = compileJade(views)


module.exports = mergeTrees([appJs, appHtml, appCss, fonts])

