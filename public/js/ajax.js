let re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

const alert_msg = (message, result = false) => {

    if(result == false) {
        $('.alert_msg').css({'background' : 'tomato'})
    } else {
        $('.alert_msg').css({'background' : '#28a745'})
    }
    $('.alert_msg .text').text(message)
    $('.alert_msg').slideDown(100)

    setTimeout(() => {
        $('.alert_msg').hide(100)
    }, 4000)
}

$('#send_quation').click(() => {
    let name = $('#name').val()
    let email = $('#email').val()
    let phone = $('#phone').val()
    let answer = $('#answer').val()

    if(name == '' || email == '', phone == '') {
        alert_msg('Заполните все поля')
        return false
    }

    let valid = re.test(phone);

    if(!valid) {
        alert_msg('Номер телефона введен не верно')
        return false
    }

    let msg = `Заказ с сайта - Имя: ${name}, Телефон: ${phone}, Почта: ${email}, Вопрос: ${answer}`;

    $.ajax({
        url: "php/mail.php",
        type: "POST",
        cache: false,
        data: {msg : msg},
        success: (data) => {
            $('#name').val('')
            $('#email').val('')
            $('#phone').val('')
            $('#answer').val('')
            alert_msg('Сообщение успешно отправлено в ближайшее время с вами свяжется наш спецалист', true)
        }
    });

})