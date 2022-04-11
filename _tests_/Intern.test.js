const Intern = require('../lib/Intern.js');

describe('Intern',function() {
    it('Verify creation of intern object', () =>{
        const intern = new Intern('James',41 , 'dummy1@email.com', 'Test School');

        expect(intern.name).toBe('James');
        expect(intern.id).toBe(41);
        expect(intern.email).toBe('dummy1@email.com');
        expect(intern.school).toBe('Test School');
    } )
    
    it('Verify get role', function(){
        const emp = new Intern('James',45 , 'dummy1@email.com', 'Test School');
        expect(emp.getRole()).toBe('Intern');        
    });

    it('Verify get school', function(){
        const emp = new Intern('James',46 , 'dummy1@email.com', 'Test School1');
        expect(emp.getSchool()).toBe('Test School1');        
    });

    it('Verify error when intern school name is missing', function(){
        const newEmp =() => new Intern('Nancy', 47,'Test@test.com');
        const err = new Error("Please provide school name for intern");

        expect(newEmp).toThrowError(err);
    })
});