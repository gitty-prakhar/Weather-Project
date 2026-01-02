const apiKey = "2f606c9f787923c2cafc15a77c999fa8";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const input = document.querySelector(".search input");
const btn = document.querySelector(".search button");

const temp = document.querySelector(".temp");
const city = document.querySelector(".city");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");

btn.addEventListener("click",()=>{
    if(input.value ==""){
        alert("Please enter city name");
        return;
    }
    getWeather(input.value);

})
input.addEventListener("keypress",(e)=>{
    if(e.key==="Enter"){
        btn.click();
    }
})
async function getWeather(cityName) {
    try{
        const response = await fetch(apiUrl + cityName + `&appid=${apiKey}`);
        if(response.status == 404){
            alert("City not found!");
            return;
        }
        const data = await response.json();

        temp.innerText = Math.round(data.main.temp) + "°C";
        city.innerText = data.name;
        humidity.innerText = data.main.humidity + "%";
        wind.innerText = data.wind.speed + " km/h";
    }
    catch(error){
        alert("Something went wrong. Check your internet.");
    }
}