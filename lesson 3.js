$(document).ready(function(){

    // Simlpe
    // $('#testButt').click( function(){
    //     $('#infoCard').toggleClass('selected');
    // });
    
    // $('header').mouseenter( function(){
    //     $('header').toggleClass('selected');
    // });

    // $('header').mouseleave( function(){
    //     $('header').toggleClass('selected');
    // });

    //best practics

    $('#testButt').on('click', function(){
        $('#infoCard').toggleClass('selected');
    });

    $('header').on('mouseenter', function(){
        $('header').toggleClass('selected');
    });

    $('header').on('mouseleave', function(){
        $(this).toggleClass('selected');
    });

    $('#testInput').on('keyup',function(event){
        if(event.which != 27){
            $('#writeText').text($('#testInput').val());
        }
        else $('#writeText').text('');
    });
});