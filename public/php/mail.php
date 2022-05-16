<?php
$msg = $_POST['msg'];

$to      = 'brepex2@gmail.com';
$subject = 'Verhaus ZAKAZ';

$headers = "From: ZAKAZ <zakaz@sibir-online.ru>\r\nContent-type: text/plain; charset=utf-8 \r\n";

if (!mail($to, $subject, $msg, $headers)) {
    echo "Увы, Ваше сообщение не отправлено.
              Пожалуйста, позвоните нам!";
    } else {
    echo "Ваше обращение принято!
              Скоро мы Вам позвоним";
    }