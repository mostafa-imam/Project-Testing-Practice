export { capitalize, reverseString, calculator, analyzeArray /* caesarCipher */ };

function capitalize(string) {
    return string.at(0).toUpperCase() + string.slice(1);
}

function reverseString(string) {
    let arr = string.split("");

    return arr.reverse().join("");
}

const calculator = {
    add(a, b) {
        return a + b;
    },

    subtract(a, b) {
        return a - b;
    },

    multiply(a, b) {
        return a * b;
    },

    divide(a, b) {
        return a / b;
    }
};

function analyzeArray(array) {
    let total = array.reduce((sum, item) => {
        return sum + item
    }, 0);

    let average = total / array.length;

    let min = Math.min(...array);
    let max = Math.max(...array);

    let length = array.length;

    return {
        average,
        min,
        max,
        length,
    }
}