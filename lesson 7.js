$(document).ready(function(){

    $('#testBox').text('Новый текст');
   
    // $('#testBox').html('Новый <b>текст</b>');

    // $newcontent = $(
    //     '<h4>Заголовок</h4>' +
    //     '<p>Абзац с тестом</p>' +
    //     '<ul>' +
    //     '<li>Пункт 1</li>' +
    //     '<li>Пункт 2</li>' +
    //     '<li>Пункт 3</li>' +
    //     '</ul>' 
    // );

    // $newcontent.hide();
       
    // $('#testBox').html($newcontent);

    // $newcontent.fadeIn();

    $('#testBox').prepend('Текст в начало ');

    $('#testBox').append('Текст в конец ');

    $('#testBox').before('Текст в начало ');

    $('#testBox').after('Текст в конец ');

    $('#textNoWrap').wrap('<div class="pinkBorder"></div>');

    // $('#textInWrap').unwrap();

    $('#textInWrap').unwrap('.greenBorder');

    $('#toDeleteEmpty').empty();

    $('#toDeleteRemove').remove();

    $('#testBox').on('click',function(){
        
        let $cloneElement = $(this).clone();

        $cloneElement.addClass('greenBorder');

        $cloneElement.text('Абсолютной другой новый текст');

        $('#testBox').after($cloneElement);
    });   
});