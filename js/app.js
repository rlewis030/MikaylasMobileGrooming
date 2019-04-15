$(document).ready(() => {
    // Move content below navbar
    var navHeight = $('.navbar')[0].offsetHeight;
    $('#page-content').css('margin-top', navHeight);

    // Slow down testimonial carousel
    $.fn.carousel.Constructor.TRANSITION_DURATION = 2000; // 2 seconds
});
 
/* Prevent default on FAQ links */
$('.card-title a').on('click', function(e) {
    e.preventDefault();
})

/* Smooth Scrolling */
$('.navbar a[href^="#"]').on('click', function(event) {

    var target = $( $(this).attr('href') );

    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top - 48
        }, 1000);
    }

});

/* Close responsive menu when scroll trigger is clicked */
$('.navbar a[href^="#"]').click(function() {
    $('.navbar-collapse').collapse('hide');
});

/* Year for Copyright */
$(function() {
    var theYear = new Date().getFullYear();
    $('#year').html(theYear);
});

/* Service Worker Registration */
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./assets/sw.js')
        .then(() => {
            console.log('Service Worker Registered!');
        })
}