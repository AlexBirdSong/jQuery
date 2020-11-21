$(document).ready(function(){

   let imgsrc= $('#testdiv img').attr('src');


//    $('#testdiv img').on('click',function(){
//     $(this).attr('src','granta_6911.png')
//    });

//    $('#colorSelector .brown').on('click',function(){
//     $("#testdiv img").attr('src','granta_195.png');
//    });

//    $('#colorSelector .wheat').on('click',function(){
//     $("#testdiv img").attr('src','granta_195.png');
//    });

//    $('#colorSelector .silver').on('click',function(){
//     $("#testdiv img").attr('src','granta_195.png');
//    });

//    $('#colorSelector .dodgerblue').on('click',function(){
//     $("#testdiv img").attr('src','granta_195.png');
//    });

//    $('#colorSelector .black').on('click',function(){
//     $("#testdiv img").attr('src','granta_195.png');
//    });


let $carImg = $('#testdiv img');

$('#colorSelector .circle').on('click',function(){
       
    let imgpath = $(this).attr('data-img-path');
    
    $carImg.fadeOut(400, function(){
        $carImg.attr('src', imgpath).fadeIn(400);
    });

    });

});