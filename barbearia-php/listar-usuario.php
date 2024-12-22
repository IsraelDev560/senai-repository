<h1>Usuários Agendados</h1>
<?php

// Consulta SQL para selecionar todos os registros da tabela "usuarios"
$sql = "SELECT * FROM usuarios";
// Executa a consulta SQL
$res = $conn->query($sql);

// Obtém o número de linhas de resultado da consulta
$qtd = $res->num_rows;

// Verifica se há registros retornados pela consulta
if ($qtd > 0) {
    // Se houver registros, começa a exibição de uma tabela HTML
    echo "<table class='table table-hover table-striped table-bordered'>";
    echo "<tr>";
    echo "<th>#</th>"; // Cabeçalho da coluna ID
    echo "<th>Nome</th>"; // Cabeçalho da coluna Nome
    echo "<th>E-mail</th>"; // Cabeçalho da coluna E-mail
    echo "<th>Telefone</th>"; // Cabeçalho da coluna Telefone
    echo "<th>Horario e Dia</th>"; // Cabeçalho da coluna Horario/Dia
    echo "<th>Data de Nascimento</th>"; // Cabeçalho da coluna Data de Nascimento
    echo "</tr>";

    // Loop através dos resultados da consulta
    while ($row = $res->fetch_object()) {
        // Exibe uma linha da tabela para cada registro retornado pela consulta
        echo "<tr>";
        echo "<td>" . $row->id . "</td>"; // Coluna ID
        echo "<td>" . $row->nome . "</td>"; // Coluna Nome
        echo "<td>" . $row->email . "</td>"; // Coluna E-mail
        echo "<td>" . $row->telefone . "</td>"; // Coluna Telefone
        echo "<td>" . $row->horario . "</td>"; // Coluna Horario/Dia
        echo "<td>" . $row->data_nasc . "</td>"; // Coluna Data de Nascimento
        echo "<td>
        <button onclick =\"location.href='?page=editar&id=" . $row->id . "';\" class= 'btn btn-primary'>Editar</button>
        <button onclick=\"if(confirm('Tem certeza que deseja excluir?'))
        {location.href='?page=salvar&acao=excluir&id=" . $row->id . "';} 
        else{false;}\" class='btn btn-danger'>Excluir</button>
        </td>";
        echo "</tr>";
    }
    // Fecha a tabela HTML
    echo "</table>";
} else {
    // Se não houver registros retornados pela consulta, exibe uma mensagem de alerta
    echo "<p class='alert alert-danger'>Não encontrou resultados!</p>";
}

?>