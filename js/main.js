$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('#myBtn').fadeIn(200);
    } else {
        $('#myBtn').fadeOut(200);
    }
});
$('#myBtn').click(function (event) {
    event.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 500);
});