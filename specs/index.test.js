const Prueba = require('../src/index');

describe('Validate function', () => {
    console.log('asdadasda ', Prueba);
    it('Prueba.toDecimal is a function', () => {
        expect(typeof Prueba.toDecimal).toEqual('function');
    });
    it('should support null parameter', () => {
        expect(Prueba.toDecimal(null)).toBe(0);
    });
    it('should return 0 if send "0" ', () => {
        expect(Prueba.toDecimal("0")).toBe(0);
    });
    it('should return 1 if send "1" ', () => {
        expect(Prueba.toDecimal("1")).toBe(1);
    });
    it('should return 2 if send "10" ', () => {
        expect(Prueba.toDecimal("10")).toBe(2);
    });
    it('should return 3 if send "11" ', () => {
        expect(Prueba.toDecimal("11")).toBe(3);
    });
    it('should return 4 if send "100" ', () => {
        expect(Prueba.toDecimal("100")).toBe(4);
    });
    it('should return 3447125 if send "1101001001100101010101" ', () => {
        expect(Prueba.toDecimal("1101001001100101010101")).toBe(3447125);
    });
});

