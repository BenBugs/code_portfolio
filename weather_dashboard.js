// load document HTML

$(document).ready(function () {

    /* not working
    
    
       //initialze query form
        let initQuery = () => {
            let set = $("#city");
            console.log(set);
            let inputVal = "";
            if (set) {
                inputVal = set.value;
            }
        }
    
        initQuery(); // call set function
    
    
        const getCity = $('#query-submit-button').click(function () {
            let cityQuery = $("#city");
            console.log(cityQuery);
            return cityQuery;
        });
    
    
        //api key and query string
        const apiKey = `0d00e06c2b9381d1603d8240efcc25fb`;
        let queryUrl = `https://api.openweathermap.org/data/2.5/weather?q=${getCity}&appid=${apiKey}&units=metric`;
    
        
        
        console.log(queryUrl)
    
    
        const api_request = (getCity) => {
            $.ajax({
                url: queryUrl,
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
    
            const getWeatherData = () => {
                let city = openWeather["name"];
                let icon = openWeather["main"];
                let bgDiv = openWeather["description"];
                let temp = openWeather["temp"];
                let humidity = openWeather["humidity"] ;
                let windSpeed = openWeather["speed"];
                let windAngle = openWeather["degree"];
                return getWeatherData;
        }
    }
    
    
    */

    let openWeather = { "coord": { "lon": 138.6, "lat": -34.93 }, "weather": [{ "id": 804, "main": "Clouds", "description": "overcast clouds", "icon": "04d" }], "base": "stations", "main": { "temp": 20.72, "feels_like": 17.24, "temp_min": 20, "temp_max": 22.78, "pressure": 1012, "humidity": 56 }, "visibility": 10000, "wind": { "speed": 5.7, "deg": 50 }, "clouds": { "all": 90 }, "dt": 1585715323, "sys": { "type": 1, "id": 9566, "country": "AU", "sunrise": 1585688283, "sunset": 1585730434 }, "timezone": 37800, "id": 2078025, "name": "Adelaide", "cod": 200 }


    const city = openWeather['name'];
    console.log(city)
    const icon = openWeather['weather'][0]['main'];
    console.log(icon)
    const bgDiv = openWeather['weather'][0]['description'];
    console.log(bgDiv)
    const temp = openWeather['main']['temp'];
    console.log(temp)
    const humidity = openWeather['main']['humidity'];
    console.log(humidity)
    const windSpeed = openWeather['wind']['speed'];
    console.log(windSpeed)
    const windAngle = openWeather['wind']['deg'];
    console.log(windAngle)

    const weatherDataArray = [city, icon, bgDiv, temp, humidity, windSpeed, windAngle];

    console.log(weatherDataArray);


    /* let getWeatherData = () => {
     const weatherData = openWeather[{'name'} , {'main'}];const weatherData = openWeather.filter( function(item){return (item == clouds);} );
     console.log(weatherData);
 } */



    /* create button and store data
    $("#query-submit-button").click(function () {
        let cityButton = $('<button/>', {
            text: 'yo',
            click: function () { alert('hello twat'); }
        });

        var parent = $('#new-button-row').children().append(cityButton).end();
    });

    $(this).find(".saveBtn").on('click', function() {
        let inputText = inputElement.val();
        console.log(inputText);
        // local storage experiment
        localStorage.setItem('slot' + currentSlot, inputText);
        console.log(localStorage);
    })
    */




});








