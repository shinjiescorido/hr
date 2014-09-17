'use strict';

describe('Directive: payrollDerictive', function () {

  // load the directive's module
  beforeEach(module('ifritApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<payroll-derictive></payroll-derictive>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the payrollDerictive directive');
  }));
});
