$(document).ready(function () {

    // str storage
    let sumStr = [""];
    let operator = '';
    let total = '';
    const currentIndex = 0;
    let str = [""];


    // get buttons
    number = $('data-number').val();
    operator = $('data-operator').val();
    equal = $('data-equal').val();
    clear = $('data-clear').val();
    displaySum = $('#display-sum').text();
    displayAnswer = $('#display-answer').text();
    //console.log(number , operator , equal , clear , displaySum , displayAnswer)


    // // calculator display
    // class Display {
    // constructor(displaySum , displayAnswer) {
    //     this.displaySum = displaySum;
    //     this.displayAnswer = displayAnswer;
    // }
    // }     // const sum = new Display('666', '123'); use a class


$('button').on('click', function (e) {
            let btn = e.currentTarget.innerText;
            str[currentIndex] += btn;
            console.log(str);
            $('#display-sum').text(str);
});


    // // gets the click event object and determines whether number or operator
    // $(document).ready(function () {
    //     $('button').on('click', function (e) {
    //         let btn = e.target.innerText; //innerHTML?
    //         console.log(btn);
    //         if (btn >= '0' && btn <= '9') {
    //             handleNumber(btn);
    //         } else if (btn !== 'C') {
    //             handleOperator(btn);
    //         }
    //     });
    // });

    // // number button handling logic
    // function handleNumber(num) {
    //     if (num1 === '') { //if num1 is empty put number in number 1
    //         num1 = num;
    //         // console.log(num1)
    //     } else { num2 = num; } // else number goes in number 2
    //     displayButton(num); //call function
    //     // console.log(num2)
    // }

    // // operator handling
    // function handleOperator(oper) {
    //     if (operator === '') {
    //         operator = oper; // do nothing
    //     } else {
    //         handleTotal();
    //         operator = oper;   // don't get this
    //     }
    // }

    // //case function to handle operators
    // function handleTotal() {
    //     switch (operator) {
    //         case '+':
    //             total = +num1 + +num2;      // + before variable '+num1' converts to string!!!!!!      
    //             displayButton(total);
    //             break;
    //         case '-':
    //             total = +num1 - +num2;
    //             displayButton(total);
    //             break;
    //         case 'x':
    //             total = +num1 * +num2;
    //             displayButton(total);
    //             break;
    //         case '/':
    //             total = +num1 / +num2;
    //             displayButton(total);
    //             break;
    //     }
    //     updateVariables();
    // }

    // // display button press
    // function displayButton(btn) {
    //     $('#display-answer').text(btn);
    // }

    // //update variables
    // function updateVariables() {
    //     num1 = total;
    //     num2 = '';
    // }


    // // clear button function
    // $('button').on('click', function (e) {
    //     let btn = e.target.innerText;
    //     console.log(btn);
    //     if (btn = 'C') {
    //         let num1 = '';
    //         let num2 = '';
    //         let operator = '';
    //         let total = '';
    //     }
    //     $('#display-answer').text('0');
    // })




});