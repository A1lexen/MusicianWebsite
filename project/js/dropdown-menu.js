$("#menu-icon").click(function(){
    console.log('asd');
    if (!$('#list').hasClass('showed-list'))
        $('#list').addClass('showed-list');
    else $('#list').removeClass('showed-list');  
});
