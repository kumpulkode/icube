$(document).ready(function () {
    $('#owl-browse').owlCarousel({
        loop: true,
        margin: 20,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            640: {
                items: 3,
                nav: false,
                slideBy: 3,
            },
            1024: {
                items: 4,
                nav: true,
                loop: true,
                slideBy: 4,
            }
        }
    });
    $('#owl-playlist').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            640: {
                items: 3,
                nav: false,
                slideBy: 3,
            },
            1024: {
                items: 4,
                nav: true,
                loop: true,
                slideBy: 4,
            }
        }
    });
});