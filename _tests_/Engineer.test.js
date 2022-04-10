const Engineer = require('../lib/Engineer.js');

describe('Engineer',function() {
    it('Verify creation of engineer object', () =>{
        const engineer = new Engineer('Deena',1 , 'dummy@email.com', 'githubrepo');

        expect(engineer.name).toBe('Deena');
        expect(engineer.id).toBe(1);
        expect(engineer.email).toBe('dummy@email.com');
        expect(engineer.github).toBe('githubrepo');
    } )

    it('Verify get engineer name', function(){
        const emp = new Engineer('Drew',3, 'dummy3@email.com');
        expect(emp.getName()).toBe('Drew');        
    });

    it('Verify get engineer id', function(){
        const emp = new Engineer('Drew4',4, 'dummy4@email.com');
        expect(emp.getId()).toBe(4);        
    });

    it('Verify get engineer email', function(){
        const emp = new Engineer('Drew5',5, 'dummy5@email.com');
        expect(emp.getEmail()).toBe('dummy5@email.com');        
    });

    it('Verify get role', function(){
        const emp = new Engineer('Drew6',6, 'dummy6@email.com');
        expect(emp.getRole()).toBe('Engineer');        
    });
    
    it('Verify get github link', function(){
        const emp = new Engineer('Drew6',6, 'dummy6@email.com', 'repo1');
        expect(emp.getGithub()).toBe('repo1');        
    });
});