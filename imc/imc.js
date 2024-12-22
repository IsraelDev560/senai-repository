function imc(){
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);
    var resposta = document.getElementById('res');
    var imc='';
    altura = altura / 100;
    imc = peso/(altura*altura);
    

    imc = imc.toFixed(2)

    if(imc >0 && imc < 17 ){   
        resposta.innerHTML = imc + ' Muito abaixo do peso';
    }
    else if(imc >= 17 && imc < 18.5){
        resposta.innerHTML = imc + ' Abaixo do peso';
    }
    else if(imc >= 18.5 && imc < 25){
        resposta.innerHTML = imc + ' Peso normal';
    }
    else if(imc >= 25 && imc < 30){
        resposta.innerHTML = imc + ' Acima do peso';
    }
    else if(imc >= 30 && imc< 35){
        resposta.innerHTML = imc + ' Obesidade grau 1';
    }
    else if(imc >= 35 && imc < 41){
        resposta.innerHTML = imc + ' Obesidade grau 2';
    }
    else{
        resposta.innerHTML = imc + ' Obesidade grau 3';
    }
}