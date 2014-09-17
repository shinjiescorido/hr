'use strict';

/**
 * @ngdoc function
 * @name ifritApp.controller:ShinjiCtrl
 * @description
 * # ShinjiCtrl
 * Controller of the ifritApp
 */
angular.module('ifritApp')
  .controller('ShinjiCtrl', function ( users, $scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.shinjiVar = 'Supah!!';
    $scope.animals = [ 'dog', 'rooster' ];
    $scope.users = users;
    $scope.clicker = function () {
    	alert(1);
    };
  });
