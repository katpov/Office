$(function () {

    $('.cards_slider').slick({
        arrows: false,
        slidesToShow: 3,
        // focusOnChange: true,
        infinite: false,
        variableWidth: true,
        responsive: [{
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    infinite: true
                }
            }]
    });
})

$(function () {

    $('.rev_slider').slick({
        arrows: false,
        dots: true,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        speed: 1000,
        // focusOnChange: true,
        infinite: true,
        variableWidth: true,
        responsive: [{
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
})

$('.rev_slider').on('afterChange', function(){

} )



