function calcularDiferenca() {
    var valorInserido = parseFloat(document.getElementById("valorInserido").value);
    var selectedPizzaValue = parseFloat(document.getElementById("pizzaSelect").value);
    var diferenca = valorInserido - selectedPizzaValue;
    document.getElementById("resultado").textContent = "Seu Troco é: R$ " + diferenca.toFixed(2);

        if(valorInserido < selectedPizzaValue || isNaN (valorInserido)){
            document.getElementById("resultado").textContent = "Dinheiro insuficiente";
        }
}


document.getElementById("valorInserido").addEventListener("input", calcularDiferenca);


document.getElementById("pizzaSelect").addEventListener("change", function() {
    var selectedPizzaValue = parseFloat(this.value);
    var valorDaPizzaElement = document.getElementById("valorDaPizza");
    valorDaPizzaElement.textContent = "Valor da pizza selecionada: R$ " + selectedPizzaValue.toFixed(2);
    
    
    calcularDiferenca();
});