const caesarCipher = require('../tdd/caesarCipher');


test('encrypt the content', () => {
	expect(caesarCipher('attack at dawn', 5)).toBe('fyyfhp fy ifbs');
})