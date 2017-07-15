var filterCoffeeScript = require('broccoli-coffee');
var compileSass = require('broccoli-sass');
var pug = require('broccoli-pug');
var sass = require('broccoli-sass');
var funnel = require('broccoli-funnel');
var mergeTrees = require('broccoli-merge-trees');
var removeTrees = require('broccoli-file-remover');
var concatenate = require('broccoli-concat');
var uglify = require('broccoli-uglify-js');
var autoprefixer = require('broccoli-autoprefixer');
var angularTemplates = require('broccoli-angular-templates-cache');
var AssetRev = require('broccoli-asset-rev');

var DEBUG = true;
var MODULE_NAME = 'prototypeAngularApp';

var app = 'app';

var coffee = funnel(app, {
  include: ['**/*.coffee'],
  exclude: ['demo/*'],
  destDir: '',
});

// var scripts = filterCoffeeScript(coffee, {
//   bare: true
// })

var views = funnel(app, {
  srcDir: '/',
  include: ['**/*.pug'],
  destDir: '.',
});

var appHtml = pug([views], {
  render: true,
  pugOptions: {
    doctype: 'html',
    pretty: DEBUG,
  },
});

if (!DEBUG) {
  var appHtmlJs = angularTemplates(appHtml, {
    srcDir: './',
    moduleName: MODULE_NAME,
  });

  // scripts = mergeTrees([scripts, appHtmlJs])

  appHtml = funnel(appHtml, {
    srcDir: '/',
    include: ['index.html'],
    destDir: '.',
  });
}

// scripts = concatenate(scripts, {
//   inputFiles: ['**/*.js'],
//   outputFile: '/scripts/app.js'
// })

var styles = sass([app + '/styles'], 'app.scss', 'app.css', {
  outputStyle: DEBUG ? 'expanded' : 'compressed',
});

if (!DEBUG) {
  styles = autoprefixer(styles);
}

styles = concatenate(styles, {
  inputFiles: ['**/*.css'],
  outputFile: '/styles/app.css',
});

var fonts = funnel(app, {
  srcDir: 'fonts',
  destDir: 'fonts',
  allowEmpty: true,
});

var font_awesome = funnel('bower_components', {
  srcDir: '/font-awesome/fonts',
  include: [
    'fontawesome-webfont.eot',
    'fontawesome-webfont.svg',
    'fontawesome-webfont.ttf',
    'fontawesome-webfont.woff',
    'fontawesome-webfont.woff2',
    'FontAwesome.otf',
  ],
  destDir: 'fonts',
});

fonts = mergeTrees([fonts, font_awesome]);

var images = funnel(app, {
  srcDir: 'images',
  destDir: 'images',
  allowEmpty: true,
});

var bowerCss = concatenate('bower_components', {
  inputFiles: ['font-awesome/css/font-awesome.min.css'],
  outputFile: '/styles/vendor.css',
});

var appCss = mergeTrees([styles, bowerCss]);

// appCss = uglify(appCss, {})

// todo: get this to concatenate into one file
var bower = funnel('bower_components', {
  srcDir: '/',
  include: [
    'prism/prism.js',
    'prism/components/prism-c.js',
    // 'jquery/dist/jquery.js',
    // 'angular/angular.js',
    // 'angular-ui-router/release/angular-ui-router.js',
    // 'bower-angular-placeholders/src/img/img.js',
    // 'bower-angular-placeholders/src/txt/txt.js',
    // 'lodash/lodash.js',
  ],
  destDir: 'bower',
});

// var bower = concatenate('bower_components', {
//   inputFiles: [
//     //'jquery/jquery.js',
//     //'angular/angular.js',
//     'lodash/lodash.min.js',
//     'angular-ui-router/release/angular-ui-router.js',
//     'bower-angular-placeholders/src/img/img.js',
//     'bower-angular-placeholders/src/txt/txt.js',
//   ],
//   outputFile: '/scripts/vendor.js'
// })

// bower = uglify(bower, {})

var appJs = mergeTrees([
  // scripts,
  bower,
]); // todo: merge vendor stuff into appJs if applicable

// unit testing
// var test;

// if (DEBUG) {
//   test = funnel('test', {
//     srcDir: './',
//     include: ['**/*.coffee'],
//     destDir: 'test'
//   })

//   test = filterCoffeeScript(test, {
//     bare: true
//   })

//   var testJs = concatenate('bower_components', {
//     inputFiles: [
//       'angular-mocks/angular-mocks.js',
//     ],
//     outputFile: '/scripts/testVendor.js'
//   })

//   test = mergeTrees([test, testJs])

// }

var assets;

if (DEBUG) {
  assets = mergeTrees([appJs, appCss, appHtml, fonts, images]);
} else {
  assets = mergeTrees([appJs, appCss, appHtml, fonts, images]);
}

module.exports = assets;
