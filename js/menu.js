jQuery(document).ready(function () {

    const btn = $('header nav i');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 200) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, '300');
    });


    $('header nav a').on("click", function () {
        const goToSection = "#" + $(this).attr("class")
        $('html,body').animate({
            scrollTop: $(goToSection).offset().top
        })
    })
});