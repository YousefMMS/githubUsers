
/**
 * @ngdoc service
 * @name githubUsersApp.utils/xhr
 * @description create an xhr call based on the specified parameters
 * # utils/xhr
 * Factory in the githubUsersApp.
 */
(function () {
    'use strict';

    angular.module('githubUsersApp')
      .factory('xhr', xhr);


    function xhr($http, $q, config, errorResolver) {

        // Default options of any HTTP request
        function getDefaultOptions() {
            return {
                method: 'GET',
                //headers: { 'Authorization': 'Bearer ' + getAccessToken() },
                timeout: config.TIMEOUT,
                cache: false,
                data: null,
                params: null,
                responseType: ""
            };
        }

        // Construct HTTP request data
        function constructPayload(payloadObj) {
            if (!angular.isObject(payloadObj)) {
                console.error('Invalid Parameter "payloadObj"');
            }
            else if (!payloadObj.url) {
                console.error('Missing Parameter "payloadObj.url"');
            }

            payloadObj.url = config.GET_BACKEND_URL() + payloadObj.url;
            return angular.extend({}, getDefaultOptions(), payloadObj);
        }

        function accept(data) {
            return $q.when(data);
        }

        function reject(rejectionReason, data) {
            var error = {
                reason: rejectionReason,
                serverResponse: data
            };

            errorResolver.resolve(error);
            return $q.reject(error);
        }

        // Get service url
        function getServiceUrl(optsObj) {
            return optsObj.url;
        }

        function call(options) {
            var finalPayload = constructPayload(options);

            return $http(finalPayload)
                .then(function (response) {

                    if (response.data) {
                        console.log('%cIncoming | Service: ' + getServiceUrl(options) + ' | Response: ', 'color: green', response.data);
                        return accept(response.data);
                    }
                    //else {
                    //    //handle any business or custom rejection
                    //    rejection = 'BUSINESS';
                    //    console.error(rejection, '| Service:', getServiceUrl(options), '| Response:', response.data);
                    //    return reject(rejection, response.data);
                    //}
                }, function (response) {
                    var rejection;
                    if ([401, 404].indexOf(response.status) >= 0) {
                        rejection = "NOT_AUTH";
                        console.error(rejection, '| Service:', getServiceUrl(options), '| Response:', response);
                    } else if ([-1, 0].indexOf(response.status) >= 0) {
                        //Technical Rejection
                        rejection = 'OFFLINE';
                        console.error(rejection, '| Service:', getServiceUrl(options), '| Response:', response);
                    }

                    return reject(rejection, response.data);
                });
        }

        // Public API here
        return {
            call: call
        };
    }

})();