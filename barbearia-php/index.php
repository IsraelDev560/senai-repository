<!doctype html>
<html lang="pt-br">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link rel="icon" href="img/icon.jpg">

    <title>Barbearia Stylus</title>
</head>

<body>
    <!-- Navbar (Barra de Navegação) -->
    <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
            <!-- Botão de alternância para dispositivos móveis "Hamburguer" -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <!-- Conteúdo da barra de navegação -->
            <div class="collapse navbar-collapse" id="navbarNav">
                <!-- Lista de itens do menu de navegação -->
                <ul class="navbar-nav">
                    <!-- Item do menu - Início -->
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="index.php">Inicio</a>
                    </li>
                    <!-- Item do menu - Agende Seu Horário -->
                    <li class="nav-item">
                        <a class="nav-link" href="?page=novo">Agende Seu Horário</a>
                    </li>
                    <!-- Item do menu - Usuários Agendados -->
                    <li class="nav-item">
                        <a class="nav-link" href="?page=listar">Usuários Agendados</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Contêiner para o conteúdo principal -->
    <div class="container">
        <div class="row">
            <!-- Coluna para o conteúdo -->
            <div class="col mt-5">
                <?php
                // Inclui o arquivo de configuração do banco de dados
                include("config.php");

                // Switch para controlar a inclusão do conteúdo dinâmico
                switch (@$_REQUEST["page"]) {
                    case "novo":
                        // Inclui o formulário para adicionar um novo usuário
                        include("novo-usuario.php");
                        break;
                    case "listar":
                        // Inclui a lista de usuários agendados
                        include("listar-usuario.php");
                        break;
                    case "salvar":
                        // Inclui o script para salvar um novo usuário no banco de dados
                        include("salvar-usuario.php");
                        break;
                    case "editar":
                        include("editar-usuario.php");
                        break;
                    case "excluir":
                        include("excluir-usuario.php");
                        break;
                    default:
                        // Se não houver parâmetro 'page' na requisição, inclui a página inicial
                        include("pagina.html");
                }
                ?>
            </div>
        </div>
    </div>

    <!-- Inclusão do arquivo JavaScript do Bootstrap -->
    <script src="js/bootstrap.bundle.min.js"></script>

</body>

</html>