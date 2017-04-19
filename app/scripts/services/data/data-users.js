
/**
 * @ngdoc service
 * @name githubUsersApp.data-users
 * @description
 * # data-users
 * Factory in the githubUsersApp.
 */
(function () {
    'use strict';

angular.module('githubUsersApp')
  .factory('dataUsers', dataUsers);

function dataUsers(xhr) {

    // Public API here
    return {
        getUsers: getUsers,
        getUserDetails: getUserDetails
    };

    function getUsers(lastId) {
        return xhr.call({
            url: 'users?since=' + (lastId ? lastId : 0)
            //url: 'users?page=' + (page ? page : 1) + '&per_page=' + (limit ? limit : 20)
        });
    }

    function getUserDetails(userId) {
        return xhr.call({
            url: 'users/' + userId
        });
    }
}

})();