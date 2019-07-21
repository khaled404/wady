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
            $('.drop > span , .drop > i').toggleClass('active');
        })

        $('.subCon a').on('click',function (){
            $(this).parent().find('.sub').slideToggle();
            $(this).parent().siblings().find('.sub').slideUp();
            $(this).find('i.fa-chevron-left ,i.fa-chevron-right').toggleClass('rotate');
            $(this).parent().siblings().find('.fa-chevron-left ,i.fa-chevron-right').removeClass('rotate');
        })
        //footer collapse
        $(".footer-colapse").on('click',function () {
            $(this).find('i').toggleClass('open');
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
    if($(window).width() <= 992){
        $(".footer-colapse").attr("data-toggle", "collapse");
        $(".footer-nav ul").attr("class", "collapse");
    }

});