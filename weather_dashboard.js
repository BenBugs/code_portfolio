// load document HTML
$(document).ready(function () {

    //initialze query form
    let cityQuery = () => {
        let check = document.getElementById("#enter-city").value;
        let inputVal = "";
        if (check) {
            inputVal = input.value;
        }
    }

    //api key and query string
    const api_key = `0d00e06c2b9381d1603d8240efcc25fb`;
    let query_url = `https://api.openweathermap.org/data/2.5/weather?q=${cityQuery()}&appid=${api_key}&units=metric`;



    const api_call = $('#query-submit-button').click(function () {
        console.log(query_url);
        $.ajax({
            url: query_url,
            method: "GET",
            headers: {
            },
            success: (response) => {
                console.log(response);
            },
            error: (xhr, status, error) => {
                console.log(`status: ${status}, Error: ${error}`);
            }
        });
    });
    


    //let openWeather =  { "coord": { "lon":9.19, "lat":45.46}, "weather": [{ "id":803, "main":"Clouds", "description":"broken clouds", "icon":"04n"}], "base":"stations", "main": { "temp":3.69, "feels_like":0.93, "temp_min":1, "temp_max":5.56, "pressure":1024, "humidity":74}, "visibility":10000, "wind": { "speed":1, "deg":40}, "clouds": { "all":73}, "dt":1585703463, "sys": { "type":1, "id":6742, "country":"IT", "sunrise":1585717372, "sunset":1585763449}, "timezone":7200, "id":3173435, "name":"Milan", "cod":200}
//call moment.js day and time

    const getWeatherData = () => {
    let city = openWeather["name"];
    let icon = openWeather["main"];
    let bgDiv = openWeather["description"];
    let temp = openWeather["temp"];
    let humidity = openWeather["humidity"] ;
    let windSpeed = openWeather["speed"];
    let windAngle = openWeather["degree"];
    console.log(city + icon + bgDiv + temp + humidity + windSpeed + windAngle);
    }

    getWeatherData();



    //let today = api_call.json.weather.date;
    //let city = api_call.json.weather.city;
    //let temp = api_call.json.weather.celsius;
    //let speed = api_call.json.weather.wind_speed;
    //let uv = api_call.json.weather.uv;



    //$('#clear-results-button');

});


