// Displays a random popular quote from a public API

var unirest = require('unirest');

(function() {
  unirest.post("https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous")
    .header("X-Mashape-Key", "vgQrLAF3ROmsh2K5YAAaaN0tq68Mp15b53WjsnJUQIhTFT5X03")
    .header("Content-Type", "application/x-www-form-urlencoded")
    .header("Accept", "application/json")
    .end(function (result) {
      resultBody = JSON.parse(result.body);
      console.log('\n\n\n' + `  ${resultBody.quote} - ${resultBody.author}` + '\n\n\n');
    });
}());
