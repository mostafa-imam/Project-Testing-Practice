export { capitalize, reverseString, calculator, analyzeArray, caesarCipher };

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

function caesarCipher(str, shift) {

    const n = (shift % 26 + 26) % 26;

    return [...str]
        .map((char) => {
            const c = char.charCodeAt(0);

            if (c >= 65 && c <= 90) {
                return String.fromCharCode(((c - 65 + n) % 26) + 65);
            }

            else if (c >= 97 && c <= 122) {
                return String.fromCharCode(((c - 97 + n) % 26) + 97);
            }

            else {
                return char;
            }
        })
        .join('');
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