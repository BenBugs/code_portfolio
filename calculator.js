$(document).ready(function() {

    let inputNum= ["",""];
    const numIndex = 0; 

    $('.number-button').on("click", (event)=> {
        inputNum[numIndex] += event.currentTarget.value;
        console.log(inputNum);
        $('#display-sum').text(inputNum[numIndex]);
      })
    
    
    
    
    
    
    
    
    
    
    // function(){
    //    let number = ($(this).val());
    //    console.log(number);
    //    inputNum[numIndex] += e.currentTarget.value;
    //    (e)=> {
    //     numbers[currentIndex] += e.currentTarget.value;
    //     console.log(numbers);
    // });


    // function compileSum() {

    // }






});