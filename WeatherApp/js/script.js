const API_KEY='256156d28a4575e841a3cce2fdfc060b';
const form = document.querySelector("form");
const search = document.querySelector("#search");
const weather = document.querySelector("#weather");

const getWeather = async function(city)
{
    console.log(city);
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(URL);
    const data = response.json;
    console.log(data);
}

getWeather();
