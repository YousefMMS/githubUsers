'use strict';

describe('Service: logic/modals', function () {

  // load the service's module
  beforeEach(module('githubUsersApp'));

  // instantiate service
  var modals;
  beforeEach(inject(function (_modals_) {
    modals = _modals_;
  }));

  it('should do something', function () {
    expect(!!modals).toBe(true);
  });

});
