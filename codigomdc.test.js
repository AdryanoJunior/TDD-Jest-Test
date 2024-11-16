
const calcularMDC = require('./codigo');

describe('funções matemáticas', () => {
    
    it('Deve calcular o mdc entre dois números', () => {
        expect(calcularMDC(56, 98)).toBe(14);
});
   
    });
