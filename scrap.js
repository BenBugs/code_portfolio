 // get user input

 function getWeather(cityName) {
    //api key and query string
    const apiKey = `0d00e06c2b9381d1603d8240efcc25fb`;
    let queryUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    // Get current weather.
    $.ajax({
        url: queryUrl,
        method: "GET",
    })
        .then(response => {
            // this will happen eventually
            //console.log(response);

            // set city name
            const todayCity = response['name'];
            console.log(todayCity);
            const todayIcon = response['weather'][0]['main'];
            console.log(todayIcon);
            const todayBgDiv = response['main']['temp'];
            console.log(todayBgDiv);
            const todayHumid = response['main']['humidity'];
            console.log(todayHumid);
            const todayWindSpeed = response['wind']['speed'];
            console.log(todayWindSpeed);
            const todayWindDeg = response['wind']['deg'];
            console.log(todayWindDeg);

            let iconArray = new Array();

            //add images to the array in a modular way
            iconArray[0] = "images_weather_dashboard/sun_cloud.svg"; //few clouds
            iconArray[1] = "images_weather_dashboard/sun_cloud.svg"; //scattered clouds
            iconArray[2] = "images_weather_dashboard/sun_cloud.svg";
            iconArray[3] = "images_weather_dashboard/sun_cloud_light_rain.svg";
            iconArray[4] = "images_weather_dashboard/rain.svg";
            iconArray[5] = "images_weather_dashboard/snow.svg"
            iconArray[6] = "images_weather_dashboard/heavy_cloud.svg"

            if (todayIcon == "few clouds") {
                //iconArray = [0];
                console.log(working);
            } else if (todayIcon == "scattered clouds") {
                //iconArray = [1];
                console.log(working);
            } else if (todayIcon == "broken clouds") {
                //iconArray = [2];
                console.log(working);
            } else if (todayIcon == "show rain") {
                //iconArray = [3];
                console.log(working);
            } else if (todayIcon == "rain") {
                //iconArray = [4];
                console.log(working);
            } else if (todayIcon == "snow") {
                //iconArray = [5];
                console.log(working);
            } else if (todayIcon == "mist") {
                //iconArray = [6];
                console.log(working);
            } else if (todayIcon == "clear") {
                //iconArray = [0];
                console.log(working);
            }

        })

        // handle all ajax errors
        .catch(error => {
            console.log(error);
        })

};


$('.weather-icon').attr('src', "url(" + iconUrl + ")"); ///this bastard
//$('.weather-icon').css('background-image', 'url(' + imageUrl + ')')
