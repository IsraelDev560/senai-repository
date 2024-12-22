<?php 
// Switch-case para determinar a ação a ser executada com base no parâmetro "acao"
switch($_REQUEST["acao"]){
    case 'cadastrar':
        // Se a ação for 'cadastrar', realiza as seguintes operações:

        // Atribui os valores recebidos via POST às variáveis correspondentes
        $nome = $_POST["nome"];
        $email = $_POST["email"];
        $telefone = $_POST["telefone"];
        $horario = $_POST["horario"];
        $data_nasc = $_POST["data_nasc"];

        // Monta a query SQL para inserir os dados na tabela 'usuarios'
        $sql = "INSERT INTO usuarios (nome, email, telefone, horario, data_nasc) VALUES ('{$nome}', '{$email}', '{$telefone}', '{$horario}', '{$data_nasc}')";

        // Executa a query SQL
        $res = $conn->query($sql);

        // Verifica se a query foi executada com sucesso
        if($res == true){
            // Se sim, exibe uma mensagem de sucesso via JavaScript
            echo "<script>alert('Cadastro com sucesso');</script>";
            // Redireciona o usuário para a página '?page=listar' após o cadastro
            echo "<script>location.href='?page=listar'</script>";
        }else{
            // Se não, exibe uma mensagem de erro via JavaScript
            echo "<script>alert('Cadastro não foi realizado');</script>";
            // Redireciona o usuário para a página '?page=listar' após o erro
            echo "<script>location.href='?page=listar'</script>";
        }
        break;
    case 'editar':
        $nome = $_POST ["nome"];
        $email = $_POST ["email"];
        $senha = $_POST ["senha"];
        $data_nasc = $_POST ["data_nasc"];

        $sql = "UPDATE usuarios SET 
        nome = '{$nome}',email='{$email}', senha='{$senha}',
        data_nasc= '{$data_nasc}'
        WHERE
        id=".$_REQUEST["id"];

        $res = $conn -> query($sql);

        if($res == true){
            echo "<script>alert('Cadastro editado com sucesso');
            </script>";
            echo "<script>location.href='?page=listar'</script>";
        }else{
            echo "<script>alert('Cadastro não foi editado');</script>";
            echo "<script>location.href='?page=listar'</script>";
        }
        break;
    case 'excluir':
        $sql = "DELETE FROM usuarios WHERE id=" . $_REQUEST["id"];

        $res = $conn -> query($sql);

        if($res == true){
            echo "<script>alert('Excluido com sucesso');
            </script>";
            echo "<script>location.href='?page=listar'</script>";
        }else{
            echo "<script>alert('Não foi possivel excluir');</script>";
            echo "<script>location.href='?page=listar'</script>";
        }
        break;    
    default:
        
        break;    
}
?>
