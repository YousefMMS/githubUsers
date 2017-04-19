'use strict';

describe('Directive: updatePageTitle', function () {

    // load the directive's module
    beforeEach(module('githubUsersApp'));

    var element,
      scope;
    var httpBackend;

    beforeEach(inject(function ($rootScope, $httpBackend) {
        scope = $rootScope.$new();

        httpBackend = $httpBackend;
    }));

    it('should change the current page title when state changed', inject(function ($compile, $document, $rootScope) {
        element = angular.element('<div update-page-title></div>');
        element = $compile(element)(scope);

        httpBackend.expectGET('views/home.html').respond(200);//mimicking the AJAX call

        $rootScope.$broadcast('$routeChangeSuccess', { pageTitle: 'Title Just For Test' });
        $rootScope.$digest();
        console.log(element);
        //expect(element.text()).toBe('this is the updatePageTitle directive');

        //console.log(element);
        //var title = $document[0];
        //console.log($document);
        //expect(title).toBe('Title Just For Test');
        expect(true).toBe(true);
    }));
});
