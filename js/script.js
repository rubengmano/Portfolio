// Load the slider after the whole page loads
$(document).ready(function() {

    $('#slides').superslides({
        animation: 'fade',
        play: 5000, // 5 sec
        pagination: false
    });

    var typed = new Typed(".typed", {
        strings: ["Volunteer.", "Student.", "Adventurer."],
        loop: true,
        typeSpeed: 85,
        showCursor: false,
        startDelay: 1000
    }); 

    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 4,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            768:{
                items:4 
            }
        }
    });



    // Take the position of the section to start the animation
    var skillsTopOffset = $(".skillsSection").offset().top;
    //console.log(skillsTopOffset);

    // Take the position of the stats section
    var statsTopOffset = $(".statsSection").offset().top;
    // console.log(statsTopOffset);

    var countFinished = false;

    // Create a scroller event 
    $(window).scroll(function() {
        // it starts when it hits the window + 200 px
        if(window.pageYOffset > skillsTopOffset - $(window).height() + 200){

            $('.chart').easyPieChart({
                easing:  'easeInOut',
                barColor: '#fff',
                trackColor: false,
                scaleColor: false,
                lineWidth: 4,
                size: 152,
                onStep: function(from, to, percent){
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        }

        if(window.pageYOffset > statsTopOffset - $(window).height() + 100 && countFinished === false){
            $('.count').each(function () {
                $(this).prop('Counter',0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 2000,
                    easing: 'linear',
                    step: function (now) {
                        $(this).text(Math.round(now));
                    }
                });
            });
            countFinished = true;
        }
    });

    // Start fancyBox
    $("[data-fancybox]").fancybox();
    
    // Isotope
    $(".items").isotope({
        filter: '*',
        animationOptions: {
            duration: 1500,
            easing: 'linear',
            queue: false
        }
    });

    // Select element filter a
    $("#filters a").click(function() {
        // remove the current class
        $("#filters .current").removeClass("current");
        // put the current class in the element clicked
        $(this).addClass("current");

        var selector = $(this).attr("data-filter");
        $(".items").isotope({
            filter: selector,
            animationOptions: {
                duration: 1500,
                easing: 'linear',
                queue: false
            }
        });
        return false;
    });

    $("#navigation li a").click(function(e) {
        e.preventDefault();

        var targetElement = $(this).attr("href");
        var targetPosition = $(targetElement).offset().top;
        $("html, body").animate({scrollTop: targetPosition -50}, "slow");
    });

    const nav = $("#navigation");
    const navTop = nav.offset().top;

    $(window).on("scroll", stickyNavigation);

    function stickyNavigation() {
        var body = $("body");

        if($(window).scrollTop() >= navTop){
            body.css("padding-top", nav.outerHeight() + "px");
            body.addClass("fixedNav");
        }
        else {
            body.css("padding-top", 0);
            body.removeClass("fixedNav");
        }
    }

});