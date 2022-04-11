const Manager = require('../lib/Manager.js');

describe('manager',function() {
    it('Verify creation of manager object', () =>{
        const manager = new Manager('Lina',21 , 'dummy2@email.com', '886-888-888');

        expect(manager.name).toBe('Lina');
        expect(manager.id).toBe(21);
        expect(manager.email).toBe('dummy2@email.com');
        expect(manager.onum).toBe('886-888-888');
    } )

     it('Verify get role', function(){
        const emp = new Manager('Drew',25, 'dummy6@email.com', '676-536-765');
        expect(emp.getRole()).toBe('Manager');        
    });
    
    it('Veriy get office number', function(){
        const emp = new Manager('Drew',26, 'dummy7@email.com', '676-536-767');
        expect(emp.getOfficeNum()).toBe('676-536-767');        
    });

    it('Verify error when manager office number is missing', function(){
        const newEmp =() => new Manager('Trish', 27,'Test@test.com');
        const err = new Error("Please provide officenumber for manager");

        expect(newEmp).toThrowError(err);
    })
});