const somaMultiplos = require('./somaMultiplos');

describe('Função somaMultiplos', () => {
    
    it('Deve retornar a soma de todos os múltiplos de 5 ou 7 abaixo de 1000', () => {
        const resultado = somaMultiplos(1000, [5, 7]);
        expect(resultado).toBe(156361);
    });
    });
    
