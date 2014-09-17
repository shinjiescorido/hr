'use strict';

/**
 * @ngdoc directive
 * @name ifritApp.directive:payrollDerictive
 * @description
 * # payrollDerictive
 */
angular.module('ifritApp')
  .directive('payrollDerictive', function () {
    return {
      templateUrl: '../../views/payroll-td.html'
    };
  });
