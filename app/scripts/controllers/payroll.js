'use strict';

/**
 * @ngdoc function
 * @name ifritApp.controller:PayrollCtrl
 * @description
 * # PayrollCtrl
 * Controller of the ifritApp
 */
angular.module('ifritApp')
  .controller('PayrollCtrl', function (fPayroll, $scope) {
    $scope.payroll = fPayroll;
    $scope.template = 'views/payroll-td.html';
    console.log(fPayroll);
  });
