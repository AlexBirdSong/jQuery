$(document).ready(function(){

    $('#addGreen').on('click',function(){        
        $('#testdiv').addClass('greenBG');
    });

    $('#removeGreen').on('click',function(){        
        $('#testdiv').removeClass('greenBG');
    });

    $('#toggleGreen').on('click',function(){        
        $('#testdiv').toggleClass('greenBG');
    });

    $('#customCSS').on('click',function(){        
        $('#testdiv').css('border','5px solid aqua')
    });
});