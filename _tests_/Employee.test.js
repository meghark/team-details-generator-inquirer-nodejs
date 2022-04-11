const Employee = require('../lib/Employee.js');

describe('Employee',function() {
    it('Verify creation of employee object', () =>{
        const employee = new Employee('Steve',10 , 'dummy98@email.com');

        expect(employee.name).toBe('Steve');
        expect(employee.id).toBe(10);
        expect(employee.email).toBe('dummy98@email.com');
     } )

     it('Verify get employee name', function(){
        const emp = new Employee('Dre673',11, 'dummy3@email.com');
        expect(emp.getName()).toBe('Dre673');        
    });

    it('Verify get employee id', function(){
        const emp = new Employee('Drew',12, 'dummy4@email.com');
        expect(emp.getId()).toBe(12);        
    });

    it('Verify get employee email', function(){
        const emp = new Employee('Jerry',13, 'dummy45@email.com');
        expect(emp.getEmail()).toBe('dummy45@email.com');        
    });

    it('Verify get employee role', function(){
        const emp = new Employee('Danny',14, 'dummy6@email.com');
        expect(emp.getRole()).toBe('Employee');        
    });

    it('Verify list of employee ids', function(){
        const emp1 = new Employee('Emp1', 15, 'fake@email.com');
        const emp2 = new Employee('Emp1', 16, 'fake@email.com');
        expect(Employee.listOfIds).toContain(15);
        expect(Employee.listOfIds).toContain(16);
    });

    it('Verify error when object created without arguments', function(){
        const emp = () => new Employee();
        expect(emp).toThrow();
    });

    it('Verify error when name is missing', function(){
        const newEmp = () => new Employee('',1,'t@t.com',);
        const err =new Error("Provide name to add employee");

        expect(newEmp).toThrowError(err);
    });

    it('Verify error when id is missing', function(){
        const newEmp = () => new Employee('Test','','t@t.com');
        const err = new Error("Provide a valid non-negative whole number as id");

        expect(newEmp).toThrowError(err);
    })

    it('Verify error when id is negative', function(){
        const newEmp = () => new Employee('Test',-5,'t@t.com');
        const err = new Error("Provide a valid non-negative whole number as id");

        expect(newEmp).toThrowError(err);
    })

    it('Verify error when id is string', function(){
        const newEmp = () => new Employee('Test','5test','t@t.com');
        const err = new Error("Provide a valid non-negative whole number as id");

        expect(newEmp).toThrowError(err);
    })

    it('Verify error when id is decimal', function(){
        const newEmp = () => new Employee('Test',8.5,'t@t.com');
        const err = new Error("Provide a valid non-negative whole number as id");

        expect(newEmp).toThrowError(err);
    })

    it('Verify error when email is missing', function(){
        const newEmp = () => new Employee('Test',17,'');
        const err = new Error("Provide email to add employee");

        expect(newEmp).toThrowError(err);
    })
 
    it('Verify error when email is invalid', function(){
        const newEmp = () => new Employee('Test',17,'@test.');
        const err = new Error("Please provide an email address in format string@string.com");

        expect(newEmp).toThrowError(err);
    })
});