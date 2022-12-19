var APIKey = "bbc5a82d3098668f50d48055e8c68c3b"
var city = "ocala"
var queryUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
var geoCodingUrl = "http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=bbc5a82d3098668f50d48055e8c68c3b";
var forecast = document.getElementById("5-day-forecast");
var cityInfo = document.getElementById("cityInfo");
var fiveDayForecastUrl = "api.openweathermap.org/data/2.5/forecast?lat="+ lat "&lon=" + lon "&appid=bbc5a82d3098668f50d48055e8c68c3b"

//make var city an empty var so you can pass the city input into it. *link input field as a *string?.

printCityName("Miami")

function getResponseFromAPI(response){
    return response.json();
}

function printCityName(cityName){
    var queryUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIKey;
    console.log(queryUrl)
    fetch(queryUrl)
.then(getResponseFromAPI)
.then(function (data) {
    console.log(data);
});
}

