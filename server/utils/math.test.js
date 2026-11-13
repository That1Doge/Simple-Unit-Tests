const mathUtils = require('./math.js');

const testVars = {
    max: 20,
    min: 0,
}

describe('add()', () => {
    test('find the sum of two numbers', () => {
        expect(mathUtils.add(5, 10)).toBe(15);
    });

    test('should clamp num to min', () => {
        expect(mathUtils.add(testVars.min, -1)).toBe(testVars.min);
    });

    test('should clamp num to max', () => {
        expect(mathUtils.add(testVars.max + 2, 1)).toBe(testVars.max);
    });

});

describe('multiply()', () => {
    test('finds the product of two numbers', () => {
        expect(mathUtils.mul(5, 10)).toBe(50);
    });

    test('clamps inputs to maximum', () => {
        // We can have multiple cases checked within a singular test.
        expect(mathUtils.mul(testVars.max + 1, 10)).toBe(testVars.max * 10);
        expect(mathUtils.mul(5, testVars.max + 1)).toBe(5 * testVars.max);
    });

    test('clamps inputs to minimum', () => {
        expect(mathUtils.mul(testVars.min - 1, 10)).toBe(testVars.min * 10);
        expect(mathUtils.mul(5, testVars.min - 1)).toBe(5 * testVars.min);
    });
});