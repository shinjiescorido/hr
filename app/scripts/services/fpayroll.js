'use strict';

/**
 * @ngdoc service
 * @name ifritApp.fPayroll
 * @description
 * # fPayroll
 * Factory in the ifritApp.
 */
angular.module('ifritApp')
    .factory('fPayroll', function() {
        // Service logic
        // ...
        var operation = [{
            'note': '',
            'name': 'Demo Assisstant',
            'grossPay': '3,350.00',
            'deduction': '3,865.77',
            'misc': '0.00',
            'netPay': '5,484.23',
            'action': 'View',
            'success': 'success'
        }, {
            'note': '',
            'name': 'Jessica Nalzaro',
            'grossPay': '5,523.60',
            'deduction': '1,525.00',
            'misc': '0.00',
            'netPay': '3,998.60',
            'action': 'View',
            'success': ''
        }, {
            'note': 'fa fa-exclamation-circle',
            'name': 'Demo Ops',
            'grossPay': '4,203.60',
            'deduction': '1,443.75',
            'misc': '0.00',
            'netPay': '2,759.85',
            'action': 'View',
            'success': 'success'
        }, {
            'note': '',
            'name': 'Ryan Velasquez',
            'grossPay': '11,011.20',
            'deduction': '1,568.75',
            'misc': '0.00',
            'netPay': '9,441.45',
            'action': 'View',
            'success': ''
        }];
        var management = [{
            'note': 'fa fa-exclamation-circle',
            'name': 'Lowell Carlos',
            'grossPay': '6,022.60',
            'deduction': '4,568.75',
            'misc': '0.00',
            'netPay': '1,453.85',
            'action': 'View',
            'success': 'success'
        }, {
            'note': 'fa fa-exclamation-circle',
            'name': 'Juan Cruz',
            'grossPay': '4,108.80',
            'deduction': '1,568.75',
            'misc': '0.00',
            'netPay': '2,540.05',
            'action': 'View',
            'success': ''
        }, {
            'note': '',
            'name': 'Juanita Dela Cruz',
            'grossPay': '5,505.60',
            'deduction': '1,506.25',
            'misc': '0.00',
            'netPay': '3,999.35',
            'action': 'View',
            'success': ''
        }];

        var pasig = [{
            'note': 'fa fa-exclamation-circle',
            'name': 'Demo Admin',
            'grossPay': '8,447.92',
            'deduction': '20,224.42',
            'misc': '0.00',
            'netPay': '-11,776.50',
            'action': 'View',
            'success': ''
        }];
        // Public API here
        return {
            getPasig: function() {
                return pasig;
            },
            getManagement: function() {
                return management;
            },
            getOperations: function() {
                return operation;
            }
        };
    });