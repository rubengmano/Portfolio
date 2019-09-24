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

});