
/**
 * @ngdoc function
 * @name githubUsersApp.controller:UserDetailsCtrl
 * @description
 * # UserDetailsCtrl
 * Controller of the githubUsersApp
 */
(function () {
    'use strict';

    function UserDetailsCtrl($stateParams, logicUser) {
        var userlogin = $stateParams.userlogin;
        var vm = this;
        vm.loading = true;
        vm.userInfo = null;

        logicUser.getUserDetails(userlogin).then(function (data) {
            vm.userInfo = data;
        }).finally(function () {
            vm.loading = false;
        });
    }

    angular.module('githubUsersApp')
      .controller('UserDetailsCtrl', UserDetailsCtrl);

})();