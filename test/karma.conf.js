// Karma configuration
// Generated on 2016-09-06

module.exports = function(config) {
  'use strict';

  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // base path, that will be used to resolve files and exclude
    basePath: '../',

    // testing framework to use (jasmine/mocha/qunit/...)
    // as well as any additional frameworks (requirejs/chai/sinon/...)
    frameworks: [
      'jasmine'
    ],

    // list of files / patterns to load in the browser
    files: [
      // bower:js
      'bower_components/jquery/dist/jquery.js',
      'bower_components/angular/angular.js',
      'bower_components/bootstrap/dist/js/bootstrap.js',
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/angular-cookies/angular-cookies.js',
      'bower_components/angular-messages/angular-messages.js',
      'bower_components/angular-resource/angular-resource.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-sanitize/angular-sanitize.js',
      'bower_components/angular-touch/angular-touch.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/leaflet/dist/leaflet-src.js',
      'bower_components/leaflet-plugins/control/Distance.js',
      'bower_components/leaflet-plugins/control/Layers.Load.js',
      'bower_components/leaflet-plugins/control/Permalink.js',
      'bower_components/leaflet-plugins/control/Permalink.Layer.js',
      'bower_components/leaflet-plugins/control/Permalink.Line.js',
      'bower_components/leaflet-plugins/control/Permalink.Marker.js',
      'bower_components/leaflet-plugins/control/Permalink.Overlay.js',
      'bower_components/leaflet-plugins/layer/Icon.Canvas.js',
      'bower_components/leaflet-plugins/layer/Layer.Deferred.js',
      'bower_components/leaflet-plugins/layer/Marker.Rotate.js',
      'bower_components/leaflet-plugins/layer/Marker.Text.js',
      'bower_components/leaflet-plugins/layer/OpenStreetBugs.js',
      'bower_components/leaflet-plugins/layer/vector/GPX.js',
      'bower_components/leaflet-plugins/layer/vector/GPX.Speed.js',
      'bower_components/leaflet-plugins/layer/vector/KML.js',
      'bower_components/leaflet-plugins/layer/vector/OSM.js',
      'bower_components/leaflet-plugins/layer/vector/TOPOJSON.js',
      'bower_components/leaflet-plugins/layer/tile/Bing.js',
      'bower_components/leaflet-plugins/layer/tile/Google.js',
      'bower_components/leaflet-plugins/layer/tile/Yandex.js',
      'bower_components/angular-leaflet-directive/dist/angular-leaflet-directive.js',
      'bower_components/esri-leaflet/dist/esri-leaflet.js',
      // endbower
      'app/scripts/**/*.js',
      'test/mock/**/*.js',
      'test/spec/**/*.js'
    ],

    // list of files / patterns to exclude
    exclude: [
    ],

    // web server port
    port: 8080,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [
      'PhantomJS'
    ],

    // Which plugins to enable
    plugins: [
      'karma-phantomjs-launcher',
      'karma-jasmine'
    ],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // Uncomment the following lines if you are using grunt's server to run the tests
    // proxies: {
    //   '/': 'http://localhost:9000/'
    // },
    // URL root prevent conflicts with the site root
    // urlRoot: '_karma_'
  });
};
