<h1>Novo Usuário</h1>
<h2>Para agendar seu horário, precisamos cadastrar você.</h2>

<!-- Formulário para cadastrar novo usuário -->
<form action="?page=salvar" method="POST"> 
    <!--quando o formulário é enviado, os dados são enviados para a mesma página, mas com um parâmetro de query page definido como "salvar" -->

    <!-- Campo oculto para armazenar a ação a ser realizada -->
    <input type="hidden" name="acao" value="cadastrar">

    <!-- Campo para o nome do usuário -->
    <div class="mb-3">
        <label>Nome</label>
      
        <input type="text" name="nome" minlength="4" maxlength="100" placeholder="Informe seu nome" class="form-control"> 
    </div>

    <!-- Campo para o e-mail do usuário -->
    <div class="mb-3">
        <label>E-mail</label>
      
        <input type="email" name="email" minlength="8" maxlength="40" placeholder="Digite seu e-mail" class="form-control"> 
    </div>

    <!-- Campo para o telefone do usuário -->
    <div class="mb-3">
        <label>Telefone</label>
     
        <input type="tel" name="telefone" minlength="10" maxlength="13" placeholder="Digite o seu número de telefone ex: 75 9 99999999" class="form-control"> 
    </div>

    <!-- Campo para o horário desejado pelo usuário -->
    <div class="mb-3">
        <label>Horário</label>
        
        <input type="text" name="horario" minlength="7" maxlength="40" placeholder="Digite o dia e o horário desejado, ex: 11:30 01/03/2024" class="form-control"> 
    </div>

    <!-- Campo para a data de nascimento do usuário -->
    <div class="mb-3">
        <label>Data de Nascimento</label>
        
        <input type="date" name="data_nasc" class="form-control"> 
    </div>

    <!-- Botão de envio do formulário -->
    <div class="mb-3">
        <button type="submit" class="btn btn-outline-dark">Enviar</button>
    </div>

</form>
