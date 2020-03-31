// load document HTML
$(document).ready(function () {


const $weatherQuery = $('#enter-city');
const $querySubmitButton = $('#query-submit-button');
const $clearResultsButton = $('#clear-results-button');


const api_key = `0d00e06c2b9381d1603d8240efcc25fb`;
let app_id = api.openweathermap.org/data/2.5/forecast?q={weatherQuery}&appid={api_key};


let name = `Ryan`;

console.log(`Hi my name is ${name}`);





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

});

/*
reqs
weather conditions
the temperature
the humidity
the wind speed
the UV index
*/



/* some local storage code to reference from my planner
$(this).find(".saveBtn").on('click', function() {
    let inputText = inputElement.val();
    console.log(inputText);
    // local storage experiment
    localStorage.setItem('slot' + currentSlot, inputText);
    console.log(localStorage);
})
*/