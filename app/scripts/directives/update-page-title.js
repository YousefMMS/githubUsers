
/**
 * @ngdoc directive
 * @name githubUsersApp.directive:updatePageTitle
 * @description update the content of element based on current page name
 * # <span updatePageTitle></span>
 */
(function () {
    'use strict';

    function updatePageTitle($rootScope, $timeout) {
        return {
            restrict: 'A',
            link: function (scope, element) {

                var listener = function (event, toState) {

                    var title = 'Github Users';
                    if (toState.data && toState.data.pageTitle) {
                        title = toState.data.pageTitle;
                    }

                    $timeout(function () {
                        element.text(title);
                    }, 0, false);
                };

                $rootScope.$on('$stateChangeSuccess', listener);
            }
        };
    }

    angular.module('githubUsersApp')
  .directive('updatePageTitle', updatePageTitle);

})();