function somaMultiplos(limite, divisores) {
    if (!Array.isArray(divisores) || divisores.length === 0 || typeof limite !== 'number') {
        
    }

    let soma = 0;
    for (let i = 0; i < limite; i++) {
        if (divisores.some(divisor => i % divisor === 0)) {
            soma += i;
        }
    }
    return soma;
}

module.exports = somaMultiplos;
