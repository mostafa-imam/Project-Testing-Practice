export { capitalize, reverseString, calculator };

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
}