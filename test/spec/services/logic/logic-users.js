'use strict';

describe('Service: logic/logicUsers', function () {

  // load the service's module
  beforeEach(module('githubUsersApp'));

  // instantiate service
  var logicUsers;
  beforeEach(inject(function (_logicUsers_) {
    logicUsers = _logicUsers_;
  }));

  it('should do something', function () {
    expect(!!logicUsers).toBe(true);
  });

});
