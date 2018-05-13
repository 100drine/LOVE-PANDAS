$('.panda').on( 'click', function(){
    var type = $(this).attr('data-type');
    var tendance = $(this).attr('data-tendance');

    if  (type == undefined){
        alert ("essaie à nouveau");
    }
    else{
        alert ( " " + type + " " + tendance);
    }
    
});



