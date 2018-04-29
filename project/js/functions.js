$(document).ready(function(){
    var slideCount = $('.wrap .slider .slide').length;
    var slideWidth = $('.wrap .slider .slide').width();
    var slideHeight = $('.wrap .slider .slide').height();
    var sliderWidth = slideCount * slideWidth;

    $('.wrap .slider').css(
        {'width' : sliderWidth + 'px'},
        {'margin-left' : '-' + slideWidth +'px'}
    );

    function autoSliding(){
        setTimeout(function() {
            moveRight()
        }, 4000);
    }

    function moveRight() {
        $('.wrap .slider').animate({
            'left':  '-'+ slideWidth +'px',
        }, 400, function () {
            $('.wrap .slider .slide:first-child').appendTo('.wrap .slider');
            $('.wrap .slider').css('left', '');
            /**/
        });
        clearTimeout();
        autoSliding();
    };
    moveRight();

    $('#arrow-right').click(function(){
        //clearTimeout();
        moveRight();
        
    });
});

$(window).on('scroll', ()=>{
    if($(window).scrollTop())
        $('nav').addClass('black');
    else $('nav').removeClass('black');
});