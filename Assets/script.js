var APIKey = "aa18f964e8a2a930ec917086af9a9e12";
var city = prompt("Enter a city name:");

var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

api.openweathermap.org / data / 2.5 / weather ? q = { city } & appid:APIKey={ APIKey }

fetch(queryURL)
    .then(function (response) {
        // Handle the response from the API
        return response.json();
    })
    .then(function (data) {
        // Use the data returned by the API
        console.log(data);
        // Add your code to handle the weather data here
    })
    .catch(function (error) {
        // Handle any errors that occur during the fetch request
        console.log("Error:", error);
    });
// ajust app to accept user input to store in city var use a prompt or an input field to get the city name from the user.

/*      TODO:
*construct a query URL, use to make the API call.
*use the URL associated with Current Weather Data
*Once we have the application working, we can use the response data that's returned by the query in the application 
//Construct the query URL by concatenating the city and APIKey variables with the base URL.
*/