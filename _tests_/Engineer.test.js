const Engineer = require('../lib/Engineer.js');

describe('Engineer',function() {
    it('Verify creation of engineer object', () =>{
        const engineer = new Engineer('Deena',31 , 'dummy@email.com', 'githubrepo');

        expect(engineer.name).toBe('Deena');
        expect(engineer.id).toBe(31);
        expect(engineer.email).toBe('dummy@email.com');
        expect(engineer.github).toBe('githubrepo');
    } )

    it('Verify get role', function(){
        const emp = new Engineer('Drew6',35, 'dummy6@email.com','repo');
        expect(emp.getRole()).toBe('Engineer');        
    });
    
    it('Verify get github link', function(){
        const emp = new Engineer('Drew6',36, 'dummy6@email.com', 'repo1');
        expect(emp.getGithub()).toBe('repo1');        
    });

    it('verif error when github username is missing', function(){
        const newEmp  = () => new Engineer('Jane', 37, 't@t.com', '');
        const err = new Error('Provide github user name to add engineer');

        expect(newEmp).toThrowError(err);
    })
});