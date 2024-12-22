<h1>Editar Usuário</h1>

<?php 

$sql = "SELECT * FROM usuarios WHERE id=".$_REQUEST["id"];
$res = $conn->query($sql);
$row = $res -> fetch_object();

?>

<form action="?page=salvar" method="POST">
    <input type="hidden" name="acao" value="editar">
    <input type="hidden" name="id" value="<?php echo $row->id;?>">
    <div class="mb-3">
        <label>Nome</label>
        <input type="text" name="nome" value="<?php echo $row->nome;?>" class="form-control"> 
    </div>
    <div class="mb-3">
        <label>E-mail</label>
        <input type="email" name="email" value="<?php echo $row->email;?>" class="form-control"> 
    </div>
    <div class="mb-3">
        <label>Senha</label>
        <input type="password" name="senha" value="<?php echo $row->senha;?>" class="form-control"> 
    </div>
    <div class="mb-3">
        <label>Data de Nascimento</label>
        <input type="date" name="data_nasc" value="<?php echo $row->data_nasc;?>" class="form-control"> 
    </div>
    <div class="mb-3">
            <button type="submit" class="btn btn-primary">Enviar</button>
    </div>
</form>