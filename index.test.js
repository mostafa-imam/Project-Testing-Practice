import { capitalize, reverseString, calculator, analyzeArray, /* caesarCipher */ } from "./index.js";
import { describe, expect, test } from '@jest/globals';

test("Capitalize first letter", () => {
    expect(capitalize("book")).toBe("Book");
});

test("Reverse string", () => {
    expect(reverseString("string")).toBe("gnirts");
});

describe("Calculator", () => {

    test("Add two numbers", () => {
        expect(calculator.add(1, 3)).toBe(4);
    });

    test("Subtract two numbers", () => {
        expect(calculator.subtract(4, 2)).toBe(2);
    });

    test("Multiply two numbers", () => {
        expect(calculator.multiply(6, 2)).toBe(12);
    })

    test("Divide two numbers", () => {
        expect(calculator.divide(14, 2)).toBe(7);
    })

});

describe("Analyze Array", () => {
    const object = analyzeArray([1, 8, 3, 4, 2, 6]);
    expect(object.average).toBe(4);
    expect(object.min).toBe(1);
    expect(object.max).toBe(8);
    expect(object.length).toBe(6);
})