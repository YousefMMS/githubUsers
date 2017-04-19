'use strict';

describe('Service: xhr', function () {

    // load the service's module
    beforeEach(module('githubUsersApp'));

    // instantiate service
    var xhr;
    var $q;
    var deferred;
    var http;
    var mockEmployee = { id: 1, name: "John Doe" };


    beforeEach(inject(function (_xhr_, _$q_, _$httpBackend_) {
        xhr = _xhr_;
        $q = _$q_;
        // We use the $q service to create a mock instance of defer
        deferred = _$q_.defer();
        http = _$httpBackend_;
        // Use a Jasmine Spy to return the deferred promise
        //spyOn(searchService, 'search').and.returnValue(deferred.promise);

    }));

    it('should do something', function () {

        //var res = xhr.call({
        //    url: '',

        //})

        //var testEmployee = function (employee) {
        //    expect(employee.name).toBe(mockEmployee.name);
        //    expect(employee.id).toBe(mockEmployee.id);
        //};

        //var failTest = function (error) {
        //    expect(error).toBeUndefined();
        //};

        //http.expectGET('users/1').respond(200, mockEmployee);

        //xhr.call({url:'users'})
        //  .then(testEmployee)
        //  .catch(failTest)
        //  .finally(done);

        //http.flush();
        expect(!!xhr).toBe(true);
    });

});
