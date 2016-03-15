var apiKey = require('./../.env').apiKey;
var weather = require('./../js/weather.js');

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey)
    .then(function(response) {
      console.log(response);
      $('.showWeather').text("The city you have chosen is " + response.name + ", " + response.sys.country + ". This weather data is from " + moment(response.dt*1000).format('M/D/Y HH:mm:ss'));
      $(".showTemp").text(weather.tempToF(response.main.temp)+"deg F and "+response.weather[0].description + " with cloud coverage of " + response.clouds.all);
      $(".showWeather").append(" HUMIDITY IS: " + response.main.humidity + " bloody humans....creating a windspeed of "+ response.wind.speed + " the day will last " + moment(response.sys.sunrise*1000).format("HH:mm:ss") + " Sunrise time");
    }).fail(function(error) {
      $(".showWeather").text(error.statusText);
      console.log(error);
    });
  });
});
