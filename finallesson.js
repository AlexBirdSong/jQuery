$(document).ready(function(){



    $('#colorSelector .colorItem').on('click',function(){
       
    let imgpath = $(this).attr('data-img-path');
    
    $('#imgHolder img').fadeOut(400, function(){
        $('#imgHolder img').attr('src', imgpath).fadeIn(400);
    });

    });
    
    let modelSpecs, modelPrice,modelSpecsHolder,modelPriceHolder;

    modelSpecsHolder = $('#modelSpecs');

    modelPriceHolder = $('#modelPrice');

    modelPrice = 0;

    modelSpecs = '';

    function calculatePrice(){
        let modelPriceengine = $('input[name=engine]:checked', '#autoForm').val(); // поиск внутри #autoForm

        let modelPricetransmission = $('input[name=transmission]:checked', '#autoForm').val();

        let modelPricepackage = $('input[name=package]:checked', '#autoForm').val();

        modelPriceengine = parseInt(modelPriceengine);
        modelPricetransmission = parseInt(modelPricetransmission);
        modelPricepackage = parseInt(modelPricepackage);

        modelPrice = modelPriceengine + modelPricetransmission + modelPricepackage;
   
        modelPriceHolder.text("Цена: " + modelPrice + "$");
    }

    function compileSpecs(){
        modelspecs = $('input[name=engine]:checked + label', '#autoForm').text();
        modelspecs +=", ";
        modelspecs +=$('input[name=transmission]:checked + label', '#autoForm').text();
        modelspecs +=", ";
        modelspecs +=$('input[name=package]:checked + label', '#autoForm').text();
        modelspecs +=". ";
        
        modelSpecsHolder.text(modelspecs );
    };

    $('#submitBtn').on('click',function(){
        modelspecs = $('input[name=engine]:checked + label', '#autoForm').text();
        modelspecs +=", ";
        modelspecs +=$('input[name=transmission]:checked + label', '#autoForm').text();
        modelspecs +=", ";
        modelspecs +=$('input[name=package]:checked + label', '#autoForm').text();
        modelspecs +=". ";
        alert("Машинка с характеристиками: "+ modelspecs + "успешно заказана!");
    });

    $('#autoForm input').on('change',function(){
        calculatePrice();
        compileSpecs();
    });

});