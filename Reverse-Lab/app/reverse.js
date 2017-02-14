function reverseString(string) {
  if (typeof(string) !== 'string') {
    throw new Error("reverse only takes strings as input")
  }
  
  if (string.length === 0) {
    return null;
  }

	stringReversed = string.split("").reverse().join("");
	if (stringReversed === string) {
		return true;
	}

	return stringReversed;
}

module.exports = reverseString;
