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




/*
let sliderImages = document.querySelectorAll('.slide'),
    arrowLeft = document.querySelector('#arrow-left'),
    arrowRight = document.querySelector('#arrow-right'),
    current = 0;

    //Clear all images
    function reset(){
        for(let i = 0; i < sliderImages.length; i++){
            sliderImages[i].style.display = 'none';
        }
    }

    function startSlide(){
        reset();
        sliderImages[0].style.display = 'block'
    }

    function slideLeft(){
        reset();
        sliderImages[current - 1].style.display = 'block';
        current--;
    }

    function slideRight(){
        reset();
        sliderImages[current + 1].style.display = 'block';
        current++;
    }

    arrowLeft.addEventListener('click', function(){
        if(current === 0){
            current = sliderImages.length;
        }
        slideLeft(); 
    });

    arrowRight.addEventListener('click', function(){
        if(current === sliderImages.length - 1 ){
            current = -1;
        }
        slideRight(); 
    });

    startSlide();
*/