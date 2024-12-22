function calcular() {
    const n1 = parseFloat(document.getElementById("num").value);
    const n2 = parseFloat(document.getElementById("num1").value);
    const operacao = document.getElementById("operacao").value;
    
    if (isNaN(n1) || isNaN(n2)) {
        document.getElementById("resultado").innerText = "Por favor, preencha ambos os campos.";
        return;
    }
    
    let resultado;

    switch (operacao) {
        case "soma":
            resultado = n1 + n2;
            document.getElementById("resultado").innerText = `O resultado da adição é: ${resultado}`;
            break;
        case "subtracao":
            resultado = n1 - n2;
            document.getElementById("resultado").innerText = `O resultado da subtração é: ${resultado}`;
            break;
        case "multiplicacao":
            resultado = n1 * n2;
            document.getElementById("resultado").innerText = `O resultado da multiplicação é: ${resultado}`;
            break;
        case "divisao":
            if (n2 === 0) {
                document.getElementById("resultado").innerText = "Impossível dividir por zero.";
            } else {
                resultado = n1 / n2;
                document.getElementById("resultado").innerText = `O resultado da divisão é: ${resultado}`;
            }
            break;
        default:
            document.getElementById("resultado").innerText = "Operação inválida.";
    }
}