var angular = require("angular");
require("angular-animate");
require("angular-ui-router");
require("ionic-scripts");
require("angular-sanitize");

angular.module('app', ['ionic', 'app.controllers', 'app.routes', 'app.services'])
.constant('$fh', require("fh-js-sdk"))

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
});