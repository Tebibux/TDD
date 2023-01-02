const capitalize = require('../tdd/capitalize');

test('toCapitalize First letter', ()=> {
	expect(capitalize('computer')).toBe('Computer')
})