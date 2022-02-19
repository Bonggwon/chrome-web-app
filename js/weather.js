"use strict";
/*
Example of weather API
https://api.openweathermap.org/data/2.5/weather?lat=35.1686&lon=128.0737&appid=003e01e10997522f1381804320cded8c
*/

const API_KEY = '003e01e10997522f1381804320cded8c';


/* Test function
function onGeoOk(position) {
    console.log(position);
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log(`you live in ${lat} and ${lon} `);
}
*/

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = `${data.main.temp} °C, ${data.weather[0].main}`;
    });
}

function onGeoError() {
    alert("Can't find you ");
}


// Use function to give the location of user.
let myLocation = navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

// api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=003e01e10997522f1381804320cded8c;
