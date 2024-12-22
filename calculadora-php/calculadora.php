<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora</title>
    <link rel="stylesheet" href="style/style.css">
</head>

<body>
    <div class="calculator">
        <h2>Calculadora</h2>
        <form action="" method="POST">
            <div class="input-group">
                <label for="num1">Digite um número:</label>
                <input type="number" id="num1" name="num1" required>
            </div>
            <div class="input-group">
                <label for="num2">Digite outro número:</label>
                <input type="number" id="num2" name="num2" required>
            </div>
            <div class="input-group">
                <label for="operacao">Escolha uma operação:</label>
                <select name="operacao" id="operacao" required>
                    <option value="soma">Soma</option>
                    <option value="subtracao">Subtração</option>
                    <option value="multiplicacao">Multiplicação</option>
                    <option value="divisao">Divisão</option>
                </select>
            </div>
            <div class="input-group">
                <button type="submit">Calcular</button>
            </div>
            
        </form>
       
        <?php
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $num1 = $_POST["num1"] ?? '';
            $num2 = $_POST["num2"] ?? '';
            $operacao = $_POST["operacao"] ?? '';

            switch ($operacao) {
                case "soma":
                    $resultado = $num1 + $num2;
                    break;
                case "subtracao":
                    $resultado = $num1 - $num2;
                    break;
                case "multiplicacao":
                    $resultado = $num1 * $num2;
                    break;
                case "divisao":
                    if ($num2 != 0) {
                        $resultado = $num1 / $num2;
                    } else {
                        $resultado = "Não é possível dividir por zero";
                    }
                    break;
                default:
                    $resultado = "Operação inválida";
            }
            echo "<div class='resultado'>$resultado</div>";
        }
        ?>
    </div>
    <footer id="rodape">
                <p class="rodapep">© 2024 iSCode. Todos os direitos reservados. Desenvolvido por Israel.</p>
        </footer>
</body>

</html>