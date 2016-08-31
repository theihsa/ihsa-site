$(document).ready(function() {
    "use strict";
    //------------------------------------------------------------------------
    //						PRELOADER SCRIPT
    //------------------------------------------------------------------------
    $('#preloader').delay(400).fadeOut('slow');
    $('#preloader').fadeOut();
    $('body').delay(400).css({
        'overflow': 'visible'
    });
    //------------------------------------------------------------------------
    //						NORMALIZE CAROUSEL HEIGHTS
    //------------------------------------------------------------------------
    $('#carousel-full-header .item').carouselHeights();
    $('#carousel-testimonials .item').carouselHeights();
    //------------------------------------------------------------------------
    //						NAVBAR SLIDE SCRIPT
    //------------------------------------------------------------------------ 		
    $(window).scroll(function() {
        if ($(window).scrollTop() > $("nav").height()) {
            $("nav.navbar-slide").addClass("show-menu");
        } else {
            $("nav.navbar-slide").removeClass("show-menu");
            $(".navbar-slide .navMenuCollapse").collapse({
                toggle: false
            });
            $(".navbar-slide .navMenuCollapse").collapse("hide");
            $(".navbar-slide .navbar-toggle").addClass("collapsed");
        }
    });
    //------------------------------------------------------------------------
    //						NAVBAR HIDE ON CLICK (COLLAPSED) SCRIPT
    //------------------------------------------------------------------------ 		
    $('.nav a').on('click', function() {
        if ($('.navbar-toggle').css('display') != 'none') {
            $(".navbar-toggle").click();
        }
    });
});
$(document).ready(function() {
    "use strict";
    //------------------------------------------------------------------------
    //						ANCHOR SMOOTHSCROLL SETTINGS
    //------------------------------------------------------------------------
    $('a.goto, .navbar .nav a').smoothScroll({
        speed: 1200
    });
    //------------------------------------------------------------------------
    //						FULL HEIGHT SECTION SCRIPT
    //------------------------------------------------------------------------
    $(".screen-height").css("min-height", $(window).height());
    $(window).resize(function() {
        $(".screen-height").css("min-height", $(window).height());
    });
    //------------------------------------------------------------------------	
    //                    MAGNIFIC POPUP(LIGHTBOX) SETTINGS
    //------------------------------------------------------------------------  
    $('.portfolio-list li').magnificPopup({
        delegate: 'a:not(.btn, .link-item)',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    //------------------------------------------------------------------------------------------
    //                     INITIALIZE WOW.JS
    //------------------------------------------------------------------------------------------
    var wow = new WOW();
    wow.init();
    //------------------------------------------------------------------------
    //						NORMALIZE CAROUSEL HEIGHTS FUNCTION
    //------------------------------------------------------------------------
    $.fn.carouselHeights = function() {
        var items = $(this), //grab all slides
            heights = [], //create empty array to store height values
            tallest; //create variable to make note of the tallest slide
        var normalizeHeights = function() {
            items.each(function() { //add heights to array
                heights.push($(this).height());
            });
            tallest = Math.max.apply(null, heights); //cache largest value
            items.each(function() {
                $(this).css('min-height', tallest + 'px');
            });
        };
        normalizeHeights();
        $(window).on('resize orientationchange', function() {
            //reset vars
            tallest = 0;
            heights.length = 0;
            items.each(function() {
                $(this).css('min-height', '0'); //reset min-height
            });
            normalizeHeights(); //run it again 
        });
    };
});
