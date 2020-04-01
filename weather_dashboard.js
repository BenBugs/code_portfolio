// load document HTML
$( document).ready(function() {

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
    const api_key = `0d00e06c2b9381d1603d8240efcc25fb`;
    let query_url = `https://api.openweathermap.org/data/2.5/weather?q=${getCity}&appid=${api_key}&units=metric`;


    const api_request = (getCity) => {
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

        const getWeatherData = () => {
            let city = openWeather["name"];
            let icon = openWeather["main"];
            let bgDiv = openWeather["description"];
            let temp = openWeather["temp"];
            let humidity = openWeather["humidity"] ;
            let windSpeed = openWeather["speed"];
            let windAngle = openWeather["degree"];
            console.log(getWeatherData);
    }
}

});

