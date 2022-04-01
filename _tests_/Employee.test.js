const { expect } = require('chai');
const Employee = require('../lib/Employee');

describe('Employee',function(){
    it('Verify creation of new employee object', function(){
        const employee = new Employee('Deena',1, 'dummy.email.com');

        expect(employee.name).toBe('Deena');
        expect(employee.id).toBe('1');
        expect(employee.email).toBe('dummy.email.com');
    })

    it('Verify duplicate employee id is not allowed', function(){
        const employee1 = new Employee('Dane',2, 'dummy1.email.com');
        const employee2 = new Employee('James',2, 'dummy2.email.com');

        // create error object, test for error.
    })
})