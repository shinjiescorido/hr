'use strict';

/**
 * @ngdoc service
 * @name ifritApp.users
 * @description
 * # users
 * Factory in the ifritApp.
 */
angular.module('ifritApp')
  .factory('users', function () {
    // Service logic
    // ...

   // var meaningOfLife = 42;

    // Public API here
    return [{
    	'name' : 'shinji',
    	'gender' : 'm'
    }];
  });
