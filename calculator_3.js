$(document).ready(function () {

  // str storage
  let sumStr = [''];
  let operator = null;
  let total = '';
  const currentIndex = 0;
  let str = [''];
  let btn;
  let firstOperand = null;
  let waitingForSecondOperand = false;

  // get buttons
  // number = $('data-number').val();
  // operator = $('data-operator').val();
  // equal = $('data-equal').val();
  // clear = $('data-clear').val();
  // displaySum = $('#display-sum').text();
  // displayAnswer = $('#display-answer').text();
  //console.log(number , operator , equal , clear , displaySum , displayAnswer)


  // button handling
  $('button').on('click', function (e) {

    if (!e.currentTarget.matches('button')) {
      //console.log('This event is not a button!');
      return;
    }

    if (e.currentTarget.matches('[data="data-number"]')) {
      // console.log('number', e.currentTarget.innerText);
      btn = e.currentTarget.innerText;
    }

    else if (e.currentTarget.matches('[data="data-operator"]')) {
      //console.log('operator', e.currentTarget.innerText);
      btn = e.currentTarget.innerText;
    }

    else if (e.currentTarget.matches('[data="data-decimal"]')) {
      //console.log('decimal', e.currentTarget.innerText);
      btn = e.currentTarget.innerText;
    }

    else if (e.currentTarget.matches('[data="data-equal"]')) {
      //console.log('equal', e.currentTarget.innerText);
      btn = e.currentTarget.innerText;
    }

    else if (e.currentTarget.matches('[data="data-clear"]')) {
      //console.log('clear', e.currentTarget.innerText);
      btn = e.currentTarget.innerText;
    }

    console.log(btn);

    // add value to string and output to display sum
    str[currentIndex] += btn;
    console.log(str);
    $('#display-sum').text(str);

  });

  function getNum() {
    let firstNum = str.parseInt(str, 10);
    console.log(firstNum);
  }




  // function noDuplication() {
  //   if (!str.includes('.')) {
  //   str += btn;
  //   console.log(str);
  //   }
  // }

  // noDuplication();

  // function inputDecimal(dot) {
  //   // If the `displayValue` does not contain a decimal point
  //   if (!calculator.displayValue.includes(dot)) {
  //     // Append the decimal point
  //     calculator.displayValue += dot;
  //   }
  // }








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




  // $('button').on('click', function (e) {
  //   let btn = e.currentTarget.innerText;
  //   str[currentIndex] += btn;
  //   console.log(str);
  //   $('#display-sum').text(str);
  // });



});