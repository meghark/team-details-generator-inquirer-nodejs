const Intern = require('../lib/Intern.js');

describe('Intern',function() {
    it('Verify creation of intern object', () =>{
        const intern = new Intern('James',2 , 'dummy1@email.com', 'Test School');

        expect(intern.name).toBe('James');
        expect(intern.id).toBe(2);
        expect(intern.email).toBe('dummy1@email.com');
        expect(intern.school).toBe('Test School');
    } )

    it('get employee name', function(){
        const emp = new Intern('James',2 , 'dummy1@email.com', 'Test School');
        expect(emp.getName()).toBe('James');        
    });

    it('get employee id', function(){
        const emp = new Intern('James',2 , 'dummy1@email.com', 'Test School');
        expect(emp.getId()).toBe(2);        
    });

    it('get employee email', function(){
        const emp = new Intern('James',2 , 'dummy1@email.com', 'Test School');
        expect(emp.getEmail()).toBe('dummy1@email.com');        
    });

    it('get role', function(){
        const emp = new Intern('James',2 , 'dummy1@email.com', 'Test School');
        expect(emp.getRole()).toBe('Intern');        
    });

    it('get school', function(){
        const emp = new Intern('James',2 , 'dummy1@email.com', 'Test School1');
        expect(emp.getSchool()).toBe('Test School1');        
    });
});