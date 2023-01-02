function capitalize(value) {
	let newString, tempChar, tempRemain;
	tempChar = value.slice(0, 1).toUpperCase();
	tempRemain = value.slice(1, value.length);
	newString = tempChar + tempRemain;
	return newString;
}

module.exports = capitalize;