'use strict';

describe('Controller: ShinjiCtrl', function () {

  // load the controller's module
  beforeEach(module('ifritApp'));

  var ShinjiCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ShinjiCtrl = $controller('ShinjiCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
