// Load the slider after the whole page loads
$(document).ready(function() {

    $('#slides').superslides({
        animation: 'fade',
        play: 5000, // 5 sec
        pagination: false
    });

});