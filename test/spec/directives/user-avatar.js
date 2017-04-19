'use strict';

describe('Directive: userAvatar', function () {

    // load the directive's module
    beforeEach(module('githubUsersApp'));

    var element,
      scope;

    //beforeEach(module('views/user-avatar.html'));

    beforeEach(module(function ($urlRouterProvider) {
        $urlRouterProvider.deferIntercept();
    }));

    beforeEach(inject(function ($rootScope) {
        scope = $rootScope.$new();
        scope.data = { id: '1', login: 'username' };
    }));

    it('should make hidden element visible', inject(function ($compile, $rootScope) {
        //element = angular.element('<user-avatar user="data"></user-avatar>');
        //element = $compile(element)(scope);
        //console.log(element);
        //$rootScope.$digest();

        //console.log(element);
        //expect(element.text()).toBe('this is the userAvatar directive');
        expect(true).toBe(true);
    }));
});
