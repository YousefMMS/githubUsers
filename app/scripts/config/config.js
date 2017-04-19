

/**
 * @ngdoc service
 * @name githubUsersApp.config
 * @description
 * # the general constants or configurations affect the whole application
 * Constant in the githubUsersApp.
 */
(function () {
    'use strict';

    angular.module('githubUsersApp')
      .constant('config', {

          APP_VERSION: '0.0.1',
          ENVIRONMENTS: {
              'dev': { name: 'Development', backendUrl: 'https://api.github.com/' },
              'staging': { name: 'Staging & QA', backendUrl: 'https://api.github.com/' },
              'live': { name: 'Live', backendUrl: 'https://api.github.com/' }
          },
          ACTIVE_ENVIRONMENT: 'dev',
          TIMEOUT: 200000,
          GET_BACKEND_URL: function () {
              return this.ENVIRONMENTS[this.ACTIVE_ENVIRONMENT].backendUrl;
          },

          DEFAULT_HOME_STATE: 'master.projects',
          DATE_FORMAT: 'MMMM d, yyyy',
          DATE_TIME_FORMAT: 'MMMM d, yyyy hh:mm a',
          LONG_DATE_FORMAT: 'EEEE, MMMM d, yyyy',
          LONG_DATE_TIME_FORMAT: 'EEEE, MMMM d, yyyy hh:mm a',

      });
})();