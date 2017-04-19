'use strict';

describe('Service: dataUsers', function () {

  // load the service's module
  beforeEach(module('githubUsersApp'));

  // instantiate service
  var dataUsers;
  beforeEach(inject(function (_dataUsers_) {
    dataUsers = _dataUsers_;
  }));

  it('should do something', function () {
    expect(!!dataUsers).toBe(true);
  });

});
