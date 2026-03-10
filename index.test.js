import { capitalize } from "./index.js";
import { expect, test } from '@jest/globals';

test("capitalize first letter", () => {
    expect(capitalize("book")).toBe("Book");
});