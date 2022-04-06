const Engineer = require('../lib/Engineer.js');

describe('Engineer',function() {
    it('Verify creation of engineer object', () =>{
        const engineer = new Engineer('Deena',1 , 'dummy@email.com', '888-888-888');

        expect(engineer.name).toBe('Deena');
        expect(engineer.id).toBe(1);
        expect(engineer.email).toBe('dummy@email.com');
        expect(engineer.onum).toBe('888-888-888');
    } )
});