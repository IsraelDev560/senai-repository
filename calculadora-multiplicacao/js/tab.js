function tabuada(){
  var num = parseInt(document.getElementById("num").value);
  var resposta = document.getElementById('container');
  var tabuada='';

  for(var count = 1; count <= 10; count++) {
    tabuada += num + " x " + count + " = " + (num * count) + "<br/>";
  }
  
  resposta.style.display = 'block'; // Exibir o contêiner
  resposta.innerHTML = tabuada; // Definir o conteúdo com a tabuada
}

function fechartabuada(){
  container.style.display = 'none'; // Ocultar o contêiner
}