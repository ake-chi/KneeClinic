
$('.testimonial-slider').slick({
    infinite: true,    
    autoplay: true,
    speed:2000,    
    easing: 'easeOutElastic',
    arrows: false,
    dots: true,
    fade: true,    
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow:1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true
            }
        },
        {
            breakpoint: 425,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true
            }
        },
        {
            breakpoint: 375,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true
            }
        },
        {
            breakpoint: 320,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true
            }
        }
    ]
  
});


$('.team-slider').slick({
    infinite: true,    
    autoplay: true,
    speed:2000,    
    easing: 'easeOutElastic',
    arrows: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    // fade: true,    
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow:2,
                slidesToScroll: 2,                
                dots: true
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,               
                dots: true
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
            }
        },
        {
            breakpoint: 425,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
            }
        },
        {
            breakpoint: 375,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
            }
        },
        {
            breakpoint: 320,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
            }
        }
    ]
  
});
