function caesarCipher(encrypt, shift) {
	if(shift === 0) return encrypt;
	return encrypt.replace(/[a-z]/g, (letter) =>
		String.fromCharCode(((letter.charCodeAt(0) - 97 + shift) % 26) + 97)
	);
};
caesarCipher('attack at dawn', 5)
module.exports = caesarCipher