$(document).ready(function() {

    // Toggle mobile menu
    $('#js--menu__toggle').click(function() {
        $(this).toggleClass('menu__toggle--active');
        $('#js--menu').toggleClass('menu--active').scrollTop(0);
    });
});