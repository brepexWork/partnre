<?php
$queryUrl = 'https://[ваше_название].bitrix24.ru/rest/[идентификатор_пользователя]/[код_вебхука]/crm.lead.add.json';

  // Формируем параметры для создания лида в переменной $queryData

  $queryData = http_build_query(array(

      'fields' => array(

          'TITLE' => 'Заказ с сайта',

          'COMMENTS' => ''

    ),

    'params' => array('REGISTER_SONET_EVENT' => 'Y')

  ));

  // Обращаемся к Битрикс24 при помощи функции curl_exec

  $curl = curl_init();

  curl_setopt_array($curl, array(

      CURLOPT_SSL_VERIFYPEER => 0,

      CURLOPT_POST => 1,

      CURLOPT_HEADER => 0,

      CURLOPT_RETURNTRANSFER => 1,

      CURLOPT_URL => $queryUrl,

      CURLOPT_POSTFIELDS => $queryData,

  ));

  $result = curl_exec($curl);

  curl_close($curl);

  $result = json_decode($result, 1);