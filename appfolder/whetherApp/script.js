const inputSearch = document.getElementById('search-input');
const searchBtn = document.querySelector('.search-btn');

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey = "362bac7c996ad45238c8c50e21ade0e1";


async function renderData(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();
    console.log(data);

    document.querySelector('.temp').innerHTML = data.main.temp +"°";
    document.querySelector('.name').innerHTML = data.name;
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind-speed').innerHTML = data.wind.speed +"km/h";

}
 searchBtn.addEventListener('click', ()=>{
        renderData(inputSearch.value)
    })
