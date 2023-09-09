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
      var day2Temp = document.getElementById("day2Temp");
      day2Temp.textContent = selectedData[1].main.temp;

      var day2Wind = document.getElementById("day2Wind");
      day2Wind.textContent = selectedData[1].wind.speed;

      var day2Humidity = document.getElementById("day2Humidity");
      day2Humidity.textContent = selectedData[1].main.humidity;

      var day2Date = document.getElementById("day2Date");
      day2Date.textContent = selectedData[1].dt_txt.split(" ")[0];

      var day2Icon = document.getElementById("day2Icon");
      day2Icon.src =
        "https://openweathermap.org/img/wn/" +
        selectedData[1].weather[0].icon +
        ".png";

      //Day 3
      var day3Temp = document.getElementById("day3Temp");
      day3Temp.textContent = selectedData[2].main.temp;

      var day3Wind = document.getElementById("day3Wind");
      day3Wind.textContent = selectedData[2].wind.speed;

      var day3Humidity = document.getElementById("day3Humidity");
      day3Humidity.textContent = selectedData[2].main.humidity;

      var day3Date = document.getElementById("day3Date");
      day3Date.textContent = selectedData[2].dt_txt.split(" ")[0];

      var day3Icon = document.getElementById("day3Icon");
      day3Icon.src =
        "https://openweathermap.org/img/wn/" +
        selectedData[2].weather[0].icon +
        ".png";

      //Day 4
      var day4Temp = document.getElementById("day4Temp");
      day4Temp.textContent = selectedData[3].main.temp;

      var day4Wind = document.getElementById("day4Wind");
      day4Wind.textContent = selectedData[3].wind.speed;

      var day4Humidity = document.getElementById("day4Humidity");
      day4Humidity.textContent = selectedData[3].main.humidity;

      var day4Date = document.getElementById("day4Date");
      day4Date.textContent = selectedData[3].dt_txt.split(" ")[0];

      var day4Icon = document.getElementById("day4Icon");
      day4Icon.src =
        "https://openweathermap.org/img/wn/" +
        selectedData[3].weather[0].icon +
        ".png";

      //Day 5
      var day5Temp = document.getElementById("day5Temp");
      day5Temp.textContent = selectedData[4].main.temp;

      var day5Wind = document.getElementById("day5Wind");
      day5Wind.textContent = selectedData[4].wind.speed;

      var day5Humidity = document.getElementById("day5Humidity");
      day5Humidity.textContent = selectedData[4].main.humidity;

      var day5Date = document.getElementById("day5Date");
      day5Date.textContent = selectedData[4].dt_txt.split(" ")[0];

      var day5Icon = document.getElementById("day5Icon");
      day5Icon.src =
        "https://openweathermap.org/img/wn/" +
        selectedData[4].weather[0].icon +
        ".png";

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

// Storing data in local storage

// getCoord(searchCity);

// Lose Code
searchButton.on("click", function (event) {
  var userInput = searchInput.val();
  getCoord(userInput);
  // console.log(userInput);
});
