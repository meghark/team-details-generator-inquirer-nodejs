const Manager = require('../lib/Manager.js');

describe('manager',function() {
    it('Verify creation of manager object', () =>{
        const manager = new Manager('Lina',3 , 'dummy2@email.com', '886-888-888');

        expect(manager.name).toBe('Lina');
        expect(manager.id).toBe(3);
        expect(manager.email).toBe('dummy2@email.com');
        expect(manager.onum).toBe('886-888-888');
    } )
});