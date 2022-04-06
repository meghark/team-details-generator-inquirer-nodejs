const Intern = require('../lib/Intern.js');

describe('Intern',function() {
    it('Verify creation of intern object', () =>{
        const intern = new Intern('James',2 , 'dummy1@email.com', '887-888-888');

        expect(intern.name).toBe('James');
        expect(intern.id).toBe(2);
        expect(intern.email).toBe('dummy1@email.com');
        expect(intern.onum).toBe('887-888-888');
    } )
});