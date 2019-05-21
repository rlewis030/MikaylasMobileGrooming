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

// EmailJS Configuration and Sending
(function(){
    emailjs.init("user_VrokykbQ58y3reC5WyIMb");
})();

function sendEmail(e) {
    e.preventDefault();

    // Capture Form Elements
    var cFN = document.getElementById('contact-first-name');
    var cLN = document.getElementById('contact-last-name');
    var cE = document.getElementById('contact-email');
    var cP = document.getElementById('contact-phone');
    var cM = document.getElementById('contact-message');
    var cS = document.getElementById('contact-status');

    // Sent data via EmailJS
    emailjs.send('gmail', 'mikayla_s_mobile_grooming', 
    {
        "contact_email": cE.value,
        "contact_name": cFN.value + ' ' + cLN.value,
        "contact_phone": cP.value,
        "contact_msg": cM.value
    });

    // Clear Form Fields
    cFN.value = '';
    cLN.value = '';
    cE.value = '';
    cP.value = '';
    cM.value = '';

    // Display Sent Message
    cS.innerHTML = 'Message Sent!';
}

document.addEventListener('submit', sendEmail);

/* Service Worker Registration */
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
        .then(() => {
            console.log('Service Worker Registered!');
        })
}
