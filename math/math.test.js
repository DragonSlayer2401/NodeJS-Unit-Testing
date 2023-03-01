const { subtract, add, multiply, divide, sqrt, max } = require("./math");

describe("Testing the math module", () => {
    
    test("Should add two numbers and return the sum", () => {
        expect(add(100, 200)).toBe(300);
    });

    test("Should subtract two numbers and return the difference", () => {
        expect(subtract(500, 400)).toBe(100);
    });

    test("Should multiply two numbers and return the product.", () => {
        expect(multiply(10, 20)).toBe(200);
    });

    test("Should divide two numbers and return the quotient", () => {
        expect(divide(200, 100)).toBe(2);
    });

    test("Should take a number and return the square root", () => {
        expect(sqrt(10)).toBe(3.1622776601683795);
    });

    test("Should take two parameters and return the max", () => {
        expect(max(100, 500)).toBe(500);
    });
});