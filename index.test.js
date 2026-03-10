import { capitalize, reverseString } from "./index.js";
import { expect, test } from '@jest/globals';

test("Capitalize first letter", () => {
    expect(capitalize("book")).toBe("Book");
});

test("Reverse string", () => {
    expect(reverseString("string")).toBe("gnirts");
})