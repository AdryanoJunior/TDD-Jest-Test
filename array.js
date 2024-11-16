function encontrarIndices(array) {
    if (!Array.isArray(array) || array.length === 0) {
        throw new Error('O array deve ser não vazio e válido.');
    }

    let indiceMaior = 0;
    let indiceMenor = 0;

    for (let i = 1; i < array.length; i++) {
        if (array[i] > array[indiceMaior]) {
            indiceMaior = i;
        }
        if (array[i] < array[indiceMenor]) {
            indiceMenor = i;
        }
    }

    return { indiceMaior, indiceMenor };
}

module.exports = encontrarIndices;
