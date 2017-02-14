var reverseString = require('../app/reverse.js');

describe("it only takes a string as argument", function() {
  it("should throw an error for any number", function() {
    expect(function() { reverseString(8); }).toThrow(new Error("reverse only takes strings as input"));
    expect(function() { reverseString(-100); }).toThrow(new Error("reverse only takes strings as input"));
  });

  it("should throw an error for an object", function() {
    expect(function() { reverseString( {} ); }).toThrow(new Error("reverse only takes strings as input"));
  });

  it("should throw an error for boolean values", function() {
    expect(function() { reverseString(true); }).toThrow(new Error("reverse only takes strings as input"));
    expect(function() { reverseString(false); }).toThrow(new Error("reverse only takes strings as input"));
  });
});

describe("Produce the reverse order of a word: ", function() {
  describe("Case for en empty string", function() {

    it("should return null for empty string", function() {
      expect(reverseString('')).toEqual(null);
    });

  });

  describe("Case for palindromes", function() {

    it("should return true for `anna`", function() {
      expect(reverseString('anna')).toEqual(true);
    });

    it("should return true for `NaN`", function() {
      expect(reverseString('NaN')).toEqual(true);
    });

    it("should return true for `civic`", function() {
      expect(reverseString('civic')).toEqual(true);
    });

  });

  describe("Case for normal words", function() {

    it("should return `skoob` for `books`", function() {
      expect(reverseString('books')).toEqual('skoob');
    });

    it("should return `nomolos` for `solomon`", function() {
      expect(reverseString('solomon')).toEqual('nomolos');
    });

    it("should return `csim` for `misc`", function() {
      expect(reverseString('misc')).toEqual('csim');
    });

  });

});
