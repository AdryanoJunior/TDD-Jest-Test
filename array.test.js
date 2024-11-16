const foundIndices = require('./array')

describe('Função encontrar Indices', () => {

    it('Em um array númerico, deve retornar os índices do maior e menor valor', () => {
        const array = [10, 20, 5, 8];
        const resultado = encontrarIndices(array);
        expect(resultado).toEqual({ indiceMaior: 1, indiceMenor: 2 });
    });
    });
