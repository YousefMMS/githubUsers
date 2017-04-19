
/**
 * @ngdoc directive
 * @name githubUsersApp.directive:dateViewer
 * @description display date or datetime with general format configured in config file
 * @example <span dateViewer="anyDate"></span>
 */
(function () {
    'use strict';

    function dateViewer($filter, config, resources) {
        return {
            restrict: 'A',
            scope: {
                dateViewer: '='
            },
            link: function postLink(scope, element, attrs) {

                function dispalyDate(date, title) {
                    element.text(date);
                    element.attr('title', title);
                }

                function showDate(date, format, titleFormat) {
                    if (date) {
                        dispalyDate($filter('date')(date, format), $filter('date')(date, titleFormat));
                    } else {
                        var noDate = resources.NO_DATE_ASSIGNED;
                        dispalyDate(noDate, noDate);
                    }
                }

                function applyDate(date, format) {
                    //set date as default value
                    format = format || 'date';
                    date = new Date(date);
                    switch (format) {
                        case 'date':
                            showDate(date, config.DATE_FORMAT, config.LONG_DATE_FORMAT);
                            break;
                        case 'datetime':
                            showDate(date, config.DATE_TIME_FORMAT, config.LONG_DATE_TIME_FORMAT);
                            break;
                        default:
                            showDate(date, attrs.format, config.LONG_DATE_TIME_FORMAT);
                            break;
                    }
                }

                scope.$watch('dateViewer', function (newValue) {
                    applyDate(newValue, attrs.format);
                });
            }
        };
    }

    angular.module('githubUsersApp')
        .directive('dateViewer', dateViewer);

})();