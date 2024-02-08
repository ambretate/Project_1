/*Chaining the Geocoding API fetch to pass latitude and longitude into the Sunrise-Sunset API fetch */

const sunURL = "https://api.sunrise-sunset.org/json";
const latLongURL = "https://api.api-ninjas.com/v1/geocoding?city=";
const apiKey = 'ifSDKbn6+C408rU06ll5GA==tI2dBZ1n24SpzCOZ';
const city = "Brooklyn";

fetch(`${latLongURL}${city}`, {headers: {
    'X-Api-Key': `${apiKey}`,
}})
    .then((res) => {
        return res.json();
    })
    .then((res) => {
        const displayCity = document.querySelector(".displayCity");
        displayCity.innerHTML = `${res[0].name}, ${res[0].state}`;

        const lat = res[0].latitude;
        const long = res[0].longitude;
        fetch(`${sunURL}?lat=${lat}&lng=${long}`)
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                console.log(response);

                const astroTwilightB = document.querySelector("#astroTwilightB");
                astroTwilightB.innerHTML = response.results.astronomical_twilight_begin;

                const nautiTwilightB = document.querySelector("#nautiTwilightB");
                nautiTwilightB.innerHTML = response.results.nautical_twilight_begin;

                const civilTwilightB = document.querySelector("#civilTwilightB");
                civilTwilightB.innerHTML = response.results.civil_twilight_begin;

                const sunrise = document.querySelector("#sunrise");
                sunrise.innerHTML = response.results.sunrise;

                const solarNoon = document.querySelector("#solarNoon");
                solarNoon.innerHTML = response.results.solar_noon;

                const sunset = document.querySelector("#sunset");
                sunset.innerHTML = response.results.sunset;

                const civilTwilightE = document.querySelector("#civilTwilightE");
                civilTwilightE.innerHTML = response.results.civil_twilight_end;

                const nautiTwilightE = document.querySelector("#nautiTwilightE");
                nautiTwilightE.innerHTML = response.results.nautical_twilight_end;

                const astroTwilightE = document.querySelector("#astroTwilightE");
                astroTwilightE.innerHTML = response.results.astronomical_twilight_end;
            })
           
            .catch((err) => {
                console.log("Uh-oh! There has been an error!", err);
            })
        })
    .catch((err) => {
        console.log("Uh-oh! There has been an error!", err);
    })
   

//function displayList(times) {
  //  console.log(times);



//Form event handler for passing city into lat/long fetch, setting display city

//Function to set hour, minutes, amPm

//Function to set div content in list

//Function for countdown

//Function for definitions on hover

//Time slider - function???