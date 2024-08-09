$(window).on("load", function () {
    $('#preloader').fadeOut(500)
    $('body').css("opacity", 1)

});


$(document).ready(function () {
    function questions() {
        $('.questions__head').on('click', function () {
            $(this).toggleClass('open')
            $(this).siblings('.questions__body').slideToggle()

        })
    }

    function float_contacts() {
        var $contacts = $('.float-contacts'),
            $open = $contacts.find('.button-open'),
            $close = $contacts.find('.button-close')

        $open.on('click', function (e) {
            e.preventDefault()
            $contacts.addClass('open')
        })

        $close.on('click', function (e) {
            e.preventDefault()
            $contacts.removeClass('open')
        })
    }

    function header() {
        var $header = $('.header')
        $(window).scroll(function () {
            if ($(this).scrollTop() > 0) {
                $header.addClass('fixed')
            } else {
                $header.removeClass('fixed')
            }
        });
    }

    function sliders() {
        $('.general-diary-slider').slick()
        $('.general-interior__slider').slick({
            centerMode: true,
            responsive: [
                {
                    breakpoint: 1280,
                    settings: {
                        centerMode: false,
                        slidesToShow: 1,
                        arrows: false,
                        dots: true
                    }
                }
            ]
        })
        $('.general-reviews-slider').slick({
            centerMode: true,
            slidesToShow: 1,
            responsive: [
                {
                    breakpoint: 1280,
                    settings: {
                        centerMode: false,
                        slidesToShow: 1,
                        arrows: false,
                        dots: true
                    }
                }
            ]
        })


        function love_slider() {
            var $slider = $('.general-love__list')


            if ($(window).width() <= 1280) {
                $slider.slick()
            } else if ($(window).width() >= 1024 && $slider.hasClass('slick-initialized')) {
                $slider.slick('unslick')
            }
        }


        function general_banner() {
            $('.general-banner-slider').slick({
                arrows: true,
                dots: true,
                adaptiveHeight: true,
                infinite: false,
                responsive: [
                    {
                        breakpoint: 1280,
                        settings: {
                            arrows: false
                        }
                    }
                ]
            })

        }


        love_slider()
        general_banner()
        $(window).resize(function () {
            love_slider()
            general_banner()
        })


    }

    function up_btn() {
        var $up_btn = $('.up-btn')

        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $up_btn.fadeIn();
            } else {
                $up_btn.fadeOut();
            }
        });

        $up_btn.click(function () {
            $("html, body").animate({scrollTop: 0}, 0);
            return false;
        });
    }

    function burger() {
        var $burger = $('.header__burger'),
            $nav = $('.header__nav')


        $burger.on('click', function () {
            $nav.slideToggle()
        })

    }

    function why_parallax() {


        $(window).on("scroll", function () {
            $('.general-why__img').css("background-position-y", $(window).scrollTop() * 0.2);
        })
    }

    function vacancy() {
        var $item = $('.vacancy__item')

        $(window).scroll(function () {
            $item.each(function () {

                var wt = $(window).scrollTop();
                var wh = $(window).height();
                var et = $(this).offset().top;
                var eh = $(this).outerHeight();
                var dh = $(document).height();
                if (wt + wh >= et || wh + wt == dh || eh + et < wh) {
                    $(this).find('.vacancy__img').css("transform", "translateX(-50%) scale("+ (1 + $(window).scrollTop() * 0.00004)  +")");
                }
            }) 
        });
    }


    $('.politic').parallax({imageSrc: 'images/politic/bg-parallax.svg', speed: 1.5});
    $('.diary').parallax({imageSrc: 'images/diary/bg-parallax.svg', speed: 1.5});
    $('.school').parallax({imageSrc: 'images/school/bg-parallax.svg', speed: 1.5});
    $('.general-love').parallax({imageSrc: 'images/general-love/bg-parallax.svg', speed: 1.5});
    $('.diary-inner').parallax({imageSrc: 'images/diary-inner/bg-parallax.svg', speed: 1.5});
    $('.contacts').parallax({imageSrc: 'images/contacts/bg-parallax.svg', speed: 1.5});
    $('.blog').parallax({imageSrc: 'images/blog/bg-parallax.svg', speed: 1.5});
    $('.vacancy').parallax({imageSrc: 'images/vacancy/bg-parallax.svg', speed: 1.5});
    $('.gallery').parallax({imageSrc: 'images/gallery/bg-parallax.svg', speed: 1.5});
    $('.general-about').parallax({imageSrc: 'images/general-about/bg-parallax.svg', speed: 1.5});


    function school_blur() {


        $('.school__right').find('strong').on('click', function () {
            $(this).css("filter", "blur(0px)");
        })
    }

    questions()
    sliders()
    header()
    up_btn()
    float_contacts()
    burger()
    school_blur()
    why_parallax()
    vacancy()

})
