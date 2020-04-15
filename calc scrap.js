$(document).ready(function () {

    

    let inputNum = ["", ""];
    let numIndex = 0;


    function clear() {
        this.display
    }

    function deleteNum() {

    }

    function appendNumber(number) {

    }

    function chooseOperation(operation) {

    }

    function compute() {

    }

    function updateDisplay() {

    }



    $('.number-button').on("click", (event) => {
        inputNum[numIndex] += event.currentTarget.value;
        console.log(inputNum);
        $('#display-sum').text(inputNum[numIndex]);
    })

    $('.opp-button').on("click", (event) => {
        let operator;
        operator = event.currentTarget.value;
        console.log(operator);

        if (operator === '+') {
            operator = inputNum + '+';
        } else if (operator === '-') {
            $('#display-sum').text('-');
        } else if (operator === '*') {
            $('#display-sum').text('x');
        } else if (operator === '/') {
            $('#display-sum').text('/');
        }

        // if (operator === '+') {
        //     $('#display-sum').text('+');
        // } else if (operator === '-') {
        //     $('#display-sum').text('-');
        // } else if (operator === '*') {
        //     $('#display-sum').text('x');
        // } else if (operator === '/') {
        //     $('#display-sum').text('/');
        // }



        numIndex = 1;
    });




    $('.equals-button').on("click", (operator) => {

        if (inputNum[0] === "" || inputNum[1] === "" || operator === "") { // this means do nothing

        } else {
            let inputNum1 = parseInt(inputNum[0], 10); // this parses the number found at index position [0] and states a decimal radix??!
            let inputNum2 = parseInt(inputNum[1], 10); // this parses the number found at index position [1] and states a decimal radix?!?
            switch (operator) {
                case "times":
                    answer = inputNum1 * inputNum2;
                    break;
                case "plus":
                    answer = inputNum1 + inputNum2;
                    break;
                case "minus":
                    answer = inputNum1 - inputNum2;
                    break;
                case "divide":
                    answer = inputNum1 / inputNum2;
                    break
                default:
                    answer = 0;
                    break;
            }
            console.log(answer);
            $('#display-answer').text(answer);
        }
    })


});