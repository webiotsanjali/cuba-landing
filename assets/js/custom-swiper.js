const brand_swiper1 = new Swiper(".brand-slider-1", {
    slidesPerView: 6,
    spaceBetween: 20,
    autoplay: {
        delay: 2000,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 12,
        },
        420: {
            slidesPerView: 2,
            spaceBetween: 18,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 18,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 18,
        },
        1200: {
            slidesPerView: 6,
            spaceBetween: 18,
        },
    },
});

var review_swiper = new Swiper('.review-slider-1', {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true
    },
    loop: true,
    navigation: {
        prevEl: '.slidePrev-btn',
        nextEl: '.slideNext-btn'
    },
    breakpoints: {
        640: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 1
        },
        992: {
            slidesPerView: 2
        },
        1560: {
            slidesPerView: 2
        }
    }
});