// load document HTML
$(document).ready(function () {


    
//inputEl = document.querySelector(".input");
//let buttonEl = document.querySelector(".button");

const $weatherQuery = $('#enter-city');
const $querySubmitButton = $('#query-submit-button');
const $clearResultsButton = $('#clear-results-button');




const api_key = '6494a1a0481846dcba387bfc9e3a81c6';
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

});
