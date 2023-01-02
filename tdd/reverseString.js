function reverseString(value) {
	let string = '';
	let tempValue = '';
	for (let i = 0; i <= value.length; i++) {
		tempValue = value.slice((value.length - (i + 1)), value.length - i);
		string += tempValue;
	}
	return string;
}

module.exports = reverseString