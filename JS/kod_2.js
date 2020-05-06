

$(document).ready(function(){
    const nextIcon = '<img src="./style/images/carousel_icon-next.png" alt:"left">';
    const prevIcon = '<img src="./style/images/carousel_icon-prev.png" alt:"right">';
    
    
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:25,
        nav:true,
        dots:false,
        smartSpeed:500,
        navText: [
            nextIcon,
            prevIcon
        ],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:2
            }
        }
    })
});