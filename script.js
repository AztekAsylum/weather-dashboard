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

      var selectedData = [
        data.list[2],
        data.list[10],
        data.list[18],
        data.list[26],
        data.list[34],
      ];

      // DAY 1
      var day1Temp = document.getElementById("day1Temp");
      day1Temp.textContent = selectedData[0].main.temp;

      var day1Wind = document.getElementById("day1Wind");
      day1Wind.textContent = selectedData[0].wind.speed;

      var day1Humidity = document.getElementById("day1Humidity");
      day1Humidity.textContent = selectedData[0].main.humidity;

      var day1Date = document.getElementById("day1Date");
      day1Date.textContent = selectedData[0].dt_txt.split(" ")[0];

      var day1Icon = document.getElementById("day1Icon");
      day1Icon.src =
        "https://openweathermap.org/img/wn/" +
        selectedData[0].weather[0].icon +
        ".png";

      // DAY 2

      

      console.log(selectedData);
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
  var forcastQueryURL = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
  fetch(forcastQueryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      // console.log(data[0].lat);
      // var lat = data[0].lat;

      var currentTempSpan = document.getElementById("current-temp");
      currentTempSpan.textContent = data.main.temp;

      var currentWind = document.getElementById("currentWind");
      currentWind.textContent = data.wind.speed;

      var currentHumidity = document.getElementById("currentHumidity");
      currentHumidity.textContent = data.main.humidity;

      var currentCity = document.getElementById("currentCity");
      currentCity.textContent = data.name;

      var currentDate = document.getElementById("currentDate");
      currentDate.textContent = dayjs().format("M/DD/YYYY");

      var currentIcon = document.getElementById("currentIcon");
      currentIcon.src =
        "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
    });
}

// getCoord(searchCity);

// Lose Code
searchButton.on("click", function (event) {
  var userInput = searchInput.val();
  getCoord(userInput);
  // console.log(userInput);
});
