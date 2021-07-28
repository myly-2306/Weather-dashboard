// submit buuton on index.html will
// location.assign to display.html
// display search city to display.html
var searchBtn = document.querySelector("#search-btn");

// searchBtn.addEventListener("submit", getDisplay)
// function getDisplay(event) {
//     event.preventDefault();

//     var searchInputVal = document.querySelector('.search-input').value;
// }


var APIKey = "558b53371eed05eba4d08b50a0e52a42";

var inputCity = document.querySelector(".search-input");



searchBtn.addEventListener("click", function(){
    var cityVal = inputCity.value;
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityVal + "&appid=" + APIKey;
    fetch (queryURL)
    .then(response => response.json())
    .then(data => console.log(data))

.catch(err => alert("Please search for a valid city 😩"))
})


// searchBtn.addEventListener("click", function(){
//     document.location.assign('display.html')
// })