$(document).ready(function(){

    $('#Dwidth').on('click',function(){        
        $('#testdiv').animate({'width': '200px'},4000);
    });

    $('#Dopacity').on('click',function(){        
        $('#testdiv').animate({'opacity': '0'},1000);
    });

    $('#Dhide').on('click',function(){        
        $('#testdiv').hide( '100');
    });
    
    $('#Dshow').on('click',function(){        
        $('#testdiv').show( '100');
    });

    $('#Dtoggle').on('click',function(){        
        $('#testdiv').hide( '100').delay('1000').show( '100');
    });

    $('#fadehide').on('click',function(){        
        $('#testdiv').fadeOut('1000');
    });
    
    $('#fadeshow').on('click',function(){        
        $('#testdiv').fadeIn('1000');
    });

    $('#fadetoggle').on('click',function(){        
        $('#testdiv').fadeToggle('1000');
    });

    $('#slidehide').on('click',function(){        
        $('#testdiv').slideUp('1000');
    });
    
    $('#slideshow').on('click',function(){        
        $('#testdiv').slideDown('1000');
    });

    $('#slidetoggle').on('click',function(){        
        $('#testdiv').slideToggle('1000');
    });
});