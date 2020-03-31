// load document HTML
$(document).ready(function () {


    //get page elements
    const weatherQuery = $('#enter-city').val;
    const querySubmitButton = $('#query-submit-button');
    const clearResultsButton = $('#clear-results-button');

    //api key and query string
    const api_key = `0d00e06c2b9381d1603d8240efcc25fb`;
    let queryURL = api.openweathermap.org/data/2.5/forecast?q={weatherQuery}&appid={querySubmitButton};

    //api key and query string
    const query_api = () => {
        let queryString = queryURL;
        console.log(queryString);
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