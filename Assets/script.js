var APIKey = "aa18f964e8a2a930ec917086af9a9e12";
var city; 
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

api.openweathermap.org/data/2.5/weather?q={city}&appid={APIKey}

fetch(queryURL)
// ajust app to accept user input to store in city var

/*      TODO:
*construct a query URL, use to make the API call.
*use the URL associated with Current Weather Data
*Once we have the application working, we can use the response data that's returned by the query in the application 

*/