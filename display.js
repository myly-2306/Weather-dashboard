var APIKey = "558b53371eed05eba4d08b50a0e52a42";
var userInput;

var cityInput = document.querySelector(".search-input");
var searchBtn = document.querySelector("#search-btn");
var tableBody = document.querySelector("#city-table");
var currentDisplay = document.querySelector("#current-display");

var currentTemp = document.querySelector("#current-temp");
var currentWind = document.querySelector("#current-wind");
var currentHumi = document.querySelector("#current-humi");
var uv = document.querySelector("#uv");

function getApi() {
  var cityVal = inputCity.value;
  
  var queryURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    cityVal +
    "&appid=" +
    APIKey;
  console.log(queryURL);
  fetch(queryURL)
    .then((response) => response.json())

    .then((data) => {
      var lat = data.coord.lat;
      var lon = data.coord.lon;

      console.log(data);
      currentDisplay.textContent = data.name;
    //   tableBody.textContent = data.name;
      // tableBody.append("<href>" + data.name + "</href>");
      tableBody.href = data.name;

      console.log(lat, lon);

      const uvIndexURL =
        "https://api.openweathermap.org/data/2.5/onecall?lat=" +
        lat +
        "&lon=" +
        lon +
        "&exclude=minutely,hourly,alerts&units=imperial&appid=" +
        APIKey;
      fetch(uvIndexURL)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          currentTemp.textContent = "Temp:" + " " + data.current.temp + "\xB0F";
          currentWind.textContent = "Wind Speed:" + " " + data.current.wind_speed + "MPH";
          currentHumi.textContent = "Humidity:" + " " + data.current.humidity;
          uv.textContent = "UV Index:" + " " + data.current.uvi;
          // var uvIndex = data.current.uvi; 
          // var uvValue = $("<p>" + uvIndex + "</p>");
          //           if (uvIndex <= 3) {
          //               uvValue.addClass("favorable");
          //           } else if (uvIndex > 3 && uvIndex <= 6) {
          //               uvValue.addClass("moderate");
          //           } else {
          //               uvValue.addClass("severe");
          //           }

          //           weatherDiv.append(uvValue);


          renderFiveDayForecast(data.daily);
        });
    });
}

// .catch(err => alert("Please search for a valid city 😩"))

searchBtn.addEventListener("click", getApi);



function renderFiveDayForecast(daily) {
    var day;
    var iconImage;
    var dayTemp;
    var dayWind;
    var dayHumi;
    console.log(daily);
    for (let i = 1; i <= 5; i++) {
        day = document.querySelector("#day" + i);
        day.innerHTML = moment.unix(daily[i].dt).format("MM/DD/YYYY");

        // dayImage = document.querySelector('#dayicon' + i);
        // var iconurl = 'http://openweathermap.org/img/wn/' + daily[i].weather[0].icon + '@2x.png';
        // dayImage.setAttribute('src', iconurl);

        iconImage = document.querySelector("#iconimage" +i);
        iconImage.src = 'http://openweathermap.org/img/wn/' + daily[i].weather[0].icon + '@2x.png';

        dayTemp = document.querySelector("#day-temp" +i);
        dayTemp.textContent = "Temp:" + " " + daily[i].temp.day + "\xB0F";

        dayWind = document.querySelector("#day-wind" +i);
        dayWind.textContent = "Wind:" + " " + daily[i].wind_speed + " " + "MPH";

        dayHumi = document.querySelector("#day-humi" +i);
        dayHumi.textContent = "Humidity:" + " " + daily[i].humidity;
    }
}


// function searchhistory () {

// }