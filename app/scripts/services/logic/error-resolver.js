'use strict';

/**
 * @ngdoc service
 * @name githubUsersApp.errorResolver
 * @description
 * # solve errors
 * Factory in the githubUsersApp.
 */
angular.module('githubUsersApp')
  .factory('errorResolver', function (modals, resources) {

      // Public API here
      return {
          resolve: resolve
      };

      function resolve(error) {

          switch (error.reason) {

              case 'NOT_AUTH':
                  modals.error(resources.NOT_AUTHORIZED,
                      resources.YOU_CAN_NOT_ACCESS_THIS_AREA);
                  break;

              case "OFFLINE":
                  modals.error(resources.OFFLINE, resources.CHECK_INTERNET_CONNECTION);
                  break;

              default:
                  modals.error(resources.ERROR, resources.UNEXPECTED_ERROR_OCCURRED_REPORT_ERROR);
          }
      }
  });
