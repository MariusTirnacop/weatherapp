const bucharest = document.querySelector(".bucharest");
const timisoara = document.querySelector(".timisoara");
const oradea = document.querySelector(".oradea");
const arad = document.querySelector(".arad");
const sibiu = document.querySelector(".sibiu");

function updateCurrentCity(city) {
  const currentCity = document.querySelector(".current-city");
  currentCity.innerHTML = city;
}

function updateWeather(city) {
  localStorage.setItem("city", city);
  updateCurrentCity(city);
  displayCurrentWeather(city);
  displayWeatherForecast(city);
}

bucharest.addEventListener("click", function () {
  updateWeather("București");
});
timisoara.addEventListener("click", function () {
  updateWeather("Timișoara");
});
oradea.addEventListener("click", function () {
  updateWeather("Oradea");
});

arad.addEventListener("click", function () {
  updateWeather("Arad");
});

sibiu.addEventListener("click", function () {
  updateWeather("Sibiu");
});
