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