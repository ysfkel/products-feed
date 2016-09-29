var path = require('path');
// Karma configuration
// Generated on Sat Sep 24 2016 15:38:08 GMT+0400 (GST)
var webpackConfig = require('./webpack.config.js');
//var entry=path.join(webpackConfig.context,webpackConfig.entry);
module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: './',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    webpack: webpackConfig,

    // list of files / patterns to load in the browser
    files: [

      './www/lib/bower_components/angular/angular.js',
      './www/lib/bower_components/angular-mocks/angular-mocks.js',
      './www/lib/bower_components/karma-read-json/karma-read-json.js',
      './www/lib/bower_components/angular-socket-io/socket.min.js',

      './test/angular.jasmine/unit/**/*.js',
      './www/builds/**/*.js'
      //,{pattern: './www/test/data/*.json', included: false},
    ],


    // list of files to exclude
    exclude: [

    ],

    plugins: [
      'karma-jasmine',
      'karma-webpack',
      'karma-coverage',
      'karma-phantomjs-launcher',
      'karma-chrome-launcher',
      'karma-threshold-reporter'
    ],
    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      './test/angular.jasmine/unit/**/*.js': ['coverage'],
      //'test/**/*.spec.jsx': ['webpack'],
      './www/builds/**/*.js': 'coverage',
      './www/app/!(mock)/*.js': ['coverage']
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'threshold', 'coverage'],

    // optionally, configure the reporter
    coverageReporter: {
      type: 'html',
      dir: 'coverage/'
    },


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS', 'Chrome'],
    // the configure thresholds 
    thresholdReporter: {
      statements: 30,
      branches: 30,
      functions: 30,
      lines: 30
    },

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
