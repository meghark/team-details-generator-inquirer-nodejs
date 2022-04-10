const Employee = require('../lib/Employee.js');

describe('Employee',function() {
    it('Verify creation of employee object', () =>{
        const employee = new Employee('Steve',98 , 'dummy98@email.com');

        expect(employee.name).toBe('Steve');
        expect(employee.id).toBe(98);
        expect(employee.email).toBe('dummy98@email.com');
     } )

     it('Verify get employee name', function(){
        const emp = new Employee('Dre673',3, 'dummy3@email.com', '676-536-763');
        expect(emp.getName()).toBe('Dre673');        
    });

    it('Verify get employee id', function(){
        const emp = new Employee('Drew',70, 'dummy4@email.com', '676-536-762');
        expect(emp.getId()).toBe(70);        
    });

    it('Verify get employee email', function(){
        const emp = new Manager('Jerry',45, 'dummy45@email.com', '676-536-764');
        expect(emp.getEmail()).toBe('dummy45@email.com');        
    });

    it('Verify get employee role', function(){
        const emp = new Employee('Danny',56, 'dummy6@email.com', '676-536-765');
        expect(emp.getRole()).toBe('Employee');        
    });
 
});