$(document).ready(function () {

    // mobile-menu

    $('.mob-menu img').on('click',function(){
        $('.mobile-nav').slideToggle()
        $('.mobile-nav').css('display','flex')
        $('.mobile-nav').css('align-items','center')
    });

    $('.mobile-nav a').on('click',function(){
        $('.mobile-nav').slideUp()
    });

    $('.nav-bottom img').on('click',function () {
        $('.nav-bottom button').toggle(500)
    });

     // mobile-menu-end

    // colors

    $('#white').on('click',function () {
        $('body').css('background','#fff')
        $('p').css('color','black')
        $('.ab').css('color','black')
        $('nav').css('background','rgb(212, 50, 107)')
        $('.mobile-nav').css('background','linear-gradient(rgb(216, 72, 36), rgb(143, 0, 143)')
    });


    $('#dark').on('click',function () {
        $('body').css('background','rgb(39, 39, 39)')
        $('p').css('color','white')
        $('nav').css('background','black')
        $('span').css('color','whitesmoke')
        $('.mobile-nav').css('background','black')
        $('h2').css('color','whitesmoke')
    });

    $('#gray').on('click',function () {
        $('body').css('background','grey')
        $('p').css('color','white')
        $('nav').css('background','gray')
        $('span').css('color','whitesmoke')
        $('.mobile-nav').css('background','gray')
        $('h2').css('color','whitesmoke')
    });

    $('#red').on('click',function () {
        $('body').css('background',' rgb(143, 0, 143)')
        $('p').css('color','whitesmoke')
        $('span').css('color','whitesmoke')
        $('nav').css('background','rgb(202, 32, 202)')
        $('.mobile-nav').css('background','rgb(202, 32, 202)')
        $('h2').css('color','whitesmoke')
    });

    //colors-end

    // navbar-scrolling-effect

    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 500) {
            $('nav').addClass('header-scrolled');      
        } else{
            $('nav').removeClass('header-scrolled');
        }
    });


      // navbar-scrolling-effect-end


});

     // gmail 

let gmail = document.getElementById('gmail');

gmail.addEventListener('click',function () {
    alert ('azizbekfayziyev58@gmail.com')
})
// gmail-end





