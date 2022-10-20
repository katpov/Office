$(function () {

    $('.rev_slider').slick({
        arrows: false,
        dots: true,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3,
        autoplay: true,
        speed: 1000,
        // focusOnChange: true,
        infinite: false,
        variableWidth: true,
    });
})

$('.rev_slider').on('afterChange', function(){

} )
