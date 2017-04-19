
/**
 * @ngdoc service
 * @name githubUsersApp.logic/logicUsers
 * @description
 * # all logic of users services
 * Factory in the githubUsersApp.
 */
(function () {
    'use strict';

    angular.module('githubUsersApp')
      .factory('logicUsers', logicUsers);

    function logicUsers(dataUsers) {

        // Public API here
        return {
            usersFirstPage: usersFirstPage,
            usersNextPage: usersNextPage
        };

        //get the first page of users from data layer
        function usersFirstPage() {
            return dataUsers.getUsers();
        }

        //get set of users based on las seen user id
        function usersNextPage(lastId) {
            return dataUsers.getUsers(lastId);
        }
    }

})();