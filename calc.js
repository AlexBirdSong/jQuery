$(document).ready(function(){

  $('#calcForm').on('submit', function(event){
    event.preventDefault();
    
    let num1 = parseInt( $('#numberOne').val());
    let num2 = parseInt($('#numberTwo').val());
    
    if (isNaN(num1)){
        num1 = 0;
    }

    if (isNaN(num2)){
        num2 = 0;
    }

    let sum = num1+num2;
   
    $('#sumResult').text(sum);

  });


});