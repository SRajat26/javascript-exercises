const convertToCelsius = function(far) {
  let x = (far - 32) * 5 / 9;
  if(Number.isInteger(x)){
  return x;}
  else
return Math.round(x*10)/10;
};

const convertToFahrenheit = function(cel) {
  let x = (cel * 9 / 5) + 32;
  if(Number.isInteger(x)){
    return x;
  }
  else
  return Math.round(x*10)/10;
};


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
