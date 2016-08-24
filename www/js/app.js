// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.map1', {
    url: '/map1',
    views: {
      'tab-map1': {
        templateUrl: 'templates/tab-map1.html',
        controller: 'Map1Controller',
      }
  }})

  .state('tab.map2', {
      url: '/map2',
      views: {
        'tab-map2': {
          templateUrl: 'templates/tab-map2.html',
          controller: 'Map2Controller'
        }
      }
    })

    .state('tab.list', {
        url: '/list',
        views: {
          'tab-list': {
            templateUrl: 'templates/map-list.html',
            controller: 'ListController'
          }
        }
    })

    .state('tab.detail', {
        url: '/list/:mapId',
        views: {
          'tab-list': {
            templateUrl: 'templates/map-list-detail.html',
            controller: 'DetailController'
          }
        }
    })

    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/map1');

});
