// FOR PRELOADER

$(document).ready(function () {
    $(".wrapper").delay(50).fadeOut("slow");
});

(window).load(function () {
    $('.wrapper').hide();
    $('html, body').css('visibility', 'visible');
});


