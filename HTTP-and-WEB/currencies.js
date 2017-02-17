// Displays  a list of current exchange rates using the USD as the base.

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var request = new XMLHttpRequest();
var url = "http://api.fixer.io/latest?base=USD";

function sendRequest(request) {
  request.onreadystatechange = function () {
    if (request.readyState === 4) {
      if (request.status === 200) {
        console.log("\n \n \n These are the exchange rates as of today: \n \n \n");
        console.log(JSON.parse(request.responseText));
        console.log("\n \n")
      }

      else {
        console.log ("Error: " + request.responseText);
      }
    }
  };

  request.open("GET", url, true);
  request.setRequestHeader("Content-Type", "text/plain");
  request.send();
}

/*function requestHandler(request) {

}*/

sendRequest(request);
