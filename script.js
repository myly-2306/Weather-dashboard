
var APIKey = "558b53371eed05eba4d08b50a0e52a42";
var userInput;

var inputCity = document.querySelector(".search-input");
var searchBtn = document.querySelector("#search-btn");
var tableBody = document.querySelector("#city-table");
var currentDisplay = document.querySelector("#current-display");

var currentTemp = document.querySelector("#current-temp");
var currentWind = document.querySelector("#current-wind");
var currentHumi = document.querySelector("#current-humi");
var uv = document.querySelector("#uv");

searchBtn.addEventListener("submit", handleSearchButton)
function handleSearchButton(e) {
    e.preventDefault();
    var cityVal = inputCity.value;

    if (!city) {
        console.error('You need a search input value!');
        return;
    }

    var queryURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    cityVal +
    "&appid=" +
    APIKey;
    
    location.assign(queryURL);
};