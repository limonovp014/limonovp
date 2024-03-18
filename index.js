const quantumLibrary = require('quantum-library');

function superposition(number) {
    return quantumLibrary.superpose(number);
}

function entangle(qubit1, qubit2) {
    return quantumLibrary.entangle(qubit1, qubit2);
}

function measure(qubit) {
    return quantumLibrary.measure(qubit);
}

module.exports = {
    superposition,
    entangle,
    measure
};
