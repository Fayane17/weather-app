var APIKey = "bbc5a82d3098668f50d48055e8c68c3b"

var queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIKey;
var submit = document.getElementById("submit")
var forecast = document.getElementById("5-day-forecast");
var cityInfo = document.getElementById("cityInfo");
var cityName = document.getElementById("city");
//var lat = data.lat
//var lon = data.lon
//var fiveDayForecastUrl = "api.openweathermap.org/data/2.5/forecast?lat="+ lat "&lon=" + lon "&appid=bbc5a82d3098668f50d48055e8c68c3b"

//make var city an empty var so you can pass the city input into it. *link input field as a *string?.

printCityName("tokyo")
getCityCoord("tokyo")
submit.addEventListener("submit", onSubmit)

function getResponseFromAPI(response) {
    return response.json();
}

function printCityName(cityName) {
    var queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial&appid=" + APIKey;
    console.log(queryUrl)
    fetch(queryUrl)
        .then(getResponseFromAPI)
        .then(function (data) {
            console.log(data);
            fiveDayForecast(data);
            displayWeather(data);
        });
}

function getCityCoord(cityName) {
    var geoCodingUrl = "https://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&limit=5&appid=bbc5a82d3098668f50d48055e8c68c3b";
    fetch(geoCodingUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        });
};

function onSubmit(event) {
    event.preventDefault()
    printCityName(cityName.value)
    getCityCoord(cityName.value)

};


function fiveDayForecast(data) {
    let lat = data.coord.lat;
    let lon = data.coord.lon;
    console.log(lat, lon)
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperia&appid=${APIKey}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            console.log(data.list);
        });
        // for (let i = 1; i < 6; i++) {

        //     let { icon } = data.list[i].weather[0];

        //     document.querySelector(".icon").src = `http://openweathermap.org/img/wn/${icon}.png`;
        //     document.querySelector(".description").innerText = data.list[i].weather[i].description;
        //     document.querySelector(".temp").innerText = data.list[i].main.temp + "°F";
        //     document.querySelector(".humidity").innerText = "Humidity: " + data.list[i].main.humidity + "%";
        //     document.querySelector(".wind").innerText = "Wind Speed: " + data.list[i].wind.speed;

        // }
};

function displayWeather(data) {
    let { name } = data;
    // let {dt_txt} = data; how to 
    let { icon, description } = data.weather[0];
    let { temp, humidity } = data.main;
    let { speed } = data.wind;
    console.log(name, icon, description, temp, humidity, speed);
    document.querySelector(".city").innerText = name;
    document.querySelector(".icon").src = `http://openweathermap.org/img/wn/${icon}.png`;
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°F";
    document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText = "Wind Speed: " + speed;

   
};

function storeCity() {
    var list = localStorage.getItem("city");
    document.getElementById("#storage").value = list;
    localStorage.setItem("city", ("#storage").value);
}