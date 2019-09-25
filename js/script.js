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
    });

});