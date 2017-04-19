'use strict';

describe('Filter: resource', function () {

    // load the filter's module
    beforeEach(module('githubUsersApp'));

    // initialize a new instance of the filter before each test
    var resource;
    beforeEach(inject(function ($filter) {
        resource = $filter('resource');
    }));

    it('exist HOME resource should equal to Home"', function () {

        var exist = resource('HOME');

        expect(exist).toBe('Home');
    });


    it('not exist resource should equal to the same already passed resource"', function () {

        var notExist = resource('NOT_EXIST_REOURCE');

        expect(notExist).toBe('NOT_EXIST_REOURCE');
    });

});
