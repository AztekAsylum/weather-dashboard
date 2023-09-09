//VARIABLE DECLARTIONS

var searchCity = "Denver";
var apiKey = "845f0c1468ec5f7248843261bd4c20e1";
var searchButton = $("#searchButton");
var searchInput = $("#searchInput");
// var searchCity = {}

//FUNCTIONS
// Lat and Lon
function getWeather(lat, lon) {
  var forcastQueryURL = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;
  fetch(forcastQueryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      // console.log(data[0].lat);
      // var lat = data[0].lat;
    });
}

// getWeather();
function getCoord(city) {
  var coordsQueryURL =
    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=` + apiKey;
  fetch(coordsQueryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data[0]);
      var lat = data[0].lat;
      var lon = data[0].lon;
      getWeather(lat, lon);
      getDaily(lat, lon);
    });
}

// GET DAILY WEATHER
function getDaily(lat, lon) {
  var forcastQueryURL = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
  fetch(forcastQueryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      // console.log(data[0].lat);
      // var lat = data[0].lat;
    });
}

// getCoord(searchCity);

// Lose Code
searchButton.on("click", function (event) {
  var userInput = searchInput.val();
  getCoord(userInput);
  // console.log(userInput);
});
