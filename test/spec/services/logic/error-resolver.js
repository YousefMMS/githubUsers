'use strict';

describe('Service: logic/errorResolver', function () {

  // load the service's module
  beforeEach(module('githubUsersApp'));

  // instantiate service
  var errorResolver;
  beforeEach(inject(function (_errorResolver_) {
    errorResolver = _errorResolver_;
  }));

  it('should do something', function () {
    expect(!!errorResolver).toBe(true);
  });

});
