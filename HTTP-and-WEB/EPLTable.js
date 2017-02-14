// This file consumes a public football API and displays the current English Premier League standings.

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var request = new XMLHttpRequest();
var url = "https://api.crowdscores.com/v1/league-tables?competition_id=2&api_key=921546c878a148fd92788722e79b8026";

function sendRequest(request) {
  request.onreadystatechange = function () {
    requestHandler(request);
  };

  request.open("GET", url, true);
  request.setRequestHeader("Content-Type", "text/plain");
  request.send();
}

function requestHandler(request) {
  if (request.readyState === 4 && request.status === 200) {
    var result = JSON.parse(request.responseText);
    var league = result[0].leagueTable;

    console.log("\n\n\n");

    for (var i of league) {
      // To avoid displaying impertinent data, only target objects with 'position' as property. These are the teams.
      if ('position' in i) {

        // Justifying allows text to be displayed in a neat format
        // To get the number of spaces it takes to justify i.name to the left with length 25:
        var justifyName = 25 - i.name.length;

        // To get the number of spaces it takes to justify i.position to the left with length 8:
        var justifyPosition = 8 - String(i.position).length;

        console.log("   " + i.name + " ".repeat(justifyName) + i.position + " ".repeat(justifyPosition)
                    + "Games Played:      " + i.gamesPlayed + "      Points:      " + i.points);
        console.log('\n');

      }
    }

    console.log("\n\n");
  }
}

sendRequest(request);
