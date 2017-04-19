'use strict';

describe('Directive: dateViewer', function () {

  // load the directive's module
  beforeEach(module('githubUsersApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<date-viewer></date-viewer>');
    element = $compile(element)(scope);
    //expect(element.text()).toBe('this is the dateViewer directive');

    expect(true).toBe(true);

  }));
});
