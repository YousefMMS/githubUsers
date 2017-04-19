
/**
 * @ngdoc service
 * @name githubUsersApp.modals
 * @description
 * # modals
 * Factory in the githubUsersApp.
 */
(function () {
    'use strict';

    angular.module('githubUsersApp')
      .factory('modals', function (SweetAlert) {

          // Public API here
          return {
              error: error,
              warning: warning
          };

          function error(title, text) {
              SweetAlert.swal({
                  title: title,
                  text: text,
                  type: "error",
              });
          }

          function warning(title, text) {
              SweetAlert.swal({
                  title: title,
                  text: text,
                  type: "warning",
              });
          }
      });
})();