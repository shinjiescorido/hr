'use strict';

describe('Service: fPayroll', function () {

  // load the service's module
  beforeEach(module('ifritApp'));

  // instantiate service
  var fPayroll;
  beforeEach(inject(function (_fPayroll_) {
    fPayroll = _fPayroll_;
  }));

  it('should do something', function () {
    expect(!!fPayroll).toBe(true);
  });

});
