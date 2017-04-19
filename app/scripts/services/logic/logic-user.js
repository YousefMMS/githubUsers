
/**
 * @ngdoc service
 * @name githubUsersApp.logic/logicUser
 * @description
 * # all logic related to user entity
 * Factory in the githubUsersApp.
 */
(function () {
    'use strict';

angular.module('githubUsersApp')
  .factory('logicUser', logicUser);

function logicUser(dataUsers) {

    // Public API here
    return {
        getUserDetails: getUserDetails
    };

    //get user details based on his login name from data layer
    function getUserDetails(login) {
        return dataUsers.getUserDetails(login);
    }

    //function addUser(user) {

    //}

    //function updateUser(user) {

    //}

    //function deleteUser(user) {

    //}
}

})();