import { capitalize, reverseString, calculator, analyzeArray, caesarCipher } from "./index.js";
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

    test("Returns average value of array", () => {
        expect(object.average).toBe(4);
    })

    test("Returns min value of array", () => {
        expect(object.min).toBe(1);
    })

    test("Returns max value of array", () => {
        expect(object.max).toBe(8);
    })

    test("Returns length of array", () => {
        expect(object.length).toBe(6);
    })
})

describe("Caesar Cipher", () => {
    test("returns a string with each character “shifted”", () => {
        expect(caesarCipher("abc", 3)).toBe("def");
    });

    test("test wrapping from z to a", () => {
        expect(caesarCipher("xyz", 3)).toBe("abc");
    });

    test("test case preservation", () => {
        expect(caesarCipher('HeLLo', 3)).toBe("KhOOr");
    });

    test("test punctuation, spaces, and other non-alphabetical characters", () => {
        expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
    });
})