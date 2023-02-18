
$('.slider-for').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.slider-nav'
});

$('.slider-nav').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    focusOnSelect: true,
    arrows: true,
    responsive: [
        {
            breakpoint: 1101,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
    ],
});

function moveSlide(inc) {
    if (inc > 0) {
        $('.slider-nav').slick('slickNext');
    } else {
        $('.slider-nav').slick('slickPrev');
    }
}