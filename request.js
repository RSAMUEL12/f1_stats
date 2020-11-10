var url = "https://ergast.com/api/f1/current/driverStandings.json"
var jsonData;

function getDriversChampionship() {
    fetch(url)
        .then(
            function(response) {
            if (!response.ok) {
                // error handling if response does not work
                // TODO: throw an error instead of console.log() for HTML processing 
                console.log('Looks like there was a problem. Status Code: ' +
                response.status);
                return;
            }
            return response.json();ß
            }
        ).then( data => {
                // perform all data processing and document functions here

                // cycle through each driver in order of Driver Standings
                for (var position of data['MRData']['StandingsTable'].StandingsLists[0].DriverStandings) {
                    console.log("Position: ", position.position, "Driver: ", position.Driver.givenName, position.Driver.familyName);
                    //TODO: print out driver JSON object in position var
                }
        	}
        ) .catch(function(err) {
            console.log('Fetch Error :-S', err);
        });
}

getDriversChampionship()