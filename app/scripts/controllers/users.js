
/**
 * @ngdoc function
 * @name githubUsersApp.controller:UsersCtrl
 * @description
 * # UsersCtrl
 * Controller of the githubUsersApp
 */
(function () {
    'use strict';

    function UserCtrl($state, users, logicUsers) {
        var vm = this,
            pageSize = 30;

        vm.users = users;
        vm.loadingUsers = null;
        vm.noMore = null;

        function goToUserDetails(user) {
            $state.go('users.details', { userlogin: user.login });
        }

        if (vm.users.length > 0) {
            goToUserDetails(users[0]);
        }

        vm.getNextPage = function (lastUser) {
            vm.loadingUsers = true;
            logicUsers.usersNextPage(lastUser.id)
            .then(function (data) {
                vm.users = vm.users.concat(data);

                if (data.length < pageSize) {
                    vm.noMore = true;
                }

            }).finally(function () {
                vm.loadingUsers = false;
            });
        };

        vm.getUserDetails = function (user) {
            goToUserDetails(user);
        };
    }

    angular.module('githubUsersApp')
      .controller('UsersCtrl', UserCtrl);
})();