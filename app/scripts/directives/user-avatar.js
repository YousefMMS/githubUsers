
/**
 * @ngdoc directive
 * @name githubUsersApp.directive:userAvatar
 * @description display the user avatar
 * # <userAvatar user="userData" on-selected="doSomething()"></user-avatar>
 */
(function () {
    'use strict';

    function userAvatar() {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                user: '=',
                onSelected: '&'
            },
            templateUrl: 'views/user-avatar.html',
            link: function postLink() {

            }
        };
    }
    angular.module('githubUsersApp')
  .directive('userAvatar', userAvatar);

})();