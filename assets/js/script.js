$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('header').addClass("sticky")
        }else{
            $('header').removeClass("sticky")
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show")
        }else{
            $('.scroll-up-btn').removeClass("show")
        }
    });
    // Scroll Slide Up
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });
    // Menu bar Toggale Active
    $('.menu-bar').click(function(){
        $('.menu').toggleClass("active");
        $('.menu-bar i').toggleClass("active");
    });
    // Typing Animation Script
    var typed = new Typed(".typeing", {
        strings: ["Web Designer", "Graphics Designer", "Youtuber", "Digital Marketer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typeing-2", {
        strings: ["Web Designer", "Graphics Designer", "Youtuber", "Digital Marketer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    // Corousel Slider
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    })
})