exports.temperatureConverterKelvinToCentigrade = function(kelvin){
  return kelvin - 273.15;
}

exports.tempToF = function(temp) {
  if(temp > 273) {
    temp = exports.temperatureConverterKelvinToCentigrade(temp);
  }
  return Math.round(temp * (9/5) + 32);
}
