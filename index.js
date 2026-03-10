export { capitalize, reverseString };

function capitalize(string) {
    return string.at(0).toUpperCase() + string.slice(1);
}

function reverseString(string) {
    let arr = string.split("");

    return arr.reverse().join("");
}