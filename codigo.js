
function calcularMDC(a, b) {
    
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return Math.abs(a); 
}


module.exports = calcularMDC;