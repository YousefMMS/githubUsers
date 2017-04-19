
/**
 * @ngdoc overview
 * @name githubUsersApp
 * @description
 * # githubUsersApp
 *
 * Main module of the application.
 */
(function () {
    'use strict';

    angular
      .module('githubUsersApp', [
        'ngCookies',
        'ngResource',
        'ui.router',
        'ngSanitize',
        'mm.foundation',
        'oitozero.ngSweetAlert'
      ])
      .config(function ($stateProvider, $urlRouterProvider, resources) {

          $stateProvider.state('home', {
              url: '/',
              templateUrl: 'views/home.html',
              //controller: 'MainCtrl',
              data: { pageTitle: resources.HOME }
          });

          $stateProvider.state('about', {
              url: '/about',
              templateUrl: 'views/about.html',
              controller: 'AboutCtrl as about',
              data: { pageTitle: resources.ABOUT }
          });

          $stateProvider.state('users', {
              url: '/users',
              templateUrl: 'views/users.html',
              controller: 'UsersCtrl as users',
              data: { pageTitle: resources.USERS },
              resolve: {
                  users: function (logicUsers) {
                      return logicUsers.usersFirstPage();
                  }
              }
          });

          $stateProvider.state('users.details', {
              url: '/{userlogin}',
              templateUrl: 'views/user-details.html',
              controller: 'UserDetailsCtrl as user',
              data: { pageTitle: resources.USER_DETAILS },
          });

          $urlRouterProvider
              .otherwise('/')
                .when('/about/', '/about');
      });
})();