function wordCount(words) {

	// split words argument into an array containing each of the words in it using any amount of whitespace as delimiter
	var listOfWords = words.split(/\s+/);

	// Create an empty array to hold each of the entities in words without repitition
	var uniqueWords = [];

	listOfWords.forEach(function(word) {
		if (uniqueWords.indexOf(word) !== 1) {
			uniqueWords.push(word);
		}
	});

	var obj = {};

	for (var j of uniqueWords) {
		var count = 0;
		for (var i of listOfWords) {

			// count how many times each of the words in uniqueWords appears in listOfWords
			if (j === i) {
				count += 1;
			}
		}

		// create a key in obj with the value of j, each word in uniqueWords, and give
		// it a property of count, the number of times it appears in listOfWords
		obj[j] = count;
	}
	return obj;
}

module.exports = wordCount;
