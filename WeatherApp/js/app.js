const API_KEY = '005784fc66295b8ffe388c4719380213';
const form = document.querySelector("form");
const search = document.querySelector("#search");
const weather = document.querySelector("#weather");

const getWeather = async(city) => {

    console.log('Featching weather for city')
    console.log(city)
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();

    if(data.cod =="404"){
        weather.innerHTML = `<h2> City not Found <\h2>`;
        return;
    }
    weather.innerHTML = `
    
       <h4>Temperature: ${data.main.temp}°C; </h4>
      
       <h4>Weather: ${data.weather[0].main} </h4>
      
       <h4>Humidity:${data.main.humidity} % </h4>
       
       <h4>Wind Speed:${data.wind.speed} m/s </h4>

    `;
};

form.addEventListener(
    "submit",
    function(event){
        getWeather(search.value)
        event.preventDefault();
    }
)