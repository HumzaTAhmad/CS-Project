import fetch from "node-fetch";

fetch('https://api.openweathermap.org/data/2.5/weather?q=frederick&appid=50a7aa80fa492fa92e874d23ad061374')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var descValue = data['weather'][0].description;
  //tempValue = (tempValue - 273.15) * (9/5) + 32;
  console.log(tempValue + " " + descValue);
})