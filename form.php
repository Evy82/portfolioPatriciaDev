<?php

$nombre = $_POST['name'];
$mail = $_POST['email'];
$mensaje = $_POST['mensaje'];

$mensaje = "Este mensaje fue enviado por " .$nombre "/r/n";
$mensaje .= "Su mail es:  " .$mail . "/r/n";
$mensaje .= "Mensaje:  " .$_POST['mensaje'] . "/r/n";
$mensaje .= "Enviado el:  " . date('d,m,y', time());

$para = 'PatriciaDev2023@gmail.com';
$asunto = 'Este mail fue enviado desde la web';

mail($para, $asunto, utf8_decode($mensaje), $header);

header['location:exito.html'];

?>