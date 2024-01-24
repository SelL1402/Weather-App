let tempBlock = document.querySelector('#temp')
let cityBlock = document.querySelector('#city')
let searchInp = document.querySelector('.location-btn')

let weatherIcon = document.querySelector('.today-weather i')
let city = 'Kyiv'


let data = new Date

document.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
        let value = searchInp.value;
        if(!value) return false;
        city = value;
        init()
        searchInp.value = ''
    }
})

function init() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f4dc56e50d74d5f242b91a0c472b6f8e`)
    .then((resp) => {return resp.json()})
    .then((data) => {

        cityBlock.textContent = `${data.name}`

        let days = [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday'
        ];
        let month = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ];
        let d = new Date();
        let n = d.getDay();
        let numberMonth = d.getDate();
        let m = d.getMonth();
        let numberYear = d.getFullYear();

        document.querySelector('#temp').innerHTML = Math.round(data.main.temp - 273) + "°C"
        document.querySelector('#humidity').innerHTML = data.main.humidity + "%"
        document.querySelector('#wind').innerHTML = data.wind.speed + "km/h"
        document.querySelector('#feelsLike').innerHTML = Math.round(data.main.feels_like - 273) + "°C"
        document.querySelector('.today-weather p').innerHTML = data.weather[0].description
        document.querySelector('.today-info-title').innerHTML = (days[n])
        document.querySelector('.date').innerHTML = numberMonth + " " + (month[m]) + " " + numberYear

        if(data.weather[0].main == "Clear"){
            weatherIcon.className = "fa-solid fa-sun";
        } else if (data.weather[0].main == "Rain"){
            weatherIcon.className = "fa-solid fa-cloud-rain";         
        } else if (data.weather[0].main == "Mist"){
            weatherIcon.className = "fa-solid fa-cloud-Mist";
        } else if (data.weather[0].main == "Drizzle"){
            weatherIcon.className = "fa-solid fa-cloud-drizzle";
        } else if (data.weather[0].main == "Clouds"){
            weatherIcon.className = "fa-solid fa-cloud";
        }

        })
  
}

init()



