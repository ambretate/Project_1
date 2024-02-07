const sunURL = "https://api.sunrise-sunset.org/json";
const latLongURL = "https://api.api-ninjas.com/v1/geocoding?city=";
const city = "Brooklyn";
const lat = 36.0;
const long = 4.4;
const apiKey = 'ifSDKbn6+C408rU06ll5GA==tI2dBZ1n24SpzCOZ';


fetch(`${sunURL}?lat=${lat}&lng=${long}`)
    .then((res) => {
        return res.json();
    })
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log("Uh-oh! There has been an error!", err);
    })

fetch(`${latLongURL}${city}`, {headers: {
    'X-Api-Key': `${apiKey}`,
}})
    .then((res) => {
        return res.json();
    })
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log("Uh-oh! There has been an error!", err);
    })