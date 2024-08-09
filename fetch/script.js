const API_KEY='005784fc66295b8ffe388c4719380213';
const form = document.querySelector("form");
const search = document.querySelector("#search");
const btn = document.querySelector("#btn");
const weather = document.querySelector("#weather");

const getweather = async(city)=>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);
    console.log(response);
    const data = await response.json();
    console.log(data);
    return showWeather(data);
}

const showWeather = (data) =>{
    if(data.cod=="404")
{
    console.log("city not found");
    weather.innerHTML = `<h2>City not found</h2>`

}
    weather.innerHTML =
    `
    
    <div>
    <h2>${data.main.temp}°C</h2>
    <h2>${data.weather[0].description}</h2>
    <h2>${data.main.humidity}</h2>
    </div>

    `
   
}
form.addEventListener (
    "submit",
    function(event){
       
        getweather(search.value); //which ever city is searched is shown here
        event.preventDefault();   //use form has a default nature submit hote hi reload hona it helps to prevent that.
        
    }
)