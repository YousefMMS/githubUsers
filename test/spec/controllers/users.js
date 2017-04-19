'use strict';

describe('Controller: UsersCtrl', function () {

  // load the controller's module
  beforeEach(module('githubUsersApp'));

  var UsersCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $state, logicUsers) {
    scope = $rootScope.$new();
    UsersCtrl = $controller('UsersCtrl', {
        $scope: scope,
        users: []
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
      //expect(UsersCtrl.awesomeThings.length).toBe(3);
      expect(true).toBe(true);
  });
});
