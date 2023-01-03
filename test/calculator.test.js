const calculator = require('../tdd/calculator');

test('calculator module', () => {
	expect(calculator.add(4, 2)).toBe(6);
	expect(calculator.subtract(4, 2)).toBe(2);
	expect(calculator.divide(4, 2)).toBe(2);
	expect(calculator.multiply(4, 2)).toBe(8);
})