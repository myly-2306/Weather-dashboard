var APIKey = "558b53371eed05eba4d08b50a0e52a42";
var userInput;



var cityInput = document.querySelector('.search-input');
var searchBtn = document.querySelector("#search-btn");
var tableBody = document.querySelector('#city-table');
var currentDisplay = document.querySelector('ul');

searchBtn.addEventListener("click", function(){
    var cityVal = inputCity.value;
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityVal + "&appid=" + APIKey;
    fetch (queryURL)
    .then(response => response.json())
    .then(data => {
        for (var i = 0; i < data.length; i++) {
            var name = document.createElement("h3");
            var temp = document.createElement("li");
            var wind = document.createElement("li");
            var humidity = document.createElement("li");
            name.textContent = data[i].name;
            currentDisplay.appendChild(name);
        }
    }) 

.catch(err => alert("Please search for a valid city 😩"))
})


// display weather data 





    // fetch(queryURL)
        
    //     .then(function(response) {
    //         return response.json();
    //     })
    //     .then(function (data) {
    //         // do stuff with the data
    //         console.log(data);
    //     })
        //     for (var i = 0; i < data.length; i++) {
        //         var createTableRow = document.createElement('tr');
        //         var tableData = document.createElement('td');
        //         var link = document.createElement('a');
        
        //         // Setting the text of link and the href of the link
        //         link.textContent = data[i].html_url;
        //         link.href = data[i].html_url;
        
        //         // Appending the link to the tabledata and then appending the tabledata to the tablerow
        //         // The tablerow then gets appended to the tablebody
        //         tableData.appendChild(link);
        //         createTableRow.appendChild(tableData);
        //         tableBody.appendChild(createTableRow);
        //     }
        // })
        // .catch(() => {
        //     msg.textContent = "Please search for a valid city 😩";
        // });
// }

// searchBtn.addEventListener("submit", getApi);
// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     // do stuff with the data
//   })
//   .catch(() => {
//     msg.textContent = "Please search for a valid city 😩";
//   });



// On search eventListener
// city history is listed on left column
// fetch queryURL to get OpenWeather data




// make cities in history clickable, refer Server Side API, assign.6