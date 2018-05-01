/*$("#menu-icon").click(function(){
    console.log('asd');
    if (!$('#list').hasClass('showed-list'))
        $('#list').addClass('showed-list');
    else $('#list').removeClass('showed-list');  
});*/
console.log(document.getElementById('list'));
$(window).click(function(e){  
    if (document.querySelector('.menu').contains(e.target)){
        if (!$('#list').hasClass('showed-list')) $('#list').addClass('showed-list');
        else $('#list').removeClass('showed-list');
    } else{
        $('#list').removeClass('showed-list');
    }
});
