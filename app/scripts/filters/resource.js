'use strict';

/**
 * @ngdoc filter
 * @name githubUsersApp.filter:resource
 * @function
 * @description
 * # resource
 * Filter in the githubUsersApp.
 */
angular.module('githubUsersApp')
  .filter('resource', function (resources) {
      return function (input) {
          var res = resources[input];
          if (res) { return res; }

          return input;
    };
  });
