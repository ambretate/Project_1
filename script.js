/*Setting up event listener for form submit; city feeds into first fetch URL*/

const form = document.getElementById("form");
const handleSubmit = function (event) {
  event.preventDefault();
  let city = event.target.elements[0].value;

  /*Chaining the Geocoding API fetch to pass latitude and longitude into the Sunrise-Sunset API fetch */

  const sunURL = "https://api.sunrise-sunset.org/json";
  const latLongURL = "https://api.api-ninjas.com/v1/geocoding?city=";
  //const timeZoneURL = "https://api.api-ninjas.com/v1/timezone?city=";
  const apiKey = "ifSDKbn6+C408rU06ll5GA==tI2dBZ1n24SpzCOZ";

  fetch(`${latLongURL}${city}`, {
    headers: {
      "X-Api-Key": `${apiKey}`,
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      const displayCity = document.querySelector(".displayCity");
      displayCity.innerHTML = `${res[0].name}, ${res[0].state}`;

      const lat = res[0].latitude;
      const long = res[0].longitude;

      fetch(`${sunURL}?lat=${lat}&lng=${long}&tzid=America/New_York`)
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          const astroTwilightB = document.querySelector("#astroTwilightB");
          astroTwilightB.innerHTML =
            response.results.astronomical_twilight_begin;

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

          const hour = document.querySelector(".hour");
          hour.innerHTML = response.results.civil_twilight_end.slice(0,2);

          const minutes = document.querySelector(".minutes");
          minutes.innerHTML = response.results.civil_twilight_end.slice(2,4);

          const amPm = document.querySelector(".amPm");
          amPm.innerHTML = response.results.civil_twilight_end.slice(8,10);

          let currentTime = new Date().getTime();
        let diff = response.results.civil_twilight_end - currentTime;

        console.log(currentTime);
        console.log(diff);

        let countdown = document.querySelector(".countdown");
        let timeColor = document.querySelector(".timeColor");

        if (diff > 0) {
            countdown.innerHTML = `${diff} until last light`;
        }
        else {
         countdown.innerHTML = `Last light for today`;
        }

        if (currentTime < response.results.civil_twilight_begin) {
            timeColor.classList.add("night");
        }
        else if (currentTime < response.results.sunrise) {
            timeColor.classList.add("dawn");
        }
        else if (currentTime < response.results.sunset) {
            timeColor.classList.add("day")
        }
        else if (currentTime < response.results.civil_twilight_end) {
            timeColor.classList.add("dusk");
        }
        else {
            timeColor.classList.add("night");
        }
    })

        .catch((err) => {
          console.log("Uh-oh! There has been an error!", err);
        });
    })
    .catch((err) => {
      console.log("Uh-oh! There has been an error!", err);
    });
};

form.addEventListener("submit", handleSubmit);

/*let lastLight = () => {
    let currentTime = new Date().getTime();
    let diff = response.results.civil_twilight_end - currentTime;
    let countdown = document.querySelector(".countdown");

    if (diff > 0) {
        countdown.innerHTML = `${diff} until last light`
    }
    else {
        countdown.innerHTML = `Last light has passed for today`
    }
} */