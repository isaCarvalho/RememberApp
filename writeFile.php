<?php
$string = $_POST['nome'];

$conteudo = file_get_contents('tarefas.json');

$conteudo = (array) json_decode($conteudo);

$conteudo[] = ['nome' => $string];

$fp = fopen('tarefas.json', 'w');

fwrite($fp, json_encode($conteudo));
fclose($fp);