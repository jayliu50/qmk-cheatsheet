var filterCoffeeScript = require('broccoli-coffee')
var compileSass = require('broccoli-sass')
var compass = require('broccoli-compass')
var compileJade = require('broccoli-jade')
var funnel = require('broccoli-funnel')
var mergeTrees = require('broccoli-merge-trees')
var removeTrees = require('broccoli-file-remover')
var concatenate = require('broccoli-concat')
var uglify = require('broccoli-uglify-js')
var autoprefixer = require('broccoli-autoprefixer');

removeTrees('dist', {
  files: '**.*'
})

var app = 'app'

var coffee = funnel(app, {
  srcDir: '',
  include: ['**/*.coffee'],
  destDir: ''
})

var scripts = filterCoffeeScript(coffee, {
  bare: true
})

scripts = concatenate(scripts, {
  inputFiles: ['**/*.js'],
  outputFile: '/scripts/app.js'
})

var styles = funnel(app, {
  srcDir: 'styles',
  include: ['**/*.scss'],
  destDir: 'styles'
})

styles = compass(styles, {
  outputStyle: 'expanded',
  sassDir: '.',
  require: ['susy', 'breakpoint', 'toolkit', 'modular-scale']
})

styles = autoprefixer(styles)

styles = concatenate(styles, {
  inputFiles: ['**/*.css'],
  outputFile: '/styles/app.css'
})

styles_vendor = funnel(app, {
  srcDir: 'styles',
  include: ['**/*.css'],
  destDir: 'styles'
})

styles = mergeTrees([
  styles_vendor,
  styles
])

var views = funnel(app, {
  srcDir: '/',
  include: ['**/*.jade'],
  destDir: '/'
})

var fonts = funnel(app, {
  srcDir: 'fonts',
  destDir: 'fonts'
})

var appCss = styles

// todo: get this to concatenate into one file
var bower = funnel('bower_components', {
  srcDir: '/',
  include: [
    'jquery/dist/jquery.js',
    'angular/angular.js',
    'angular-ui-router/release/angular-ui-router.js',
    'bower-angular-placeholders/src/img/img.js',
    'bower-angular-placeholders/src/txt/txt.js',
    'lodash/lodash.js'
  ],
  destDir: 'bower'
})

// var vendor = funnel(app, {
//   srcDir: '/scripts/vendor',
//   include: ['**/*.js'],
//   destDir: 'scripts/vendor'
// })

// bower = uglify(bower, {
//   mangle: false
// })


var appJs = mergeTrees([scripts, bower]) // todo: merge vendor stuff into appJs if applicable

var appHtml = compileJade(views, {
  doctype: 'html',
  pretty: true
})


module.exports = mergeTrees([appJs, appHtml, appCss, fonts])

