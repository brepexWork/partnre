$(window).ready(() => {
    const swiper = new Swiper('.wrapper-swiper', {
        wrapperClass: 'swiper-elements',
        slideClass: 'slide',
        slidesPerView: 1,
        loop: true,
        navigation: {
            prevEl: '#arrow_before',
            nextEl: '#arrow_after'
        }
    })
})