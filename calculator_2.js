$(document).ready(function () {

    //code from tutorial exercise with customisation https://www.freecodecamp.org/news/programming-a-calculator-8263966a8019/

    let num1 = '';
    let num2 = '';
    let operator = '';
    let total = '';

    // gets the click event object and determines whether number or operator
    $(document).ready(function () {
        $('button').on('click', function (e) {
            let btn = e.target.innerHTML;
            if (btn >= '0' && btn <= '9') {
                handleNumber(btn);
            } else {
                handleOperator(btn);
            }
        });
    });








    // function handleNumber(num) {

    // }







    function handleOperator(oper) {    // code goes here}
    }


















































    // let inputNum = ["", ""];
    // let numIndex = 0;

    // let displayAnswer = $('#display-answer').text();

    // $('.number-button').on("click", (event) => {
    //     let number;
    //     number = event.currentTarget.value;
    //     console.log(number);
    //     let numberStr = number.appendTo();
    //     console.log(numberStr);
    //     // $("#display-answer").append(number);
    // })


    // const str1 = 'Hello';
    // const str2 = 'World';

    // console.log(str1.concat(' ', str2));
    // // expected output: "Hello World"

    // console.log(str2.concat(', ', str1));
    // // expected output: "World, Hello"


    // $('.opp-button').on("click", (event) => {
    //     let operator;
    //     operator = event.currentTarget.value;
    //     console.log(operator);
    // });

    // function createSumStr(number) {
    //    let create =+ number.tostring();
    // }

    // createSumStr();


    // if (operator === '+') {
    //     $('#display-answer').text('+');
    // } else if (operator === '-') {
    //     $('#display-answer').text('-');
    // } else if (operator === '*') {
    //     $('#display-answer').text('x');
    // } else if (operator === '/') {
    //     $('#display-answer').text('/');
    // }

    // numIndex = 1;





    // $('.equals-button').on("click", (operator) => {

    //     if (inputNum[0] === "" || inputNum[1] === "" || operator === "") { // this means do nothing

    //     } else {
    //         let inputNum1 = parseInt(inputNum[0], 10); // this parses the number found at index position [0] and states a decimal radix??!
    //         let inputNum2 = parseInt(inputNum[1], 10); // this parses the number found at index position [1] and states a decimal radix?!?
    //         switch (operator) {
    //             case "times":
    //                 answer = inputNum1 * inputNum2;
    //                 break;
    //             case "plus":
    //                 answer = inputNum1 + inputNum2;
    //                 break;
    //             case "minus":
    //                 answer = inputNum1 - inputNum2;
    //                 break;
    //             case "divide":
    //                 answer = inputNum1 / inputNum2;
    //                 break
    //             default:
    //                 answer = 0;
    //                 break;
    //         }
    //         console.log(answer);
    //         $('#display-answer').text(answer);
    //     }
    // })


});