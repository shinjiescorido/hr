'use strict';

describe('Controller: PayrollCtrl', function () {

  // load the controller's module
  beforeEach(module('ifritApp'));

  var PayrollCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PayrollCtrl = $controller('PayrollCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
