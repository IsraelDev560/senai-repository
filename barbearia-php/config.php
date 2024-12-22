<?php 

// Definição das constantes para conexão com o banco de dados
define('HOST' , 'localhost'); // Endereço do servidor do banco de dados
define('USER', 'root'); // Nome de usuário do banco de dados
define('PASS', ''); // Senha do banco de dados (vazio neste caso)
define('BASE', 'cadastrobar'); // Nome do banco de dados a ser usado

// Criação de uma nova conexão com o banco de dados usando a classe mysqli
$conn = new mysqli(HOST, USER, PASS, BASE);

?>
