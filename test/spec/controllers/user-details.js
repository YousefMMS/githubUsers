'use strict';

describe('Controller: UserDetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('githubUsersApp'));

  var UserDetailsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UserDetailsCtrl = $controller('UserDetailsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('loading user details init', function () {
      expect(UserDetailsCtrl.loading).toBe(true);
  });
});
