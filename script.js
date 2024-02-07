const url = "https://api.sunrise-sunset.org/json"
const lat = 36.0
const long = 4.4


fetch(`${url}?lat=${lat}&lng=${long}`)
    .then((res) => {
        return res.json();
    })
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log("Uh-oh! There has been an error!", err);
    })