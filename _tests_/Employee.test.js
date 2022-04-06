const expect = require('chai/lib/chai/interface/expect');
const Employee = require('../lib/Employee');

describe('Employee',function(){
    it('Verify creation of new employee object', function(){
        const employee = new Employee('Deena',1, 'dummy.email.com');
        expect(employee.name).toBe('Deena');
        expect(employee.id).toBe(1);
        expect(employee.email).toBe('dummy.email.com');
    })

    it('Verify duplicate employee id is not allowed', function(){
        const employee1 = new Employee('Dane',2, 'dummy1.email.com');
        const employee2 = new Employee('James',2, 'dummy2.email.com');

        // create error object, test for error.
    })

    it('get employee name', function(){
        const emp = new Employee('Drew',3, 'dummy3@email.com');
        expect(emp.getName()).toBe('Drew');        
    });

    it('get employee id', function(){
        const emp = new Employee('Drew4',4, 'dummy4@email.com');
        expect(emp.getId()).toBe(4);        
    });

    it('get employee email', function(){
        const emp = new Employee('Drew5',5, 'dummy5@email.com');
        expect(emp.getEmail()).toBe('dummy5@email.com');        
    });

    it('get role', function(){
        const emp = new Employee('Drew6',6, 'dummy6@email.com');
        expect(emp.getRole()).toBe('Employee');        
    });
})