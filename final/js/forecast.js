const weatherURL = "https://api.openweathermap.org/data/2.5/weather?id=5334223&units=imperial&APPID=87d47c5d7e19688aff48e67a81aa340f";
fetch(weatherURL)
  .then((response) => response.json())
  .then((jsObject) => {
    document.getElementById('currentTemp').textContent = Math.round(jsObject.main.temp, 0);
    document.getElementById('condition').textContent = jsObject.weather[0].description;
    document.getElementById('humidity').textContent = jsObject.main.humidity;
  });

const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5334223&units=imperial&APPID=87d47c5d7e19688aff48e67a81aa340f";
fetch(forecastURL)
  .then((response) => response.json())
  .then((jsObject) => {
    const threedayforecast = jsObject.list.filter(x => x.dt_txt.includes('12:00:00'));
    document.getElementById('forecastTemp').textContent = Math.round(threedayforecast[2].main.temp, 0);
    document.getElementById('forecastCondition').textContent = threedayforecast[2].weather[0].description;
    document.getElementById('forecastHumidity').textContent = threedayforecast[2].main.humidity;
  });

