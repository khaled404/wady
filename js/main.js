$(function(){
    if($(window).width() < 992){
        //nav collapse
        $('.nav-collapse ,.close-nav ').on('click',function () {
            $('body').toggleClass('over')
            $('.nav-link').toggleClass('open')
        });

        $(".drop > span , .drop> i").on('click',function () {
            $('.sub-menu').slideToggle();
            $('.drop> i').toggleClass('rotate');
            $('.drop > span , .drop i').toggleClass('active');
        })

        $('.subCon a').on('click',function (){
            $(this).parent().find('.sub').slideToggle();
            $(this).parent().siblings().find('.sub').slideUp();
            $(this).find('.fa-chevron-left').toggleClass('rotate');
            $(this).parent().siblings().find('.fa-chevron-left').removeClass('rotate');
        })
        //nav collapse
        $(".footer-nav h3").on('click',function () {
            $(this).parent().find('ul').slideToggle();
            $(this).find('i').toggleClass('open');
            $(this).parent().parent().siblings().find('ul').slideUp();
            $(this).parent().parent().siblings().find('i').removeClass('open');
        })

    }
    //banner carousel
    $(" .banner-carousel .owl-carousel").owlCarousel({
        autoplay: true,
        rtl:true,
        loop:true,
        nav:true,
        items: 1,
        dots: true,
        smartSpeed: 1000
    });
    $('.product-container .owl-carousel').owlCarousel({
        autoplay: false,
        rtl:true,
        loop:true,
        nav:true,
        items: 5,
        dots: true,
        smartSpeed: 1000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:5
            }
        },
        navText: ["<span></span>","<span></span>"]
    });

});