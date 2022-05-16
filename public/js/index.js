
$(window).ready(() => {
    $('.burger').click(() => {
        $('.header_mobile').fadeIn(200)
    })

    $('#close_menu').click(() => {
        $('.header_mobile').fadeOut(200)
    })

    const height = () => {
        let width_video = $('.watch .wrapper-video').width()
        let width_image = $('.works .element img').width()

        $('.works .element img').height(width_image * (9/16))
        $('.watch .wrapper-video').height(width_video * (9/16))
    }

    $(window).resize(() => {
        height()
    })

    height()

    $(document).scroll(() => {
        if($(document).scrollTop() > ($('body').height() / 2)) {
            $('.up').show(100)
        } else {
            $('.up').hide(100)
        }
    })

    $('#up').click(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    })

    $('#quation').click(() => {
        $('.modal_quation').show(100)
    })

    $('.close').click(() => {
        $('.modal_quation').hide(100)
    })

    $('#barnaul').click(() => {
        $('.rubcovsk').hide()
        $('.barnaul').show()
    })

    $('#rubcovsk').click(() => {
        $('.barnaul').hide()
        $('.rubcovsk').show()
    })

    const anchors = document.querySelectorAll('a[href*="#"]')

    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()

            const blockID = anchor.getAttribute('href').substr(1)

            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    };

})