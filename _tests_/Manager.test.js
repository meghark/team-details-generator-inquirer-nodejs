const Manager = require('../lib/Manager.js');

describe('manager',function() {
    it('Verify creation of manager object', () =>{
        const manager = new Manager('Lina',3 , 'dummy2@email.com', '886-888-888');

        expect(manager.name).toBe('Lina');
        expect(manager.id).toBe(3);
        expect(manager.email).toBe('dummy2@email.com');
        expect(manager.onum).toBe('886-888-888');
    } )

     it('get employee name', function(){
        const emp = new Manager('Drew1',3, 'dummy3@email.com', '676-536-763');
        expect(emp.getName()).toBe('Drew1');        
    });

    it('get employee id', function(){
        const emp = new Manager('Drew',4, 'dummy4@email.com', '676-536-762');
        expect(emp.getId()).toBe(4);        
    });

    it('get employee email', function(){
        const emp = new Manager('Drew',5, 'dummy5@email.com', '676-536-764');
        expect(emp.getEmail()).toBe('dummy5@email.com');        
    });

    it('get role', function(){
        const emp = new Manager('Drew',6, 'dummy6@email.com', '676-536-765');
        expect(emp.getRole()).toBe('Manager');        
    });
    
    it('get role', function(){
        const emp = new Manager('Drew',7, 'dummy7@email.com', '676-536-767');
        expect(emp.getOfficeNum()).toBe('676-536-767');        
    });
});