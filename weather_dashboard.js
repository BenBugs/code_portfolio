// load document HTML
$(document).ready(function () {


    //api key and query string
    let cityQuery = document.querySelector(".input").toLowerCase;
    const api_key = `0d00e06c2b9381d1603d8240efcc25fb`; 
    let query_url = `https://api.openweathermap.org/data/2.5/weather?q=${cityQuery}&appid=${api_key}&units=metric`;


    const api_call = $('#query-submit-button').click(function() { 
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
        console.log(api_call);
    });


    //let today = api_call.json.weather.date;
    //let city = api_call.json.weather.city;
    //let temp = api_call.json.weather.celsius;
    //let speed = api_call.json.weather.wind_speed;
    //let uv = api_call.json.weather.uv;


// dummy APi call {"coord":{"lon":-0.13,"lat":51.51},"weather":[{"id":300,"main":"Drizzle","description":"light intensity drizzle","icon":"09d"}],"base":"stations","main":{"temp":280.32,"pressure":1012,"humidity":81,"temp_min":279.15,"temp_max":281.15},"visibility":10000,"wind":{"speed":4.1,"deg":80},"clouds":{"all":90},"dt":1485789600,"sys":{"type":1,"id":5091,"message":0.0103,"country":"GB","sunrise":1485762037,"sunset":1485794875},"id":2643743,"name":"London","cod":200}

    //$('#clear-results-button');

});


/*
reqs
weather conditions
the temperature
the humidity
the wind speed
the UV index
*/

/*
<script>
let inputEl = document.querySelector(".input");
let buttonEl = document.querySelector(".button");
//Edomam
// let API_Key = "932a358d75a5f63deb3ecf3297f01302";
// let appID = "d8bd0342";
// WHISK 
// let API_Key =  "WeqsV4dzDqQZkiTKsnog6L3E8FdaFAlzJIan00T5itFAs7CWCU1acCq4YokSKgrR"
const queryAPI = () => {
    let queryParam = inputEl.value;
    console.log(queryParam);
    // let queryURL = `https://graph.whisk.com/v1/search?q=sandwich&type=recipe&includeIngredients=bread,meat`;
    // let queryURL = `https://api.spoonacular.com/recipes/search?apiKey=fef941d2f3ad4ddb9c76f61cf530a4c1`;
    let queryURL = `https://codebox-boggle-v1.p.rapidapi.com/ahdkshfkeioushid`;
    console.log(queryURL);
    console.log("Test")
    $.ajax({
        url: queryURL,
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
}
buttonEl.addEventListener("click", queryAPI);

/* some local storage code to reference from my planner
$(this).find(".saveBtn").on('click', function() {
    let inputText = inputElement.val();
    console.log(inputText);
    // local storage experiment
    localStorage.setItem('slot' + currentSlot, inputText);
    console.log(localStorage);
})
*/