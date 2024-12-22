// Esta função recarrega a página quando chamada
function recarregarPagina() {
    window.location.reload(); // Chamando o método reload() da propriedade location do objeto window
}

// Este evento é acionado quando a página HTML termina de carregar completamente
window.onload = function () {
    // A função anônima abaixo é executada quando a página é totalmente carregada
    window.scrollTo({
        top: 0, // Rolagem para o topo da página
        left: 0, // Rolagem para a posição horizontal inicial
        behavior: 'smooth' // Opção para uma rolagem suave e animada
    });
};

// Função para pesquisar clínicas com base na localização do usuário e no serviço selecionado
function pesquisarClinicas() {
    // Verificando se o navegador suporta geolocalização
    if (navigator.geolocation) {
        // Solicitando a localização atual do usuário
        navigator.geolocation.getCurrentPosition(function (position) {
            // Obtendo as coordenadas de latitude e longitude do usuário
            var userLatLng = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            // Criando opções para o mapa com base na localização do usuário
            var mapOptions = {
                center: userLatLng, // Centralizando o mapa na localização do usuário
                zoom: 12 // Definindo o nível de zoom do mapa
            };

            // Criando o objeto do mapa utilizando a API do Google Maps
            var map = new google.maps.Map(document.getElementById('resultados'), mapOptions);
            var add = document.getElementById('resultados');
            add.style.display = 'block';

            // Criando um objeto de serviço do Google Maps Places API
            var service = new google.maps.places.PlacesService(map);

            // Obtendo o serviço selecionado a partir do elemento select no HTML
            var selectElement = document.getElementById("servico");
            var servicoSelecionado = selectElement.value;

            // Definindo as palavras-chave com base no serviço selecionado
            var keyword;
            switch (servicoSelecionado) {
                case 'ortopedista':
                    keyword = 'ortopedista';
                    break;
                case 'masoterapeuta':
                    keyword = 'masoterapeuta';
                    break;
                case 'fisioterapia':
                    keyword = 'fisioterapia';
                    break;
                case 'traumatologista':
                    keyword = 'traumatologista';
                    break;
                case 'acupunturista':
                    keyword = 'acupunturista';
                    break;
                default:
                    console.log("Serviço não reconhecido");
                    return;
            }

            // Criando a solicitação de pesquisa para o Nearby Search
            //var objeto
            var request = {
                location: userLatLng, // Utilizando a localização do usuário como referência
                radius: '20000', // Definindo o raio de busca em metros (20000 = 20km)
                keyword: keyword // Definindo a palavra-chave para a pesquisa
            };

            // Executando uma busca Nearby Search com a requisição criada e a função de callback
            //Nearby Search é um tipo de solicitação que você pode fazer à API do Google Places para encontrar lugares próximos a uma localização específica.
            service.nearbySearch(request, function (results, status) {
                if (status == google.maps.places.PlacesServiceStatus.OK) {
                    // Iterando sobre os resultados da pesquisa
                    for (var i = 0; i < results.length; i++) {
                        var place = results[i];
                        var placeLatLng = place.geometry.location;

                        // Criando marcadores no mapa para cada local encontrado
                        var placeMarker = new google.maps.Marker({
                            position: placeLatLng,
                            map: map,
                            title: place.name // Definindo o título do marcador com o nome do local
                        });
                    }
                }
            });

        }, function () {
            // Tratamento de erro caso a localização não possa ser obtida
            console.log("Não foi possível obter a localização do usuário.");
        });
    } else {
        // Tratamento de erro caso o navegador não suporte geolocalização
        console.log("Geolocalização não é suportada por este navegador.");
    }
}

// Função para fechar os resultados da pesquisa de clínicas
function fecharResultados() {
    // Ocultando a div que contém os resultados da pesquisa
    var remove = document.getElementById('resultados');
    remove.style.display = 'none';

    // Removendo a classe 'resultados-active' do body para remover estilos relacionados
    document.body.classList.remove('resultados-active');
}

/* CORPO FRENTE*/
function openBody(event) {
    // Obtém a classe do botão clicado
    const bodyPart = event.target.className;

    // Inicializa uma variável para armazenar uma mensagem com valor vazio
    let message = '';

    // Inicia uma estrutura de controle switch para lidar com diferentes classes de botões clicados
    switch (bodyPart) {
        //Casos
        case "trapezio-direito":
            message = `
            <p><strong>O trapézio pode ser sobrecarregado devido a má postura, estresse emocional, ergonomia inadequada no trabalho ou tensão muscular decorrente de atividades repetitivas.</strong></p>

            <div class="imgs-js">
                <img id="img-trap" width="350" height="200" src="img/ilustracoes/dores-no-trapezio.jpg" alt="Trapezio">
            </div>
            
            <h2>Como evitar:</h2>
            <p>Para prevenir dores no trapézio, é essencial manter uma boa postura, fazer pausas frequentes durante atividades que exijam esforço dessa região e praticar exercícios de alongamento e fortalecimento muscular.</p>
            
            <h1>Veja a seguir alguns exercícios recomendados para o trapézio.</h1>
            
            <h2>Orelha a ombro</h2>
            <ul>
                <li>Este exercício pode ser feito sentado ou em pé.</li>
                <li>Lentamente, leve a orelha direita em direção ao ombro direito. 
                    É natural que o seu ombro esquerdo levante um pouco enquanto você faz isso. 
                    Se acontecer, alivie a cabeça de volta para o centro para relaxar o ombro esquerdo de volta para baixo.</li>
                <li>Respire fundo enquanto mantém essa posição por cerca de 30 segundos. 
                    Depois, solte suavemente esse lado e, em seguida, faça o mesmo alongamento do lado oposto.</li>
            </ul>
            <div class="imgs-js">
                <img id="img-pesc" width="100" height="150" src="img/ilustracoes/exerc-pesc.webp" alt="Exercicios">
            </div>
            <br>
            <h2>Postura da cobra</h2>
            <ul>
                <li>Deitado de barriga para baixo, levante a cabeça e coloque as mãos no chão ao lado dos ombros, mantendo os braços e os cotovelos rentes ao corpo.</li> 
                <li>Pressione a parte superior dos pés no chão e inspire profundamente à medida que começa a levantar a cabeça e o peito.</li> 
                <li>Empurre os ombros para trás e para baixo, mantendo as omoplatas próximas.</li> 
                <li>Segure essa posição por algumas respirações e solte em uma expiração.</li> 
            </ul>
            <div class="imgs-js">
                <img id="img-pesc2" width="350" height="150" src="img/ilustracoes/exerc-pesc-cobra.webp" alt="Exercicios">
            </div>
            <br><br>
            <h2>Como aliviar a dor:</h2>
            <p>Alguns procedimentos simples podem ajudar a aliviar a dor no trapézio. Dentre eles, estão os métodos a seguir:</p>
            <ul>
                <li>Relaxamento e repouso.</li>
                <li>Medicamentos para dor e relaxantes musculares.</li>
                <li>Aplicação de gelo e calor.</li>
                <li>Melhora da ergonomia no espaço de trabalho.</li>
            </ul>
            <h2>Possíveis exames:</h2>
            <p>Em casos de dores persistentes, é recomendável procurar um médico especialista (Ortopedista) para avaliação. Exames como ressonância magnética ou ultrassonografia podem ser solicitados para identificar possíveis lesões.</p>
            `;
            break;
        case "trapezio-esquerdo":
            message = `
            <p><strong>O trapézio pode ser sobrecarregado devido a má postura, estresse emocional, ergonomia inadequada no trabalho ou tensão muscular decorrente de atividades repetitivas.</strong></p>

            <div class="imgs-js">
                <img id="img-trap" width="350" height="200" src="img/ilustracoes/dores-no-trapezio.jpg" alt="Trapezio">
            </div>

            <h2>Como evitar:</h2>
            <p>Para prevenir dores no trapézio, é essencial manter uma boa postura, fazer pausas frequentes durante atividades que exijam esforço dessa região e praticar exercícios de alongamento e fortalecimento muscular.</p>

            <h1>Veja a seguir alguns exercícios recomendados para o trapézio.</h1>

            <h2>Orelha a ombro</h2>
            <ul>
                <li>Este exercício pode ser feito sentado ou em pé.</li>
                <li>Lentamente, leve a orelha direita em direção ao ombro direito. 
                    É natural que o seu ombro esquerdo levante um pouco enquanto você faz isso. 
                    Se acontecer, alivie a cabeça de volta para o centro para relaxar o ombro esquerdo de volta para baixo.</li>
                <li>Respire fundo enquanto mantém essa posição por cerca de 30 segundos. 
                    Depois, solte suavemente esse lado e, em seguida, faça o mesmo alongamento do lado oposto.</li>
            </ul>
            <div class="imgs-js">
                <img id="img-pesc" width="100" height="150" src="img/ilustracoes/exerc-pesc.webp" alt="Exercicios">
            </div>
            <br>
            <h2>Postura da cobra</h2>
            <ul>
                <li>Deitado de barriga para baixo, levante a cabeça e coloque as mãos no chão ao lado dos ombros, mantendo os braços e os cotovelos rentes ao corpo.</li> 
                <li>Pressione a parte superior dos pés no chão e inspire profundamente à medida que começa a levantar a cabeça e o peito.</li> 
                <li>Empurre os ombros para trás e para baixo, mantendo as omoplatas próximas.</li> 
                <li>Segure essa posição por algumas respirações e solte em uma expiração.</li> 
            </ul>
            <div class="imgs-js">
                <img id="img-pesc2" width="350" height="150" src="img/ilustracoes/exerc-pesc-cobra.webp" alt="Exercicios">
            </div>
            <br><br>
            <h2>Como aliviar a dor:</h2>
            <p>Alguns procedimentos simples podem ajudar a aliviar a dor no trapézio. Dentre eles, estão os métodos a seguir:</p>
            <ul>
                <li>Relaxamento e repouso.</li>
                <li>Medicamentos para dor e relaxantes musculares.</li>
                <li>Aplicação de gelo e calor.</li>
                <li>Melhora da ergonomia no espaço de trabalho.</li>
            </ul>
            <h2>Possíveis exames:</h2>
            <p>Em casos de dores persistentes, é recomendável procurar um médico especialista (Ortopedista) para avaliação. Exames como ressonância magnética ou ultrassonografia podem ser solicitados para identificar possíveis lesões.</p>
            `;
            break;
        case "ombro-direito":
            message = `
            <p><strong>As dores no ombro podem ser causadas por lesões, inflamações, tendinites, bursites, artrite, artrose, luxações, entre outras condições.</strong></p>

            <div class="imgs-js">
                <img width="350" height="300" src="img/ilustracoes/dor-ombro.webp" alt="Exercício">
            </div>

            <h2>Como evitar:</h2>
            <p>Para prevenir dores no ombro, é importante praticar exercícios de fortalecimento muscular, manter uma postura adequada, evitar sobrecarga de peso e realizar alongamentos regularmente.</p>

            <h1>Veja a seguir alguns exercícios recomendados para o ombro.</h1>

            <h2>Abdução de ombro (elevação lateral)</h2>
            <p>A abdução de ombro, também conhecida como elevação lateral, é um movimento importante para o fortalecimento da musculatura.</p>
            <ol>
                <li>Fique de pé, com a coluna lombar bem encaixada e o abdômen contraído, você deve abrir e fechar os braços, acompanhando a linha lateral do corpo. A palma da mão deve ser mantida pra baixo durante o movimento.</li>
                <li>Neste exercício, é preciso ter atenção para não ultrapassar a altura da linha do ombro. Esse é o limite para a realização do movimento. Você deve fazer três séries de dez repetições com cada braço.</li>
            </ol>
            <div class="imgs-js">
                <img width="350" height="300" src="img/ilustracoes/elevacao-lateral.webp" alt="Exercício">
            </div>

            <h2>Elevação (frontal)</h2>
            <ol>
                <li>Em pé, com os pés paralelos e afastados na largura do quadril, segure os halteres com as palmas das mãos voltadas para baixo (pegada pronada). Deixe os joelhos levemente flexionados, os braços à frente do corpo e estendidos para baixo, na linha da articulação dos ombros. Mantenha as escápulas contraídas (fechadas).</li>
                <li>Eleve os dois braços até à altura dos ombros e abaixe-os em um movimento contínuo, sem pausa, sempre mantendo o core ativado durante a execução. Lembre-se de colocar a força nos ombros, não nos braços.</li>
            </ol>
            <div class="imgs-js">
                <img width="350" height="300" src="img/ilustracoes/elevacao-frontal.gif" alt="Exercício">
            </div>

            <h1>Veja a seguir Alongamentos mais recomendados</h1>

            <h2>Alongamento de Ombro e tríceps</h2>
            <p>O alongamento no estilo tríceps francês é simples e pode ser executado para auxiliar no alongamento do ombro e do tríceps também. Evite excessos como apoiar na parede para conseguir mais peso e maior extensão.</p>
            <div class="imgs-js">
                <img width="300" height="300" src="img/ilustracoes/alongamento-triceps-ombro.jpg" alt="Alongamento">
            </div>

            <h2>Alongamento na parede</h2>
            <p>Para começar, coloque as duas mãos na parede e forme um ângulo de 90º com o corpo;<br>
                Em seguida, leve os pés para trás até que os braços estejam retos.<br>
                Então, incline os quadris, dobrando o corpo para a frente. Mantenha as escápulas para trás e evite comprimir os ombros ao redor do pescoço.</p>
            <div class="imgs-js">
                <img width="300" height="300" src="img/ilustracoes/mãos-na-parede.webp" alt="Alongamento">
            </div>

            <h2>Como aliviar a dor:</h2>
            <p>Repouso, aplicação de gelo, fisioterapia, medicamentos anti-inflamatórios e, em casos mais graves, procedimentos cirúrgicos podem ser necessários para aliviar a dor no ombro.</p>

            <h2>Possíveis exames:</h2>
            <p>O diagnóstico das causas das dores no ombro pode envolver exames de imagem, como radiografias, ressonância magnética e ultrassonografia, além da avaliação clínica por um ortopedista.</p>
            `;
            break;
        case "ombro-esquerdo":
            message = `
            <p><strong>As dores no ombro podem ser causadas por lesões, inflamações, tendinites, bursites, artrite, artrose, luxações, entre outras condições.</strong></p>

            <div class="imgs-js">
                <img width="350" height="300" src="img/ilustracoes/dor-ombro.webp" alt="Exercício">
            </div>

            <h2>Como evitar:</h2>
            <p>Para prevenir dores no ombro, é importante praticar exercícios de fortalecimento muscular, manter uma postura adequada, evitar sobrecarga de peso e realizar alongamentos regularmente.</p>

            <h1>Veja a seguir alguns exercícios recomendados para o ombro.</h1>

            <h2>Abdução de ombro (elevação lateral)</h2>
            <p>A abdução de ombro, também conhecida como elevação lateral, é um movimento importante para o fortalecimento da musculatura.</p>
            <ol>
                <li>Fique de pé, com a coluna lombar bem encaixada e o abdômen contraído, você deve abrir e fechar os braços, acompanhando a linha lateral do corpo. A palma da mão deve ser mantida pra baixo durante o movimento.</li>
                <li>Neste exercício, é preciso ter atenção para não ultrapassar a altura da linha do ombro. Esse é o limite para a realização do movimento. Você deve fazer três séries de dez repetições com cada braço.</li>
            </ol>
            <div class="imgs-js">
                <img width="350" height="300" src="img/ilustracoes/elevacao-lateral.webp" alt="Exercício">
            </div>

            <h2>Elevação (frontal)</h2>
            <ol>
                <li>Em pé, com os pés paralelos e afastados na largura do quadril, segure os halteres com as palmas das mãos voltadas para baixo (pegada pronada). Deixe os joelhos levemente flexionados, os braços à frente do corpo e estendidos para baixo, na linha da articulação dos ombros. Mantenha as escápulas contraídas (fechadas).</li>
                <li>Eleve os dois braços até à altura dos ombros e abaixe-os em um movimento contínuo, sem pausa, sempre mantendo o core ativado durante a execução. Lembre-se de colocar a força nos ombros, não nos braços.</li>
            </ol>
            <div class="imgs-js">
                <img width="350" height="300" src="img/ilustracoes/elevacao-frontal.gif" alt="Exercício">
            </div>

            <h1>Veja a seguir Alongamentos mais recomendados</h1>

            <h2>Alongamento de Ombro e tríceps</h2>
            <p>O alongamento no estilo tríceps francês é simples e pode ser executado para auxiliar no alongamento do ombro e do tríceps também. Evite excessos como apoiar na parede para conseguir mais peso e maior extensão.</p>
            <div class="imgs-js">
                <img width="300" height="300" src="img/ilustracoes/alongamento-triceps-ombro.jpg" alt="Alongamento">
            </div>

            <h2>Alongamento na parede</h2>
            <p>Para começar, coloque as duas mãos na parede e forme um ângulo de 90º com o corpo;<br>
                Em seguida, leve os pés para trás até que os braços estejam retos.<br>
                Então, incline os quadris, dobrando o corpo para a frente. Mantenha as escápulas para trás e evite comprimir os ombros ao redor do pescoço.</p>
            <div class="imgs-js">
                <img width="300" height="300" src="img/ilustracoes/mãos-na-parede.webp" alt="Alongamento">
            </div>

            <h2>Como aliviar a dor:</h2>
            <p>Repouso, aplicação de gelo, fisioterapia, medicamentos anti-inflamatórios e, em casos mais graves, procedimentos cirúrgicos podem ser necessários para aliviar a dor no ombro.</p>

            <h2>Possíveis exames:</h2>
            <p>O diagnóstico das causas das dores no ombro pode envolver exames de imagem, como radiografias, ressonância magnética e ultrassonografia, além da avaliação clínica por um ortopedista.</p>
            `;
            break;
        case "cotovelo-direito":
            message = `
            <p><strong>As dores no cotovelo podem ser causadas por lesões por esforço repetitivo, como a epicondilite lateral (cotovelo de tenista) e a epicondilite medial (cotovelo de golfista), bursites, artrite, entre outras condições.</strong></p>
            <div class="imgs-js">
            <img id="img-coluna" width="350" height="250" src="img/ilustracoes/dor-cotovelo.webp" alt="Dores no Cotovelo">
            </div>
            <h2>Como evitar:</h2>
            <p>Para prevenir dores no cotovelo, é importante praticar atividades físicas com técnicas adequadas, evitar movimentos repetitivos que sobrecarreguem o cotovelo, e realizar alongamentos antes e após a prática esportiva.</p>
            
            <h1>Veja a seguir alguns exercícios recomendados para o cotovelo:</h1>
            
            <h2>Extensão de punho com halteres:</h2>
            <ul>
              <li>Segure um halter com a palma da mão voltada para baixo. Mantenha o braço estendido e levante o peso flexionando o punho em direção ao teto.</li>
              <li>Faça três séries de dez repetições.</li>
            </ul>
            <div class="imgs-js">
            <img width="250" height="250" src="img/ilustracoes/extensao-punho.jpg" alt="Extensão de Punho com Halteres">
            </div>
            <h2>Flexão de cotovelo com halteres:</h2>
            <ul>
              <li>Segure um halter com a palma da mão voltada para cima.</li>
              <li>Mantenha o braço estendido ao lado do corpo e dobre o cotovelo levando o peso em direção ao ombro.</li>
              <li>Faça três séries de dez repetições com cada braço.</li>
            </ul>
            <div class="imgs-js">
            <img width="250" height="250" src="img/ilustracoes/flexao-cotovelo-halteres.jpg" alt="Flexão de Cotovelo com Halteres">
            </div>
            <h2>Como aliviar a dor:</h2>
            <p>Repouso, aplicação de gelo, uso de órteses, fisioterapia e, em casos mais graves, cirurgia, podem ser necessários para aliviar a dor no cotovelo.</p>
            
            <h2>Possíveis exames:</h2>
            <p>O diagnóstico das causas das dores no cotovelo pode envolver exames de imagem, como radiografias, ressonância magnética e ultrassonografia, além da avaliação clínica por um ortopedista ou fisioterapeuta.</p>
            `;
            break;
        case "cotovelo-esquerdo":
            message = `
            <p><strong>As dores no cotovelo podem ser causadas por lesões por esforço repetitivo, como a epicondilite lateral (cotovelo de tenista) e a epicondilite medial (cotovelo de golfista), bursites, artrite, entre outras condições.</strong></p>
            <div class="imgs-js">
            <img id="img-coluna" width="350" height="250" src="img/ilustracoes/dor-cotovelo.webp" alt="Dores no Cotovelo">
            </div>
            <h2>Como evitar:</h2>
            <p>Para prevenir dores no cotovelo, é importante praticar atividades físicas com técnicas adequadas, evitar movimentos repetitivos que sobrecarreguem o cotovelo, e realizar alongamentos antes e após a prática esportiva.</p>
            
            <h1>Veja a seguir alguns exercícios recomendados para o cotovelo:</h1>
            
            <h2>Extensão de punho com halteres:</h2>
            <ul>
              <li>Segure um halter com a palma da mão voltada para baixo. Mantenha o braço estendido e levante o peso flexionando o punho em direção ao teto.</li>
              <li>Faça três séries de dez repetições.</li>
            </ul>
            <div class="imgs-js">
            <img width="250" height="250" src="img/ilustracoes/extensao-punho.jpg" alt="Extensão de Punho com Halteres">
            </div>
            <h2>Flexão de cotovelo com halteres:</h2>
            <ul>
              <li>Segure um halter com a palma da mão voltada para cima.</li>
              <li>Mantenha o braço estendido ao lado do corpo e dobre o cotovelo levando o peso em direção ao ombro.</li>
              <li>Faça três séries de dez repetições com cada braço.</li>
            </ul>
            <div class="imgs-js">
            <img width="250" height="250" src="img/ilustracoes/flexao-cotovelo-halteres.jpg" alt="Flexão de Cotovelo com Halteres">
            </div>
            <h2>Como aliviar a dor:</h2>
            <p>Repouso, aplicação de gelo, uso de órteses, fisioterapia e, em casos mais graves, cirurgia, podem ser necessários para aliviar a dor no cotovelo.</p>
            
            <h2>Possíveis exames:</h2>
            <p>O diagnóstico das causas das dores no cotovelo pode envolver exames de imagem, como radiografias, ressonância magnética e ultrassonografia, além da avaliação clínica por um ortopedista ou fisioterapeuta.</p>`;
            break;
        case "mao-direita":
            message = `
            <p><strong>As dores nas mãos podem ser causadas por lesões, como a síndrome do túnel do carpo, artrite, tendinite, bursite, entre outras condições.</strong></p>

            <div class="imgs-js">
                <img width="350" height="300" src="img/ilustracoes/dor-mao.jpeg" alt="Dores nas Mãos">
            </div>
            
            <h2>Como evitar:</h2>
            <p>Para prevenir dores nas mãos, é importante praticar exercícios de fortalecimento e alongamento, manter uma postura correta durante as atividades que envolvam as mãos, e fazer pausas frequentes para descanso.</p>
            
            <h1>Veja a seguir alguns exercícios recomendados para as mãos:</h1>
            
            <h2>Alongamento dos dedos:</h2>
            <ul>
                <li>Estenda os dedos e mantenha-os nessa posição por alguns segundos.</li>
                <li>Depois, feche a mão e faça um punho firme.</li>
                <li>Repita o movimento algumas vezes.</li>
            </ul>
            
            <div class="imgs-js">
                <img id="img-trap" width="250" height="200" src="img/ilustracoes/alongamento-dedos.jpg" alt="Alongamento dos Dedos">
            </div>
            
            <h2>Aperto de bola de borracha:</h2>
            <ul>
                <li>Segure uma bola de borracha ou similar e aperte-a firmemente por alguns segundos.</li>
                <li>Solte e repita o movimento várias vezes.</li>
            </ul>
            
            <div class="imgs-js">
                <img id="img-trap" width="250" height="200" src="img/ilustracoes/apertar-bola.jpg" alt="Aperto de Bola de Borracha">
            </div>
            
            <h2>Como aliviar a dor:</h2>
            <p>Repouso, aplicação de gelo, uso de órteses, fisioterapia, e em casos mais graves, cirurgia, podem ser necessários para aliviar a dor nas mãos.</p>
            
            <h2>Possíveis exames:</h2>
            <p>O diagnóstico das causas das dores nas mãos pode envolver exames de imagem, como radiografias, ultrassonografia e ressonância magnética, além da avaliação clínica por um ortopedista ou reumatologista.</p>            
            `;
            break;
        case "mao-esquerda":
            message = `
            <p><strong>As dores nas mãos podem ser causadas por lesões, como a síndrome do túnel do carpo, artrite, tendinite, bursite, entre outras condições.</strong></p>

            <div class="imgs-js">
                <img width="350" height="300" src="img/ilustracoes/dor-mao.jpeg" alt="Dores nas Mãos">
            </div>
            
            <h2>Como evitar:</h2>
            <p>Para prevenir dores nas mãos, é importante praticar exercícios de fortalecimento e alongamento, manter uma postura correta durante as atividades que envolvam as mãos, e fazer pausas frequentes para descanso.</p>
            
            <h1>Veja a seguir alguns exercícios recomendados para as mãos:</h1>
            
            <h2>Alongamento dos dedos:</h2>
            <ul>
                <li>Estenda os dedos e mantenha-os nessa posição por alguns segundos.</li>
                <li>Depois, feche a mão e faça um punho firme.</li>
                <li>Repita o movimento algumas vezes.</li>
            </ul>
            
            <div class="imgs-js">
                <img id="img-trap" width="250" height="200" src="img/ilustracoes/alongamento-dedos.jpg" alt="Alongamento dos Dedos">
            </div>
            
            <h2>Aperto de bola de borracha:</h2>
            <ul>
                <li>Segure uma bola de borracha ou similar e aperte-a firmemente por alguns segundos.</li>
                <li>Solte e repita o movimento várias vezes.</li>
            </ul>
            
            <div class="imgs-js">
                <img id="img-trap" width="250" height="200" src="img/ilustracoes/apertar-bola.jpg" alt="Aperto de Bola de Borracha">
            </div>
            
            <h2>Como aliviar a dor:</h2>
            <p>Repouso, aplicação de gelo, uso de órteses, fisioterapia, e em casos mais graves, cirurgia, podem ser necessários para aliviar a dor nas mãos.</p>
            
            <h2>Possíveis exames:</h2>
            <p>O diagnóstico das causas das dores nas mãos pode envolver exames de imagem, como radiografias, ultrassonografia e ressonância magnética, além da avaliação clínica por um ortopedista ou reumatologista.</p>            
            `;
            break;
        case "quadril-direito":
            message = `
            <p><strong>As dores no quadril podem ser causadas por lesões, como a bursite trocantérica, tendinite do iliopsoas, osteoartrite, impacto femoroacetabular, entre outras condições.</strong></p>

            <div class="imgs-js">
                <img id="img-coluna" width="350" height="250" src="img/ilustracoes/dor-quadril.webp" alt="Dores no Quadril">
            </div>
            
            <h2>Como evitar:</h2>
            <p>Para prevenir dores no quadril, é importante manter um peso saudável, praticar atividades físicas regulares para fortalecer a musculatura, evitar atividades de alto impacto, e alongar os músculos do quadril regularmente.</p>
            
            <h1>Veja a seguir alguns exercícios recomendados para o quadril:</h1>
            
            <h2>Alongamento flexor de quadril:</h2>
            <p>Para fazer esse alongamento, você precisará se deitar de costas e dobrar os joelhos, mantendo os pés apoiados no chão. Depois que estiver nessa posição e sentir os quadris bem alinhados, siga os passos abaixo.</p>
            <ul>
                <li>Estique a perna esquerda e mantenha apenas a direita dobrada.</li>
                <li>Segure o seu joelho da perna dobrada (direita), sem forçá-lo, com a mão oposta (esquerda).</li>
                <li>Devagar, puxe o joelho para a esquerda na direção da perna que está esticada e sem dobrá-la. Tente não tirar os quadris do chão.</li>
                <li>Encontre uma posição confortável, sempre aproximando o joelho que está sendo puxado da perna que está esticada. Permaneça na posição por 30 segundos.</li>
                <li>Repita do outro lado.</li>
            </ul>
            <div class="imgs-js">
                <img id="img-coluna" width="350" height="250" src="img/ilustracoes/alongamento-flexor-quadril.jpg" alt="Alongamento do Quadril">
            </div>
            <p>Faça o mesmo movimento com a perna esquerda e com a direita pelo menos três vezes, alternadas.</p>
            
            <h2>Abdução de quadril:</h2>
            <p>Outro alongamento feito com o corpo deitado, mas, dessa vez, virado de lado. As pernas começam esticadas e apenas uma delas vai dobrar.</p>
            <ul>
                <li>Dobre o joelho do lado que está virado para o chão, enquanto mantém a outra perna esticada.</li>
                <li>Apoie o cotovelo do braço que está mais perto do chão e utilize a mão desse mesmo braço para segurar a cabeça, mantendo o pescoço firme.</li>
                <li>A outra mão ficará apoiada no chão, à frente do seu corpo, com o cotovelo fazendo um ângulo de 45°.</li>
                <li>O joelho do lado virado para o chão permanecerá dobrado enquanto você, aos poucos, levanta a outra perna (esticada) na direção do teto.</li>
                <li>Depois de levantar a perna o máximo que puder, mantenha-a esticada e alta por pelo menos 30 segundos.</li>
                <li>Troque de lado e repita o processo pelo menos três vez</li>
            </ul>
            <div class="imgs-js">
                <img id="img-coluna" width="350" height="250" src="img/ilustracoes/abducao-quadril.jpg" alt="Abdução de Quadril com Elástico">
            </div>
            
            <h2>Como aliviar a dor:</h2>
            <p>Repouso, aplicação de gelo, uso de anti-inflamatórios, fisioterapia, e em casos mais graves, cirurgia, podem ser necessários para aliviar a dor no quadril.</p>
            
            <h2>Possíveis exames:</h2>
            <p>O diagnóstico das causas das dores no quadril pode envolver exames de imagem, como radiografias, ressonância magnética e tomografia computadorizada, além da avaliação clínica por um ortopedista ou fisioterapeuta.</p>
            `;
            break;
        case "quadril-esquerdo":
            message = `<p><strong>As dores no quadril podem ser causadas por lesões, como a bursite trocantérica, tendinite do iliopsoas, osteoartrite, impacto femoroacetabular, entre outras condições.</strong></p>

            <div class="imgs-js">
                <img id="img-coluna" width="350" height="250" src="img/ilustracoes/dor-quadril.webp" alt="Dores no Quadril">
            </div>
            
            <h2>Como evitar:</h2>
            <p>Para prevenir dores no quadril, é importante manter um peso saudável, praticar atividades físicas regulares para fortalecer a musculatura, evitar atividades de alto impacto, e alongar os músculos do quadril regularmente.</p>
            
            <h1>Veja a seguir alguns exercícios recomendados para o quadril:</h1>
            
            <h2>Alongamento flexor de quadril:</h2>
            <p>Para fazer esse alongamento, você precisará se deitar de costas e dobrar os joelhos, mantendo os pés apoiados no chão. Depois que estiver nessa posição e sentir os quadris bem alinhados, siga os passos abaixo.</p>
            <ul>
                <li>Estique a perna esquerda e mantenha apenas a direita dobrada.</li>
                <li>Segure o seu joelho da perna dobrada (direita), sem forçá-lo, com a mão oposta (esquerda).</li>
                <li>Devagar, puxe o joelho para a esquerda na direção da perna que está esticada e sem dobrá-la. Tente não tirar os quadris do chão.</li>
                <li>Encontre uma posição confortável, sempre aproximando o joelho que está sendo puxado da perna que está esticada. Permaneça na posição por 30 segundos.</li>
                <li>Repita do outro lado.</li>
            </ul>
            <div class="imgs-js">
                <img id="img-coluna" width="350" height="250" src="img/ilustracoes/alongamento-flexor-quadril.jpg" alt="Alongamento do Quadril">
            </div>
            <p>Faça o mesmo movimento com a perna esquerda e com a direita pelo menos três vezes, alternadas.</p>
            
            <h2>Abdução de quadril:</h2>
            <p>Outro alongamento feito com o corpo deitado, mas, dessa vez, virado de lado. As pernas começam esticadas e apenas uma delas vai dobrar.</p>
            <ul>
                <li>Dobre o joelho do lado que está virado para o chão, enquanto mantém a outra perna esticada.</li>
                <li>Apoie o cotovelo do braço que está mais perto do chão e utilize a mão desse mesmo braço para segurar a cabeça, mantendo o pescoço firme.</li>
                <li>A outra mão ficará apoiada no chão, à frente do seu corpo, com o cotovelo fazendo um ângulo de 45°.</li>
                <li>O joelho do lado virado para o chão permanecerá dobrado enquanto você, aos poucos, levanta a outra perna (esticada) na direção do teto.</li>
                <li>Depois de levantar a perna o máximo que puder, mantenha-a esticada e alta por pelo menos 30 segundos.</li>
                <li>Troque de lado e repita o processo pelo menos três vez</li>
            </ul>
            <div class="imgs-js">
                <img id="img-coluna" width="350" height="250" src="img/ilustracoes/abducao-quadril.jpg" alt="Abdução de Quadril com Elástico">
            </div>
            
            <h2>Como aliviar a dor:</h2>
            <p>Repouso, aplicação de gelo, uso de anti-inflamatórios, fisioterapia, e em casos mais graves, cirurgia, podem ser necessários para aliviar a dor no quadril.</p>
            
            <h2>Possíveis exames:</h2>
            <p>O diagnóstico das causas das dores no quadril pode envolver exames de imagem, como radiografias, ressonância magnética e tomografia computadorizada, além da avaliação clínica por um ortopedista ou fisioterapeuta.</p>
            `;
            break;
        case "joelho-direito":
            message = `
            <p><strong>As dores no joelho podem ser causadas por lesões, como entorses, distensões, lesões meniscais, tendinites, bursites, artrite, entre outras condições.</strong></p>

            <div class="imgs-js">
                <img id="img-coluna" width="350" height="250" src="img/ilustracoes/dor-joelho.jpg" alt="Dores no Joelho">
            </div>
            
            <h2>Como evitar:</h2>
            <p>Para prevenir dores no joelho, é importante praticar atividades físicas com técnicas adequadas, fortalecer a musculatura das pernas, evitar sobrecarga de peso, e usar calçados adequados.</p>
            
            <h1>Veja a seguir alguns exercícios recomendados para o joelho:</h1>
            
            <h2>Agachamento:</h2>
            <ul>
                <li>Fique em pé, com os pés afastados na largura dos ombros.</li>
                <li>Flexione os joelhos e desça o corpo como se estivesse sentando em uma cadeira.</li>
                <li>Mantenha os joelhos alinhados com os dedos dos pés.</li>
                <li>Volte à posição inicial e repita o movimento várias vezes.</li>
            </ul>
            <div class="imgs-js">
                <img id="img-coluna" width="350" height="250" src="img/ilustracoes/agachamento-livre.webp" alt="Agachamento">
            </div>
            
            <h2>Elevação de perna estendida:</h2>
            <ul>
                <li>Deite-se de costas no chão, com uma perna estendida e a outra flexionada.</li>
                <li>Levante a perna estendida em direção ao teto, mantendo-a reta, e depois abaixe-a lentamente.</li>
                <li>Faça três séries de dez repetições com cada perna.</li>
            </ul>
            <div class="imgs-js">
                <img id="img-coluna" width="350" height="250" src="img/ilustracoes/elevacao-perna.jpg" alt="Elevação de Perna Estendida">
            </div>
            
            <h2>Como aliviar a dor:</h2>
            <p>Repouso, aplicação de gelo, uso de joelheira ou órtese, fisioterapia, e em casos mais graves, cirurgia, podem ser necessários para aliviar a dor no joelho.</p>
            
            <h2>Possíveis exames:</h2>
            <p>O diagnóstico das causas das dores no joelho pode envolver exames de imagem, como radiografias, ressonância magnética e ultrassonografia, além da avaliação clínica por um ortopedista.</p>
            `;
            break;
        case "joelho-esquerdo":
            message = `<p><strong>As dores no joelho podem ser causadas por lesões, como entorses, distensões, lesões meniscais, tendinites, bursites, artrite, entre outras condições.</strong></p>

            <div class="imgs-js">
                <img id="img-coluna" width="350" height="250" src="img/ilustracoes/dor-joelho.jpg" alt="Dores no Joelho">
            </div>
            
            <h2>Como evitar:</h2>
            <p>Para prevenir dores no joelho, é importante praticar atividades físicas com técnicas adequadas, fortalecer a musculatura das pernas, evitar sobrecarga de peso, e usar calçados adequados.</p>
            
            <h1>Veja a seguir alguns exercícios recomendados para o joelho:</h1>
            
            <h2>Agachamento:</h2>
            <ul>
                <li>Fique em pé, com os pés afastados na largura dos ombros.</li>
                <li>Flexione os joelhos e desça o corpo como se estivesse sentando em uma cadeira.</li>
                <li>Mantenha os joelhos alinhados com os dedos dos pés.</li>
                <li>Volte à posição inicial e repita o movimento várias vezes.</li>
            </ul>
            <div class="imgs-js">
                <img id="img-coluna" width="350" height="250" src="img/ilustracoes/agachamento-livre.webp" alt="Agachamento">
            </div>
            
            <h2>Elevação de perna estendida:</h2>
            <ul>
                <li>Deite-se de costas no chão, com uma perna estendida e a outra flexionada.</li>
                <li>Levante a perna estendida em direção ao teto, mantendo-a reta, e depois abaixe-a lentamente.</li>
                <li>Faça três séries de dez repetições com cada perna.</li>
            </ul>
            <div class="imgs-js">
                <img id="img-coluna" width="350" height="250" src="img/ilustracoes/elevacao-perna.jpg" alt="Elevação de Perna Estendida">
            </div>
            
            <h2>Como aliviar a dor:</h2>
            <p>Repouso, aplicação de gelo, uso de joelheira ou órtese, fisioterapia, e em casos mais graves, cirurgia, podem ser necessários para aliviar a dor no joelho.</p>
            
            <h2>Possíveis exames:</h2>
            <p>O diagnóstico das causas das dores no joelho pode envolver exames de imagem, como radiografias, ressonância magnética e ultrassonografia, além da avaliação clínica por um ortopedista.</p>
            `;
            break;
        case "tornozelo-direito":
            message = `<p><strong>As dores no tornozelo podem ser causadas por entorses, fraturas, tendinites, artrite, bursite, lesões ligamentares, entre outras condições.</strong></p>

            <div class="imgs-js">
                <img id="img-coluna" width="350" height="300" src="img/ilustracoes/dor-tornozelo.jpg" alt="Dores no Tornozelo">
            </div>
            
            <h2>Como evitar:</h2>
            <p>Para prevenir dores no tornozelo, é importante fortalecer os músculos da perna e do tornozelo, usar calçados adequados, evitar superfícies irregulares e praticar atividades físicas com técnicas adequadas.</p>
            
            <h1>Veja a seguir alguns exercícios recomendados para o tornozelo:</h1>
            
            <h2>Rotação de tornozelo:</h2>
            <ul>
                <li>Sente-se em uma cadeira com os pés apoiados no chão.</li>
                <li>Lentamente, gire o tornozelo em círculos, primeiro no sentido horário e depois no sentido anti-horário.</li>
                <li>Repita o movimento várias vezes com cada pé.</li>
            </ul>
            <div class="imgs-js">
                <img id="img-coluna" width="350" height="300" src="img/ilustracoes/rotacao-tornozelo.jpg" alt="Rotação de Tornozelo">
            </div>
            
            <h2>Flexão plantar e dorsal:</h2>
            <ul>
                <li>Sente-se em uma cadeira com os pés apoiados no chão.</li>
                <li>Levante os dedos dos pés em direção ao teto, fazendo uma flexão plantar, e depois abaixe-os, fazendo uma flexão dorsal.</li>
                <li>Faça três séries de dez repetições com cada pé.</li>
            </ul>
            <div class="imgs-js">
                <img id="img-coluna" width="350" height="300" src="img/ilustracoes/flexao-tornozelo.png" alt="Flexão Plantar e Dorsal">
            </div>
            
            <h2>Como aliviar a dor:</h2>
            <p>Repouso, aplicação de gelo, elevação do tornozelo, uso de tornozeleira ou órtese, fisioterapia, e em casos mais graves, cirurgia, podem ser necessários para aliviar a dor no tornozelo.</p>
            
            <h2>Possíveis exames:</h2>
            <p>O diagnóstico das causas das dores no tornozelo pode envolver exames de imagem, como radiografias, ressonância magnética e ultrassonografia, além da avaliação clínica por um ortopedista.</p>
            `;
            break;
        case "tornozelo-esquerdo":
            message = `<p><strong>As dores no tornozelo podem ser causadas por entorses, fraturas, tendinites, artrite, bursite, lesões ligamentares, entre outras condições.</strong></p>

            <div class="imgs-js">
                <img id="img-coluna" width="350" height="300" src="img/ilustracoes/dor-tornozelo.jpg" alt="Dores no Tornozelo">
            </div>
            
            <h2>Como evitar:</h2>
            <p>Para prevenir dores no tornozelo, é importante fortalecer os músculos da perna e do tornozelo, usar calçados adequados, evitar superfícies irregulares e praticar atividades físicas com técnicas adequadas.</p>
            
            <h1>Veja a seguir alguns exercícios recomendados para o tornozelo:</h1>
            
            <h2>Rotação de tornozelo:</h2>
            <ul>
                <li>Sente-se em uma cadeira com os pés apoiados no chão.</li>
                <li>Lentamente, gire o tornozelo em círculos, primeiro no sentido horário e depois no sentido anti-horário.</li>
                <li>Repita o movimento várias vezes com cada pé.</li>
            </ul>
            <div class="imgs-js">
                <img id="img-coluna" width="350" height="300" src="img/ilustracoes/rotacao-tornozelo.jpg" alt="Rotação de Tornozelo">
            </div>
            
            <h2>Flexão plantar e dorsal:</h2>
            <ul>
                <li>Sente-se em uma cadeira com os pés apoiados no chão.</li>
                <li>Levante os dedos dos pés em direção ao teto, fazendo uma flexão plantar, e depois abaixe-os, fazendo uma flexão dorsal.</li>
                <li>Faça três séries de dez repetições com cada pé.</li>
            </ul>
            <div class="imgs-js">
                <img id="img-coluna" width="350" height="300" src="img/ilustracoes/flexao-tornozelo.png" alt="Flexão Plantar e Dorsal">
            </div>
            
            <h2>Como aliviar a dor:</h2>
            <p>Repouso, aplicação de gelo, elevação do tornozelo, uso de tornozeleira ou órtese, fisioterapia, e em casos mais graves, cirurgia, podem ser necessários para aliviar a dor no tornozelo.</p>
            
            <h2>Possíveis exames:</h2>
            <p>O diagnóstico das causas das dores no tornozelo pode envolver exames de imagem, como radiografias, ressonância magnética e ultrassonografia, além da avaliação clínica por um ortopedista.</p>
            `;
            break;
        default:
            // Lógica caso a classe não seja reconhecida
            message = "informação não encontrada";
    }

    // Obtém todos os elementos HTML com a classe "result-body"
    var containers = document.getElementsByClassName("result-body");

    // Itera sobre cada container encontrado
    for (var i = 0; i < containers.length; i++) {
        // Obtém o container atual
        var container = containers[i];

        // Define a mensagem no parágrafo dentro do container
        var paragraph = container.querySelector("p");
        // Define o conteúdo HTML do parágrafo com a mensagem composta
        paragraph.innerHTML = "<strong>Possíveis causas da dor no(a)</strong> " + bodyPart + " " + message;

        // Verifica se o container está oculto
        if (container.style.display === "none") {
            // Se estiver oculto, mostra o container
            container.style.display = "block";
        } else {
            // Se não estiver oculto, oculta o container
            container.style.display = "none";
        }
        container.scrollTop = 0;
    }
}

function closeBody() {
    // Obtém todos os elementos com a classe 'result-body'
    const resultsDivs = document.getElementsByClassName('result-body');

    // Itera sobre cada elemento encontrado
    for (var i = 0; i < resultsDivs.length; i++) {
        // Obtém o elemento atual
        var div = resultsDivs[i];

        // Oculta o elemento atual definindo o estilo de exibição como 'none'
        div.style.display = 'none';
    }
}
/*FIM CORPO FRENTE*/

/*CORPO ATRAS*/
function openBackBody(event) {
    // Obtém a classe do botão clicado
    var bodyPart = event.target.className;

    // Inicializa uma variável para armazenar uma mensagem
    var message = '';

    // Inicia uma estrutura de controle switch para lidar com diferentes classes de botões clicados
    switch (bodyPart) {
        //Casos
        case "pescoço":
            message = `
            <p><strong>Podem ser causadas por má postura, estresse, tensão muscular, lesões, hérnia de disco, artrite, entre outras condições.</strong></p>

            <div class="imgs-js">
                <img id="img-pescoco" src="img/ilustracoes/dor-pescoco.webp" alt="Alongamento do Pescoço Lateral" width="300">
            </div>
            
            <h2>Como evitar:</h2>
            <p>Manter uma postura correta, evitar carregar peso excessivo nos ombros, praticar exercícios de alongamento e fortalecimento muscular, e utilizar travesseiros adequados podem ajudar a prevenir dores no pescoço.<br>
                Além disso, é importante fazer pausas regulares durante atividades que exijam esforço do pescoço e procurar manter um ambiente de trabalho ergonomicamente correto.</p>
            
            <h1>Veja a seguir alguns alongamentos recomendados para o pescoço.</h1>
            
            <h2>Alongamento do Pescoço Lateral:</h2>
            
            <p><strong>Instruções:</strong></p>
            <ul>
                <li>Sente-se ou fique em pé com a coluna ereta.</li>
                <li>Incline suavemente a cabeça para o lado, tentando tocar a orelha no ombro, mantendo os ombros relaxados.</li>
                <li>Segure essa posição suavemente por 15-30 segundos, sentindo o alongamento na lateral do pescoço.</li>
                <li>Repita o mesmo movimento do outro lado.</li>
            </ul>
            
            <div class="imgs-js">
                <img id="img-pescoco" src="img/ilustracoes/alongamento-pescoço-lateral.jpg" alt="Alongamento do Pescoço Lateral" width="300">
            </div>
            
            <h2>Rotação do Pescoço:</h2>
            
            <p><strong>Instruções:</strong></p>
            <ul>
                <li>Sente-se ou fique em pé com a coluna ereta.</li>
                <li>Lentamente, gire a cabeça para um lado, mantendo os ombros relaxados.</li>
                <li>Segure a posição por 15-30 segundos, sentindo o alongamento suave.</li>
                <li>Volte à posição inicial e repita o movimento do outro lado.</li>
            </ul>
            
            <div class="imgs-js">
                <img id="img-pescoco" src="img/ilustracoes/rotacao-pescoco.jpg" alt="Rotação do Pescoço" width="300">
            </div>
            
            <p><strong>Veja a seguir alguns exercícios recomendados para o pescoço.</strong></p>
            
            <h2>Retração da Cabeça:</h2>
            
            <p><strong>Instruções:</strong></p>
            <ul>    
                <li>Sente-se ou fique em pé com a coluna ereta.</li>
                <li>Incline levemente o queixo em direção ao peito, mantendo os ombros relaxados.</li>
                <li>Em seguida, lentamente, puxe a cabeça para trás, como se estivesse tentando fazer um "queixo duplo".</li>
                <li>Mantenha essa posição por alguns segundos e, em seguida, retorne à posição inicial.</li>
            </ul>
            
            <div class="imgs-js">
                <img id="img-pescoco" src="img/ilustracoes/retracao-cervical.jpg" alt="Retração da Cabeça" width="300">
            </div>
            
            <h2>Flexão Lateral do Pescoço:</h2>
            
            <p><strong>Instruções:</strong></p>
            <ul>    
                <li>Sente-se ou fique em pé com a coluna ereta.</li>
                <li>Incline a cabeça para um lado, tentando levar a orelha em direção ao ombro, mantendo os ombros relaxados.</li>
                <li>Mantenha essa posição por alguns segundos, sentindo o alongamento na lateral do pescoço.</li>
                <li>Retorne à posição inicial e repita o movimento do outro lado.</li>
            </ul>
            
            <div class="imgs-js">
                <img id="img-pescoco" src="img/ilustracoes/flexao-lateral-pescoco.jpg" alt="Flexão Lateral do Pescoço" width="300">
            </div>
            
            <h2>Como aliviar a dor:</h2>
            <p>Repouso, aplicação de compressas mornas ou gelo, massagens suaves, uso de medicamentos analgésicos e anti-inflamatórios, e fisioterapia podem ser recomendados para aliviar a dor no pescoço.<br>
                É fundamental evitar movimentos bruscos que possam piorar a dor e seguir as orientações médicas para um tratamento eficaz.</p>
            
            <h2>Possíveis exames:</h2>
            <p>Em casos de dores persistentes, exames de imagem, como radiografias, ressonância magnética ou tomografia computadorizada, podem ser solicitados para auxiliar no diagnóstico das causas das dores no pescoço. Consultar um médico especialista é essencial para uma avaliação precisa e um plano de tratamento adequado.</p>
            
            `;
            break;
        case "trapezio-posterior-direito":
            message = `
            <p><strong>O trapézio pode ser sobrecarregado devido a má postura, estresse emocional, ergonomia inadequada no trabalho ou tensão muscular decorrente de atividades repetitivas.</strong></p>

            <div class="imgs-js">
                <img id="img-trap" width="350" height="200" src="img/ilustracoes/dores-no-trapezio.jpg" alt="Trapezio">
            </div>

            <h2>Como evitar:</h2>
            <p>Para prevenir dores no trapézio, é essencial manter uma boa postura, fazer pausas frequentes durante atividades que exijam esforço dessa região e praticar exercícios de alongamento e fortalecimento muscular.</p>

            <h1>Veja a seguir alguns exercícios recomendados para o trapézio.</h1>

            <h2>Orelha a ombro</h2>
            <ul>
                <li>Este exercício pode ser feito sentado ou em pé.</li>
                <li>Lentamente, leve a orelha direita em direção ao ombro direito. 
                    É natural que o seu ombro esquerdo levante um pouco enquanto você faz isso. 
                    Se acontecer, alivie a cabeça de volta para o centro para relaxar o ombro esquerdo de volta para baixo.</li>
                <li>Respire fundo enquanto mantém essa posição por cerca de 30 segundos. 
                    Depois, solte suavemente esse lado e, em seguida, faça o mesmo alongamento do lado oposto.</li>
            </ul>
            <div class="imgs-js" >
                <img id="img-pesc" width="100" height="150" src="img/ilustracoes/exerc-pesc.webp" alt="Exercicios">
            </div>
            <br>
            <h2>Postura da cobra</h2>
            <ul>
                <li>Deitado de barriga para baixo, levante a cabeça e coloque as mãos no chão ao lado dos ombros, mantendo os braços e os cotovelos rentes ao corpo.</li> 
                <li>Pressione a parte superior dos pés no chão e inspire profundamente à medida que começa a levantar a cabeça e o peito.</li> 
                <li>Empurre os ombros para trás e para baixo, mantendo as omoplatas próximas.</li> 
                <li>Segure essa posição por algumas respirações e solte em uma expiração.</li> 
            </ul>
            <div class="imgs-js">
                <img id="img-pesc2" width="350" height="150" src="img/ilustracoes/exerc-pesc-cobra.webp" alt="Exercicios">
            </div>
            <br><br>
            <h2>Como aliviar a dor:</h2>
            <p>Alguns procedimentos simples podem ajudar a aliviar a dor no trapézio. Dentre eles, estão os métodos a seguir:</p>
            <ul>
                <li>Relaxamento e repouso.</li>
                <li>Medicamentos para dor e relaxantes musculares.</li>
                <li>Aplicação de gelo e calor.</li>
                <li>Melhora da ergonomia no espaço de trabalho.</li>
            </ul>
            <h2>Possíveis exames:</h2>
            <p>Em casos de dores persistentes, é recomendável procurar um médico especialista (Ortopedista) para avaliação. Exames como ressonância magnética ou ultrassonografia podem ser solicitados para identificar possíveis lesões.</p>
            `;
            break;
        case "trapezio-posterior-esquerdo":
            message = ` 
            <p><strong>O trapézio pode ser sobrecarregado devido a má postura, estresse emocional, ergonomia inadequada no trabalho ou tensão muscular decorrente de atividades repetitivas.</strong></p>

            <div class="imgs-js">
                <img id="img-trap" width="350" height="200" src="img/ilustracoes/dores-no-trapezio.jpg" alt="Trapezio">
            </div>

            <h2>Como evitar:</h2>
            <p>Para prevenir dores no trapézio, é essencial manter uma boa postura, fazer pausas frequentes durante atividades que exijam esforço dessa região e praticar exercícios de alongamento e fortalecimento muscular.</p>

            <h1>Veja a seguir alguns exercícios recomendados para o trapézio.</h1>

            <h2>Orelha a ombro</h2>
            <ul>
                <li>Este exercício pode ser feito sentado ou em pé.</li>
                <li>Lentamente, leve a orelha direita em direção ao ombro direito. 
                    É natural que o seu ombro esquerdo levante um pouco enquanto você faz isso. 
                    Se acontecer, alivie a cabeça de volta para o centro para relaxar o ombro esquerdo de volta para baixo.</li>
                <li>Respire fundo enquanto mantém essa posição por cerca de 30 segundos. 
                    Depois, solte suavemente esse lado e, em seguida, faça o mesmo alongamento do lado oposto.</li>
            </ul>
            <div class="imgs-js">
                <img id="img-pesc" width="100" height="150" src="img/ilustracoes/exerc-pesc.webp" alt="Exercicios">
            </div>
            <br>
            <h2>Postura da cobra</h2>
            <ul>
                <li>Deitado de barriga para baixo, levante a cabeça e coloque as mãos no chão ao lado dos ombros, mantendo os braços e os cotovelos rentes ao corpo.</li> 
                <li>Pressione a parte superior dos pés no chão e inspire profundamente à medida que começa a levantar a cabeça e o peito.</li> 
                <li>Empurre os ombros para trás e para baixo, mantendo as omoplatas próximas.</li> 
                <li>Segure essa posição por algumas respirações e solte em uma expiração.</li> 
            </ul>
            <div class="imgs-js">
                <img id="img-pesc2" width="350" height="150" src="img/ilustracoes/exerc-pesc-cobra.webp" alt="Exercicios">
            </div>
            <br><br>
            <h2>Como aliviar a dor:</h2>
            <p>Alguns procedimentos simples podem ajudar a aliviar a dor no trapézio. Dentre eles, estão os métodos a seguir:</p>
            <ul>
                <li>Relaxamento e repouso.</li>
                <li>Medicamentos para dor e relaxantes musculares.</li>
                <li>Aplicação de gelo e calor.</li>
                <li>Melhora da ergonomia no espaço de trabalho.</li>
            </ul>
            <h2>Possíveis exames:</h2>
            <p>Em casos de dores persistentes, é recomendável procurar um médico especialista (Ortopedista) para avaliação. Exames como ressonância magnética ou ultrassonografia podem ser solicitados para identificar possíveis lesões.</p>
            `;
            break;
        case "ombro-posterior-direito":
            message = `
            <p><strong>As dores no ombro podem ser causadas por lesões, inflamações, tendinites, bursites, artrite, artrose, luxações, entre outras condições.</strong></p>

            <div class="imgs-js">
                <img width="350" height="300" src="img/ilustracoes/dor-ombro.webp" alt="Exercício">
            </div>

            <h2>Como evitar:</h2>
            <p>Para prevenir dores no ombro, é importante praticar exercícios de fortalecimento muscular, manter uma postura adequada, evitar sobrecarga de peso e realizar alongamentos regularmente.</p>

            <h1>Veja a seguir alguns exercícios recomendados para o ombro.</h1>

            <h2>Abdução de ombro (elevação lateral)</h2>
            <p>A abdução de ombro, também conhecida como elevação lateral, é um movimento importante para o fortalecimento da musculatura.</p>
            <ol>
                <li>Fique de pé, com a coluna lombar bem encaixada e o abdômen contraído, você deve abrir e fechar os braços, acompanhando a linha lateral do corpo. A palma da mão deve ser mantida pra baixo durante o movimento.</li>
                <li>Neste exercício, é preciso ter atenção para não ultrapassar a altura da linha do ombro. Esse é o limite para a realização do movimento. Você deve fazer três séries de dez repetições com cada braço.</li>
            </ol>
            <div class="imgs-js">
                <img width="350" height="300" src="img/ilustracoes/elevacao-lateral.webp" alt="Exercício">
            </div>

            <h2>Elevação (frontal)</h2>
            <ol>
                <li>Em pé, com os pés paralelos e afastados na largura do quadril, segure os halteres com as palmas das mãos voltadas para baixo (pegada pronada). Deixe os joelhos levemente flexionados, os braços à frente do corpo e estendidos para baixo, na linha da articulação dos ombros. Mantenha as escápulas contraídas (fechadas).</li>
                <li>Eleve os dois braços até à altura dos ombros e abaixe-os em um movimento contínuo, sem pausa, sempre mantendo o core ativado durante a execução. Lembre-se de colocar a força nos ombros, não nos braços.</li>
            </ol>
            <div class="imgs-js">
                <img width="350" height="300" src="img/ilustracoes/elevacao-frontal.gif" alt="Exercício">
            </div>

            <h1>Veja a seguir Alongamentos mais recomendados</h1>

            <h2>Alongamento de Ombro e tríceps</h2>
            <p>O alongamento no estilo tríceps francês é simples e pode ser executado para auxiliar no alongamento do ombro e do tríceps também. Evite excessos como apoiar na parede para conseguir mais peso e maior extensão.</p>
            <div class="imgs-js">
                <img width="300" height="300" src="img/ilustracoes/alongamento-triceps-ombro.jpg" alt="Alongamento">
            </div>

            <h2>Alongamento na parede</h2>
            <p>Para começar, coloque as duas mãos na parede e forme um ângulo de 90º com o corpo;<br>
                Em seguida, leve os pés para trás até que os braços estejam retos.<br>
                Então, incline os quadris, dobrando o corpo para a frente. Mantenha as escápulas para trás e evite comprimir os ombros ao redor do pescoço.</p>
            <div class="imgs-js">
                <img width="300" height="300" src="img/ilustracoes/mãos-na-parede.webp" alt="Alongamento">
            </div>

            <h2>Como aliviar a dor:</h2>
            <p>Repouso, aplicação de gelo, fisioterapia, medicamentos anti-inflamatórios e, em casos mais graves, procedimentos cirúrgicos podem ser necessários para aliviar a dor no ombro.</p>

            <h2>Possíveis exames:</h2>
            <p>O diagnóstico das causas das dores no ombro pode envolver exames de imagem, como radiografias, ressonância magnética e ultrassonografia, além da avaliação clínica por um ortopedista.</p>
            `;
            break;
        case "ombro-posterior-esquerdo":
            message = `
            <p><strong>As dores no ombro podem ser causadas por lesões, inflamações, tendinites, bursites, artrite, artrose, luxações, entre outras condições.</strong></p>

            <div class="imgs-js">
                <img width="350" height="300" src="img/ilustracoes/dor-ombro.webp" alt="Exercício">
            </div>

            <h2>Como evitar:</h2>
            <p>Para prevenir dores no ombro, é importante praticar exercícios de fortalecimento muscular, manter uma postura adequada, evitar sobrecarga de peso e realizar alongamentos regularmente.</p>

            <h1>Veja a seguir alguns exercícios recomendados para o ombro.</h1>

            <h2>Abdução de ombro (elevação lateral)</h2>
            <p>A abdução de ombro, também conhecida como elevação lateral, é um movimento importante para o fortalecimento da musculatura.</p>
            <ol>
                <li>Fique de pé, com a coluna lombar bem encaixada e o abdômen contraído, você deve abrir e fechar os braços, acompanhando a linha lateral do corpo. A palma da mão deve ser mantida pra baixo durante o movimento.</li>
                <li>Neste exercício, é preciso ter atenção para não ultrapassar a altura da linha do ombro. Esse é o limite para a realização do movimento. Você deve fazer três séries de dez repetições com cada braço.</li>
            </ol>
            <div class="imgs-js">
                <img width="350" height="300" src="img/ilustracoes/elevacao-lateral.webp" alt="Exercício">
            </div>

            <h2>Elevação (frontal)</h2>
            <ol>
                <li>Em pé, com os pés paralelos e afastados na largura do quadril, segure os halteres com as palmas das mãos voltadas para baixo (pegada pronada). Deixe os joelhos levemente flexionados, os braços à frente do corpo e estendidos para baixo, na linha da articulação dos ombros. Mantenha as escápulas contraídas (fechadas).</li>
                <li>Eleve os dois braços até à altura dos ombros e abaixe-os em um movimento contínuo, sem pausa, sempre mantendo o core ativado durante a execução. Lembre-se de colocar a força nos ombros, não nos braços.</li>
            </ol>
            <div class="imgs-js">
                <img width="350" height="300" src="img/ilustracoes/elevacao-frontal.gif" alt="Exercício">
            </div>

            <h1>Veja a seguir Alongamentos mais recomendados</h1>

            <h2>Alongamento de Ombro e tríceps</h2>
            <p>O alongamento no estilo tríceps francês é simples e pode ser executado para auxiliar no alongamento do ombro e do tríceps também. Evite excessos como apoiar na parede para conseguir mais peso e maior extensão.</p>
            <div class="imgs-js">
                <img width="300" height="300" src="img/ilustracoes/alongamento-triceps-ombro.jpg" alt="Alongamento">
            </div>

            <h2>Alongamento na parede</h2>
            <p>Para começar, coloque as duas mãos na parede e forme um ângulo de 90º com o corpo;<br>
                Em seguida, leve os pés para trás até que os braços estejam retos.<br>
                Então, incline os quadris, dobrando o corpo para a frente. Mantenha as escápulas para trás e evite comprimir os ombros ao redor do pescoço.</p>
            <div class="imgs-js">
                <img width="300" height="300" src="img/ilustracoes/mãos-na-parede.webp" alt="Alongamento">
            </div>

            <h2>Como aliviar a dor:</h2>
            <p>Repouso, aplicação de gelo, fisioterapia, medicamentos anti-inflamatórios e, em casos mais graves, procedimentos cirúrgicos podem ser necessários para aliviar a dor no ombro.</p>

            <h2>Possíveis exames:</h2>
            <p>O diagnóstico das causas das dores no ombro pode envolver exames de imagem, como radiografias, ressonância magnética e ultrassonografia, além da avaliação clínica por um ortopedista.</p>
            `;
            break;
        case "cotovelo-direito.":
            message = `
            <p><strong>As dores no cotovelo podem ser causadas por lesões por esforço repetitivo, como a epicondilite lateral (cotovelo de tenista) e a epicondilite medial (cotovelo de golfista), bursites, artrite, entre outras condições.</strong></p>
            <div class="imgs-js">
            <img id="img-coluna" width="350" height="250" src="img/ilustracoes/dor-cotovelo.webp" alt="Dores no Cotovelo">
            </div>
            <h2>Como evitar:</h2>
            <p>Para prevenir dores no cotovelo, é importante praticar atividades físicas com técnicas adequadas, evitar movimentos repetitivos que sobrecarreguem o cotovelo, e realizar alongamentos antes e após a prática esportiva.</p>
            
            <h1>Veja a seguir alguns exercícios recomendados para o cotovelo:</h1>
            
            <h2>Extensão de punho com halteres:</h2>
            <ul>
              <li>Segure um halter com a palma da mão voltada para baixo. Mantenha o braço estendido e levante o peso flexionando o punho em direção ao teto.</li>
              <li>Faça três séries de dez repetições.</li>
            </ul>
            <div class="imgs-js">
            <img width="250" height="250" src="img/ilustracoes/extensao-punho.jpg" alt="Extensão de Punho com Halteres">
            </div>
            <h2>Flexão de cotovelo com halteres:</h2>
            <ul>
              <li>Segure um halter com a palma da mão voltada para cima.</li>
              <li>Mantenha o braço estendido ao lado do corpo e dobre o cotovelo levando o peso em direção ao ombro.</li>
              <li>Faça três séries de dez repetições com cada braço.</li>
            </ul>
            <div class="imgs-js">
            <img width="250" height="250" src="img/ilustracoes/flexao-cotovelo-halteres.jpg" alt="Flexão de Cotovelo com Halteres">
            </div>
            <h2>Como aliviar a dor:</h2>
            <p>Repouso, aplicação de gelo, uso de órteses, fisioterapia e, em casos mais graves, cirurgia, podem ser necessários para aliviar a dor no cotovelo.</p>
            
            <h2>Possíveis exames:</h2>
            <p>O diagnóstico das causas das dores no cotovelo pode envolver exames de imagem, como radiografias, ressonância magnética e ultrassonografia, além da avaliação clínica por um ortopedista ou fisioterapeuta.</p>
            `;
            break;
        case "cotovelo-esquerdo.":
            message = `
            <p><strong>As dores no cotovelo podem ser causadas por lesões por esforço repetitivo, como a epicondilite lateral (cotovelo de tenista) e a epicondilite medial (cotovelo de golfista), bursites, artrite, entre outras condições.</strong></p>
            <div class="imgs-js">
            <img id="img-coluna" width="350" height="250" src="img/ilustracoes/dor-cotovelo.webp" alt="Dores no Cotovelo">
            </div>
            <h2>Como evitar:</h2>
            <p>Para prevenir dores no cotovelo, é importante praticar atividades físicas com técnicas adequadas, evitar movimentos repetitivos que sobrecarreguem o cotovelo, e realizar alongamentos antes e após a prática esportiva.</p>
            
            <h1>Veja a seguir alguns exercícios recomendados para o cotovelo:</h1>
            
            <h2>Extensão de punho com halteres:</h2>
            <ul>
              <li>Segure um halter com a palma da mão voltada para baixo. Mantenha o braço estendido e levante o peso flexionando o punho em direção ao teto.</li>
              <li>Faça três séries de dez repetições.</li>
            </ul>
            <div class="imgs-js">
            <img width="250" height="250" src="img/ilustracoes/extensao-punho.jpg" alt="Extensão de Punho com Halteres">
            </div>
            <h2>Flexão de cotovelo com halteres:</h2>
            <ul>
              <li>Segure um halter com a palma da mão voltada para cima.</li>
              <li>Mantenha o braço estendido ao lado do corpo e dobre o cotovelo levando o peso em direção ao ombro.</li>
              <li>Faça três séries de dez repetições com cada braço.</li>
            </ul>
            <div class="imgs-js">
            <img width="250" height="250" src="img/ilustracoes/flexao-cotovelo-halteres.jpg" alt="Flexão de Cotovelo com Halteres">
            </div>
            <h2>Como aliviar a dor:</h2>
            <p>Repouso, aplicação de gelo, uso de órteses, fisioterapia e, em casos mais graves, cirurgia, podem ser necessários para aliviar a dor no cotovelo.</p>
            
            <h2>Possíveis exames:</h2>
            <p>O diagnóstico das causas das dores no cotovelo pode envolver exames de imagem, como radiografias, ressonância magnética e ultrassonografia, além da avaliação clínica por um ortopedista ou fisioterapeuta.</p>
            `;
            break;
        case "mao-direita.":
            message = `<p><strong>As dores nas mãos podem ser causadas por lesões, como a síndrome do túnel do carpo, artrite, tendinite, bursite, entre outras condições.</strong></p>

            <div class="imgs-js">
                <img width="350" height="300" src="img/ilustracoes/dor-mao.jpeg" alt="Dores nas Mãos">
            </div>
            
            <h2>Como evitar:</h2>
            <p>Para prevenir dores nas mãos, é importante praticar exercícios de fortalecimento e alongamento, manter uma postura correta durante as atividades que envolvam as mãos, e fazer pausas frequentes para descanso.</p>
            
            <h1>Veja a seguir alguns exercícios recomendados para as mãos:</h1>
            
            <h2>Alongamento dos dedos:</h2>
            <ul>
                <li>Estenda os dedos e mantenha-os nessa posição por alguns segundos.</li>
                <li>Depois, feche a mão e faça um punho firme.</li>
                <li>Repita o movimento algumas vezes.</li>
            </ul>
            
            <div class="imgs-js">
                <img id="img-trap" width="250" height="200" src="img/ilustracoes/alongamento-dedos.jpg" alt="Alongamento dos Dedos">
            </div>
            
            <h2>Aperto de bola de borracha:</h2>
            <ul>
                <li>Segure uma bola de borracha ou similar e aperte-a firmemente por alguns segundos.</li>
                <li>Solte e repita o movimento várias vezes.</li>
            </ul>
            
            <div class="imgs-js">
                <img id="img-trap" width="250" height="200" src="img/ilustracoes/apertar-bola.jpg" alt="Aperto de Bola de Borracha">
            </div>
            
            <h2>Como aliviar a dor:</h2>
            <p>Repouso, aplicação de gelo, uso de órteses, fisioterapia, e em casos mais graves, cirurgia, podem ser necessários para aliviar a dor nas mãos.</p>
            
            <h2>Possíveis exames:</h2>
            <p>O diagnóstico das causas das dores nas mãos pode envolver exames de imagem, como radiografias, ultrassonografia e ressonância magnética, além da avaliação clínica por um ortopedista ou reumatologista.</p>
            `;
            break;
        case "mao-esquerda.":
            message = `
            <p><strong>As dores nas mãos podem ser causadas por lesões, como a síndrome do túnel do carpo, artrite, tendinite, bursite, entre outras condições.</strong></p>

            <div class="imgs-js">
                <img width="350" height="300" src="img/ilustracoes/dor-mao.jpeg" alt="Dores nas Mãos">
            </div>
            
            <h2>Como evitar:</h2>
            <p>Para prevenir dores nas mãos, é importante praticar exercícios de fortalecimento e alongamento, manter uma postura correta durante as atividades que envolvam as mãos, e fazer pausas frequentes para descanso.</p>
            
            <h1>Veja a seguir alguns exercícios recomendados para as mãos:</h1>
            
            <h2>Alongamento dos dedos:</h2>
            <ul>
                <li>Estenda os dedos e mantenha-os nessa posição por alguns segundos.</li>
                <li>Depois, feche a mão e faça um punho firme.</li>
                <li>Repita o movimento algumas vezes.</li>
            </ul>
            
            <div class="imgs-js">
                <img id="img-trap" width="250" height="200" src="img/ilustracoes/alongamento-dedos.jpg" alt="Alongamento dos Dedos">
            </div>
            
            <h2>Aperto de bola de borracha:</h2>
            <ul>
                <li>Segure uma bola de borracha ou similar e aperte-a firmemente por alguns segundos.</li>
                <li>Solte e repita o movimento várias vezes.</li>
            </ul>
            
            <div class="imgs-js">
                <img id="img-trap" width="250" height="200" src="img/ilustracoes/apertar-bola.jpg" alt="Aperto de Bola de Borracha">
            </div>
            
            <h2>Como aliviar a dor:</h2>
            <p>Repouso, aplicação de gelo, uso de órteses, fisioterapia, e em casos mais graves, cirurgia, podem ser necessários para aliviar a dor nas mãos.</p>
            
            <h2>Possíveis exames:</h2>
            <p>O diagnóstico das causas das dores nas mãos pode envolver exames de imagem, como radiografias, ultrassonografia e ressonância magnética, além da avaliação clínica por um ortopedista ou reumatologista.</p>
            `;
            break;
        case "coluna":
            message = `
            <p><strong>As dores na coluna podem ser causadas por má postura, lesões, hérnias de disco, degeneração dos discos intervertebrais, osteoporose, espondilite anquilosante, entre outras condições.</strong></p>

            <div class="imgs-js">
                <img id="img-coluna" src="img/ilustracoes/dor-meio-coluna.webp" alt="Dor no meio da coluna" width="300">
            </div>

            <h2>Como evitar:</h2>
            <p>Para prevenir dores na coluna, é importante manter uma postura correta, praticar exercícios de fortalecimento muscular, evitar carregar peso excessivo, e utilizar móveis ergonômicos.</p>

            <h1>Veja a seguir alguns exercícios recomendados para a coluna:</h1>

            <h2>Alongamento da coluna vertebral:</h2>
            <ul>
                <li>Deite-se de costas no chão, dobre os joelhos e mantenha os pés apoiados no chão.</li>
                <li>Lentamente, puxe os joelhos em direção ao peito, mantendo a parte inferior das costas no chão.</li>
                <li>Segure por alguns segundos e depois solte.</li>
            </ul>
            <div class="imgs-js">
                <img src="img/ilustracoes/alongamento-coluna.jpg" alt="Alongamento da coluna" width="300">
            </div>

            <h2>Flexão de coluna:</h2>
            <ul>
                <li>Fique em pé com os pés afastados na largura dos ombros.</li>
                <li>Lentamente, incline-se para a frente, mantendo as costas retas.</li>
                <li>Desça o tronco o máximo que puder, mantendo os joelhos levemente flexionados.</li>
                <li>Volte à posição inicial.</li>
            </ul>
            <div class="imgs-js">
                <img src="img/ilustracoes/flexão-coluna.jpg" alt="flexão de coluna" width="300">
            </div>

            <h2>Torção da coluna:</h2>
            <ul>
                <li>Sentado no chão, com as pernas estendidas à sua frente, dobre a perna direita e coloque o pé direito no lado externo do joelho esquerdo.</li>
                <li>Gire o tronco para a direita e segure o joelho direito com a mão esquerda, mantendo a mão direita atrás de você para apoio.</li>
                <li>Segure por alguns segundos e repita no outro lado.</li>
            </ul>
            <div class="imgs-js">
                <img id="img-coluna" src="img/ilustracoes/torcao-coluna.jpg" alt="torção de coluna" width="300">
            </div>

            <h2>Como aliviar a dor:</h2>
            <p>Repouso, aplicação de calor ou gelo, fisioterapia, uso de medicamentos analgésicos e anti-inflamatórios, e em casos mais graves, cirurgia, podem ser necessários para aliviar a dor na coluna.</p>

            <h2>Possíveis exames:</h2>
            <p>O diagnóstico das causas das dores na coluna pode envolver exames de imagem, como radiografias, ressonância magnética e tomografia computadorizada, além da avaliação clínica por um ortopedista ou fisiatra.</p>
            `;
            break;
        case "lombar":
            message = `
            <p><strong>As dores lombares podem ser causadas por má postura, lesões musculares, hérnia de disco, estenose espinhal, osteoartrite, entre outras condições.</strong></p>

            <div class="imgs-js">
                <img id="img-coluna" width="350" height="250" src="img/ilustracoes/dor-lombar.png" alt="Dores Lombares">
            </div>
            
            <h2>Como evitar:</h2>
            <p>Para prevenir dores na região lombar, é importante manter uma postura correta, praticar exercícios de fortalecimento da musculatura abdominal e lombar, evitar carregar peso excessivo e fazer pausas durante atividades que exijam esforço físico.</p>
            
            <h1>Veja a seguir alguns exercícios recomendados para a lombar:</h1>
            
            <h2>Prancha abdominal:</h2>
            <ul>
                <li>Deite-se de barriga para baixo, com os antebraços apoiados no chão e os cotovelos alinhados com os ombros.</li>
                <li>Levante o corpo, apoiando-se nos antebraços e nos dedos dos pés, mantendo o corpo reto.</li>
                <li>Segure a posição por alguns segundos e depois desça lentamente.</li>
                <li>Faça três séries de dez repetições.</li>
            </ul>
            <div class="imgs-js">
                <img id="img-coluna" width="350" height="250" src="img/ilustracoes/prancha-abdominal.webp" alt="Prancha Abdominal">
            </div>
            
            <h2>Elevação pélvica:</h2>
            <ul>
                <li>Deite-se de costas no chão, com os joelhos flexionados e os pés apoiados no chão.</li>
                <li>Levante a pelve em direção ao teto, contraindo os glúteos, e depois abaixe lentamente.</li>
                <li>Faça três séries de dez repetições.</li>
            </ul>
            <div class="imgs-js">
                <img id="img-coluna" width="350" height="250" src="img/ilustracoes/elevacao-pelvica.gif" alt="Elevação Pélvica">
            </div>
            
            <h2>Como aliviar a dor:</h2>
            <p>Repouso, aplicação de calor ou gelo, uso de medicamentos analgésicos e anti-inflamatórios, fisioterapia e massagem podem ser necessários para aliviar a dor na região lombar.</p>
            
            <h2>Possíveis exames:</h2>
            <p>O diagnóstico das causas das dores lombares pode envolver exames de imagem, como radiografias, ressonância magnética e tomografia computadorizada, além da avaliação clínica por um ortopedista.</p>
            `;
            break;
        case "quadril-posterior-direito":
            message = `
            <p><strong>As dores no quadril podem ser causadas por lesões, como a bursite trocantérica, tendinite do iliopsoas, osteoartrite, impacto femoroacetabular, entre outras condições.</strong></p>

            <div class="imgs-js">
                <img id="img-coluna" width="350" height="250" src="img/ilustracoes/dor-quadril.webp" alt="Dores no Quadril">
            </div>
            
            <h2>Como evitar:</h2>
            <p>Para prevenir dores no quadril, é importante manter um peso saudável, praticar atividades físicas regulares para fortalecer a musculatura, evitar atividades de alto impacto, e alongar os músculos do quadril regularmente.</p>
            
            <h1>Veja a seguir alguns exercícios recomendados para o quadril:</h1>
            
            <h2>Alongamento flexor de quadril:</h2>
            <p>Para fazer esse alongamento, você precisará se deitar de costas e dobrar os joelhos, mantendo os pés apoiados no chão. Depois que estiver nessa posição e sentir os quadris bem alinhados, siga os passos abaixo.</p>
            <ul>
                <li>Estique a perna esquerda e mantenha apenas a direita dobrada.</li>
                <li>Segure o seu joelho da perna dobrada (direita), sem forçá-lo, com a mão oposta (esquerda).</li>
                <li>Devagar, puxe o joelho para a esquerda na direção da perna que está esticada e sem dobrá-la. Tente não tirar os quadris do chão.</li>
                <li>Encontre uma posição confortável, sempre aproximando o joelho que está sendo puxado da perna que está esticada. Permaneça na posição por 30 segundos.</li>
                <li>Repita do outro lado.</li>
            </ul>
            <div class="imgs-js">
                <img id="img-coluna" width="350" height="250" src="img/ilustracoes/alongamento-flexor-quadril.jpg" alt="Alongamento do Quadril">
            </div>
            <p>Faça o mesmo movimento com a perna esquerda e com a direita pelo menos três vezes, alternadas.</p>
            
            <h2>Abdução de quadril:</h2>
            <p>Outro alongamento feito com o corpo deitado, mas, dessa vez, virado de lado. As pernas começam esticadas e apenas uma delas vai dobrar.</p>
            <ul>
                <li>Dobre o joelho do lado que está virado para o chão, enquanto mantém a outra perna esticada.</li>
                <li>Apoie o cotovelo do braço que está mais perto do chão e utilize a mão desse mesmo braço para segurar a cabeça, mantendo o pescoço firme.</li>
                <li>A outra mão ficará apoiada no chão, à frente do seu corpo, com o cotovelo fazendo um ângulo de 45°.</li>
                <li>O joelho do lado virado para o chão permanecerá dobrado enquanto você, aos poucos, levanta a outra perna (esticada) na direção do teto.</li>
                <li>Depois de levantar a perna o máximo que puder, mantenha-a esticada e alta por pelo menos 30 segundos.</li>
                <li>Troque de lado e repita o processo pelo menos três vez</li>
            </ul>
            <div class="imgs-js">
                <img id="img-coluna" width="350" height="250" src="img/ilustracoes/abducao-quadril.jpg" alt="Abdução de Quadril com Elástico">
            </div>
            
            <h2>Como aliviar a dor:</h2>
            <p>Repouso, aplicação de gelo, uso de anti-inflamatórios, fisioterapia, e em casos mais graves, cirurgia, podem ser necessários para aliviar a dor no quadril.</p>
            
            <h2>Possíveis exames:</h2>
            <p>O diagnóstico das causas das dores no quadril pode envolver exames de imagem, como radiografias, ressonância magnética e tomografia computadorizada, além da avaliação clínica por um ortopedista ou fisioterapeuta.</p>
                `;
        case "quadril-posterior-esquerdo":
            message = `<p><strong>As dores no quadril podem ser causadas por lesões, como a bursite trocantérica, tendinite do iliopsoas, osteoartrite, impacto femoroacetabular, entre outras condições.</strong></p>

            <div class="imgs-js">
                <img id="img-coluna" width="350" height="250" src="img/ilustracoes/dor-quadril.webp" alt="Dores no Quadril">
            </div>
            
            <h2>Como evitar:</h2>
            <p>Para prevenir dores no quadril, é importante manter um peso saudável, praticar atividades físicas regulares para fortalecer a musculatura, evitar atividades de alto impacto, e alongar os músculos do quadril regularmente.</p>
            
            <h1>Veja a seguir alguns exercícios recomendados para o quadril:</h1>
            
            <h2>Alongamento flexor de quadril:</h2>
            <p>Para fazer esse alongamento, você precisará se deitar de costas e dobrar os joelhos, mantendo os pés apoiados no chão. Depois que estiver nessa posição e sentir os quadris bem alinhados, siga os passos abaixo.</p>
            <ul>
                <li>Estique a perna esquerda e mantenha apenas a direita dobrada.</li>
                <li>Segure o seu joelho da perna dobrada (direita), sem forçá-lo, com a mão oposta (esquerda).</li>
                <li>Devagar, puxe o joelho para a esquerda na direção da perna que está esticada e sem dobrá-la. Tente não tirar os quadris do chão.</li>
                <li>Encontre uma posição confortável, sempre aproximando o joelho que está sendo puxado da perna que está esticada. Permaneça na posição por 30 segundos.</li>
                <li>Repita do outro lado.</li>
            </ul>
            <div class="imgs-js">
                <img id="img-coluna" width="350" height="250" src="img/ilustracoes/alongamento-flexor-quadril.jpg" alt="Alongamento do Quadril">
            </div>
            <p>Faça o mesmo movimento com a perna esquerda e com a direita pelo menos três vezes, alternadas.</p>
            
            <h2>Abdução de quadril:</h2>
            <p>Outro alongamento feito com o corpo deitado, mas, dessa vez, virado de lado. As pernas começam esticadas e apenas uma delas vai dobrar.</p>
            <ul>
                <li>Dobre o joelho do lado que está virado para o chão, enquanto mantém a outra perna esticada.</li>
                <li>Apoie o cotovelo do braço que está mais perto do chão e utilize a mão desse mesmo braço para segurar a cabeça, mantendo o pescoço firme.</li>
                <li>A outra mão ficará apoiada no chão, à frente do seu corpo, com o cotovelo fazendo um ângulo de 45°.</li>
                <li>O joelho do lado virado para o chão permanecerá dobrado enquanto você, aos poucos, levanta a outra perna (esticada) na direção do teto.</li>
                <li>Depois de levantar a perna o máximo que puder, mantenha-a esticada e alta por pelo menos 30 segundos.</li>
                <li>Troque de lado e repita o processo pelo menos três vez</li>
            </ul>
            <div class="imgs-js">
                <img id="img-coluna" width="350" height="250" src="img/ilustracoes/abducao-quadril.jpg" alt="Abdução de Quadril com Elástico">
            </div>
            
            <h2>Como aliviar a dor:</h2>
            <p>Repouso, aplicação de gelo, uso de anti-inflamatórios, fisioterapia, e em casos mais graves, cirurgia, podem ser necessários para aliviar a dor no quadril.</p>
            
            <h2>Possíveis exames:</h2>
            <p>O diagnóstico das causas das dores no quadril pode envolver exames de imagem, como radiografias, ressonância magnética e tomografia computadorizada, além da avaliação clínica por um ortopedista ou fisioterapeuta.</p>
            `;
            break;
        case "joelho-posterior-direito":
            message = `
            <p><strong>As dores atrás do joelho podem ser causadas por lesões, como entorses, distensões, lesões meniscais, tendinites, bursites, artrite, entre outras condições.</strong></p>

            <div class="imgs-js">
                <img id="img-coluna" width="350" height="250" src="img/ilustracoes/dor-atras-joelho.jpg" alt="Dores atrás do Joelho">
            </div>
            
            <h2>Como evitar:</h2>
            <p>Para prevenir dores atrás do joelho, é importante praticar atividades físicas com técnicas adequadas, fortalecer a musculatura das pernas, evitar sobrecarga de peso e usar calçados adequados.</p>
            
            <h1>Veja a seguir alguns exercícios recomendados para fortalecer a região posterior da coxa e aliviar a dor atrás do joelho:</h1>
            
            <h2>Elevação de perna estendida:</h2>
            <ul>
                <li>Deite-se de costas no chão, com uma perna estendida e a outra flexionada.</li>
                <li>Levante a perna estendida em direção ao teto, mantendo-a reta, e depois abaixe-a lentamente.</li>
                <li>Faça três séries de dez repetições com cada perna.</li>
            </ul>
            <div class="imgs-js">
                <img id="img-coluna" width="350" height="250" src="img/ilustracoes/elevacao-perna.jpg" alt="Elevação de Perna Estendida">
            </div>
            
            <h2>Flexão de quadril com perna estendida:</h2>
            <ul>
                <li>Deite-se de barriga para cima, com as pernas estendidas.</li>
                <li>Dobre uma perna em direção ao peito, segurando-a com as mãos.</li>
                <li>Mantenha a outra perna estendida no chão.</li>
                <li>Segure por alguns segundos e retorne à posição inicial.</li>
                <li>Repita o movimento alternando as pernas.</li>
            </ul>
            <div class="imgs-js">
                <img id="img-coluna" width="350" height="200" src="img/ilustracoes/flexao-quadril.jpg" alt="Flexão de Quadril com Perna Estendida">
            </div>
            
            <h2>Como aliviar a dor:</h2>
            <p>Repouso, aplicação de gelo, uso de joelheira ou órtese, fisioterapia e, em casos mais graves, cirurgia, podem ser necessários para aliviar a dor atrás do joelho.</p>
            
            <h2>Possíveis exames:</h2>
            <p>O diagnóstico das causas das dores atrás do joelho pode envolver exames de imagem, como radiografias, ressonância magnética e ultrassonografia, além da avaliação clínica por um ortopedista.</p>
            `;
            break;
        case "joelho-posterior-esquerdo":
            message = `<p><strong>As dores atrás do joelho podem ser causadas por lesões, como entorses, distensões, lesões meniscais, tendinites, bursites, artrite, entre outras condições.</strong></p>

            <div class="imgs-js">
                <img id="img-coluna" width="350" height="250" src="img/ilustracoes/dor-atras-joelho.jpg" alt="Dores atrás do Joelho">
            </div>
            
            <h2>Como evitar:</h2>
            <p>Para prevenir dores atrás do joelho, é importante praticar atividades físicas com técnicas adequadas, fortalecer a musculatura das pernas, evitar sobrecarga de peso e usar calçados adequados.</p>
            
            <h1>Veja a seguir alguns exercícios recomendados para fortalecer a região posterior da coxa e aliviar a dor atrás do joelho:</h1>
            
            <h2>Elevação de perna estendida:</h2>
            <ul>
                <li>Deite-se de costas no chão, com uma perna estendida e a outra flexionada.</li>
                <li>Levante a perna estendida em direção ao teto, mantendo-a reta, e depois abaixe-a lentamente.</li>
                <li>Faça três séries de dez repetições com cada perna.</li>
            </ul>
            <div class="imgs-js">
                <img id="img-coluna" width="350" height="250" src="img/ilustracoes/elevacao-perna.jpg" alt="Elevação de Perna Estendida">
            </div>
            
            <h2>Flexão de quadril com perna estendida:</h2>
            <ul>
                <li>Deite-se de barriga para cima, com as pernas estendidas.</li>
                <li>Dobre uma perna em direção ao peito, segurando-a com as mãos.</li>
                <li>Mantenha a outra perna estendida no chão.</li>
                <li>Segure por alguns segundos e retorne à posição inicial.</li>
                <li>Repita o movimento alternando as pernas.</li>
            </ul>
            <div class="imgs-js">
                <img id="img-coluna" width="350" height="200" src="img/ilustracoes/flexao-quadril.jpg" alt="Flexão de Quadril com Perna Estendida">
            </div>
            
            <h2>Como aliviar a dor:</h2>
            <p>Repouso, aplicação de gelo, uso de joelheira ou órtese, fisioterapia e, em casos mais graves, cirurgia, podem ser necessários para aliviar a dor atrás do joelho.</p>
            
            <h2>Possíveis exames:</h2>
            <p>O diagnóstico das causas das dores atrás do joelho pode envolver exames de imagem, como radiografias, ressonância magnética e ultrassonografia, além da avaliação clínica por um ortopedista.</p>
            `;
            break;
        case "tornozelo-posterior-direito":
            message = `<p><strong>As dores no tornozelo podem ser causadas por entorses, fraturas, tendinites, artrite, bursite, lesões ligamentares, entre outras condições.</strong></p>

            <div class="imgs-js">
                <img id="img-coluna" width="350" height="300" src="img/ilustracoes/dor-tornozelo.jpg" alt="Dores no Tornozelo">
            </div>
            
            <h2>Como evitar:</h2>
            <p>Para prevenir dores no tornozelo, é importante fortalecer os músculos da perna e do tornozelo, usar calçados adequados, evitar superfícies irregulares e praticar atividades físicas com técnicas adequadas.</p>
            
            <h1>Veja a seguir alguns exercícios recomendados para o tornozelo:</h1>
            
            <h2>Rotação de tornozelo:</h2>
            <ul>
                <li>Sente-se em uma cadeira com os pés apoiados no chão.</li>
                <li>Lentamente, gire o tornozelo em círculos, primeiro no sentido horário e depois no sentido anti-horário.</li>
                <li>Repita o movimento várias vezes com cada pé.</li>
            </ul>
            <div class="imgs-js">
                <img id="img-coluna" width="350" height="300" src="img/ilustracoes/rotacao-tornozelo.jpg" alt="Rotação de Tornozelo">
            </div>
            
            <h2>Flexão plantar e dorsal:</h2>
            <ul>
                <li>Sente-se em uma cadeira com os pés apoiados no chão.</li>
                <li>Levante os dedos dos pés em direção ao teto, fazendo uma flexão plantar, e depois abaixe-os, fazendo uma flexão dorsal.</li>
                <li>Faça três séries de dez repetições com cada pé.</li>
            </ul>
            <div class="imgs-js">
                <img id="img-coluna" width="350" height="300" src="img/ilustracoes/flexao-tornozelo.png" alt="Flexão Plantar e Dorsal">
            </div>
            
            <h2>Como aliviar a dor:</h2>
            <p>Repouso, aplicação de gelo, elevação do tornozelo, uso de tornozeleira ou órtese, fisioterapia, e em casos mais graves, cirurgia, podem ser necessários para aliviar a dor no tornozelo.</p>
            
            <h2>Possíveis exames:</h2>
            <p>O diagnóstico das causas das dores no tornozelo pode envolver exames de imagem, como radiografias, ressonância magnética e ultrassonografia, além da avaliação clínica por um ortopedista.</p>
            `;
            break;
        case "tornozelo-posterior-esquerdo":
            message = `<p><strong>As dores no tornozelo podem ser causadas por entorses, fraturas, tendinites, artrite, bursite, lesões ligamentares, entre outras condições.</strong></p>

            <div class="imgs-js">
                <img id="img-coluna" width="350" height="300" src="img/ilustracoes/dor-tornozelo.jpg" alt="Dores no Tornozelo">
            </div>
            
            <h2>Como evitar:</h2>
            <p>Para prevenir dores no tornozelo, é importante fortalecer os músculos da perna e do tornozelo, usar calçados adequados, evitar superfícies irregulares e praticar atividades físicas com técnicas adequadas.</p>
            
            <h1>Veja a seguir alguns exercícios recomendados para o tornozelo:</h1>
            
            <h2>Rotação de tornozelo:</h2>
            <ul>
                <li>Sente-se em uma cadeira com os pés apoiados no chão.</li>
                <li>Lentamente, gire o tornozelo em círculos, primeiro no sentido horário e depois no sentido anti-horário.</li>
                <li>Repita o movimento várias vezes com cada pé.</li>
            </ul>
            <div class="imgs-js">
                <img id="img-coluna" width="350" height="300" src="img/ilustracoes/rotacao-tornozelo.jpg" alt="Rotação de Tornozelo">
            </div>
            
            <h2>Flexão plantar e dorsal:</h2>
            <ul>
                <li>Sente-se em uma cadeira com os pés apoiados no chão.</li>
                <li>Levante os dedos dos pés em direção ao teto, fazendo uma flexão plantar, e depois abaixe-os, fazendo uma flexão dorsal.</li>
                <li>Faça três séries de dez repetições com cada pé.</li>
            </ul>
            <div class="imgs-js">
                <img id="img-coluna" width="350" height="300" src="img/ilustracoes/flexao-tornozelo.png" alt="Flexão Plantar e Dorsal">
            </div>
            
            <h2>Como aliviar a dor:</h2>
            <p>Repouso, aplicação de gelo, elevação do tornozelo, uso de tornozeleira ou órtese, fisioterapia, e em casos mais graves, cirurgia, podem ser necessários para aliviar a dor no tornozelo.</p>
            
            <h2>Possíveis exames:</h2>
            <p>O diagnóstico das causas das dores no tornozelo pode envolver exames de imagem, como radiografias, ressonância magnética e ultrassonografia, além da avaliação clínica por um ortopedista.</p>
            `;
            break;
        default:
            // Lógica caso a classe não seja reconhecida
            message = "informação não encontrada";
    }
    // Obtém todos os elementos HTML com a classe "result-body-back"
    var containers = document.getElementsByClassName("result-body-back");

    // Itera sobre cada container encontrado
    for (var i = 0; i < containers.length; i++) {
        // Obtém o container atual
        var container = containers[i];

        // Define a mensagem no parágrafo dentro do container
        var paragraph = container.querySelector("p");
        paragraph.innerHTML = "<strong>Possíveis causas da dor no(a)</strong> " + bodyPart + " " + message;

        // Verifica se o container está oculto
        if (container.style.display === "none") {
            // Se estiver oculto, mostra o container
            container.style.display = "block";
        } else {
            // Se não estiver oculto, oculta o container
            container.style.display = "none";
        }
        //vai pro o inicio do container
        container.scrollTop = 0;

    }
}

function closeBackBody() {
    // Obtém todos os elementos com a classe 'result-body-back'
    const resultsDivs = document.getElementsByClassName('result-body-back');

    // Itera sobre cada elemento encontrado
    for (var i = 0; i < resultsDivs.length; i++) {
        // Obtém o elemento atual
        var div = resultsDivs[i];

        // Oculta o elemento atual definindo o estilo de exibição como 'none'
        div.style.display = 'none';
    }
}
/*FIM CORPO ATRAS*/


/* 'CAIXA' EXPLORE NOSSOS SERVIÇOS */
function services() {
    // Exibe a caixa de diálogo com a mensagem
    var alertDialog = document.getElementById('alert-dialog');
    alertDialog.style.display = 'block';

    // Adiciona a classe ao body para estilizar o fundo
    document.body.classList.add('alert-active');
    var dialog = document.getElementById('alert-dialog');
        dialog.scrollTop = 0; // Define o scroll no topo da div
        // Adicione aqui a lógica para abrir a div
}

function closeAlert() {
    // Obtém o elemento com o ID 'alert-dialog'
    var alertDialog = document.getElementById('alert-dialog');

    // Define o estilo de exibição do elemento como 'none', ocultando-o
    alertDialog.style.display = 'none';

    // Remove a classe 'alert-active' do body para remover os estilos do fundo associados ao alerta
    document.body.classList.remove('alert-active');
}
// fim 'CAIXA' EXPLORE NOSSOS SERVIÇOS


// Tipos de Dores
function mostrarDor(event) {
    
    // Redireciona para o elemento com o ID 'pains' na página
    window.location.href = '#pains';

    // Obtém a classe do botão clicado
    const botaoClicado = event.target.className;

    // Inicializa uma variável para armazenar uma mensagem
    let message = '';

    // Inicia uma estrutura de controle switch para lidar com diferentes classes de botões clicados
    switch (botaoClicado) {
        case "button-articulacoes":
            message = ` 
            <h1>Possíveis causas de dores nas articulações:</h1>
            <div class="imgs-js">
                <img width="350" height="400" src="img/ilustracoes/dores-articulacoes.jpg" alt="Dores nas Articulações">
            </div>
            <p>As dores nas articulações podem ser causadas por uma variedade de condições, incluindo:</p>
            <ul>
                <li>Artrite</li>
                <li>Lesões, como entorses ou distensões</li>
                <li>Tendinites</li>
                <li>Bursites</li>
                <li>Lesões cartilaginosas</li>
                <li>Condições autoimunes</li>
                <li>Infecções articulares</li>
            </ul>
            
            <h4>Logo abaixo temos um corpo humano, clique nas partes que você sente dor, iremos te dar mais informações.</h4>
            `;
            break;
        case "button-musculares":
            message = `<h1>Possíveis causas de dores musculares:</h1>
            <div class="imgs-js">
                <img width="350" height="400" src="img/ilustracoes/dores-musculares.jpg" alt="Dores Musculares">
            </div>
            <ol>
                <li>
                    <strong>Exercício físico intenso ou atividade física incomum:</strong>
                    <p>A dor muscular após o exercício, conhecida como dor muscular de início tardio (DMIT), é comum e geralmente ocorre devido ao estresse excessivo nos músculos durante o exercício.</p>
                </li>
                <li>
                    <strong>Tensão muscular:</strong>
                    <p>Movimentos bruscos, posturas inadequadas ou carregar pesos pesados ​​pdemo causar tensão muscular, resultando em dor.</p>
                </li>
                <li>
                    <strong>Lesões musculares:</strong>
                    <p>Lesões como estiramentos, contusões ou lacerações nos músculos podem causar dor aguda ou crônica.</p>
                </li>
                <li>
                    <strong>Sobrecarga muscular:</strong>
                    <p>Excesso de uso dos músculos sem o devido descanso pode levar à sobrecarga muscular e dor.</p>
                </li>
                <li>
                    <strong>Desidratação:</strong>
                    <p>A falta de hidratação adequada pode levar à dor muscular devido à redução da função muscular e aumento do risco de cãibras.</p>
                </li>
                <li>
                    <strong>Deficiência de nutrientes:</strong>
                    <p>A falta de nutrientes essenciais, como potássio, magnésio ou cálcio, pode contribuir para dores musculares.</p>
                </li>
                <li>
                    <strong>Condições médicas subjacentes:</strong>
                    <p>Algumas condições médicas, como fibromialgia, síndrome da fadiga crônica ou infecções virais, podem causar dores musculares generalizadas.</p>
                </li>
                <li>
                    <strong>Estresse emocional:</strong>
                    <p>O estresse emocional pode levar à tensão muscular e dor.</p>
                </li>
            </ol>
        
            <p>É importante consultar um médico se a dor muscular persistir ou piorar, especialmente se estiver associada a outros sintomas como fraqueza, inchaço ou febre. O tratamento adequado dependerá da causa subjacente da dor muscular.</p>
            <h4>Logo abaixo temos um corpo humano, clique nas partes que você sente dor, iremos te dar mais informações.</h4>`;

            break;
        case "button-osseas":
            message = `<h1>Possíveis causas de dores ósseas:</h1>
            <div class="imgs-js">
                <img width="350" height="450" src="img/ilustracoes/dor-ossea.jpg" alt="Dores ósseas">
            </div>
            <ol>
                <li>
                    <strong>Fraturas:</strong>
                    <p>Fraturas ósseas podem causar dor intensa, especialmente quando o osso está quebrado ou rachado.</p>
                </li>
                <li>
                    <strong>Lesões por estresse:</strong>
                    <p>Lesões por estresse ocorrem quando os ossos são submetidos a esforço repetitivo, resultando em pequenas fissuras que podem causar dor.</p>
                </li>
                <li>
                    <strong>Artrite:</strong>
                    <p>Condições como osteoartrite, artrite reumatoide e artrite psoriásica podem afetar as articulações e os ossos, causando dor e inflamação.</p>
                </li>
                <li>
                    <strong>Osteoporose:</strong>
                    <p>Osteoporose é uma condição na qual os ossos se tornam frágeis e propensos a fraturas devido à perda de densidade óssea, muitas vezes causando dor.</p>
                </li>
                <li>
                    <strong>Infecções ósseas (osteomielite):</strong>
                    <p>Infecções bacterianas ou fúngicas nos ossos podem levar a inflamação e dor intensa.</p>
                </li>
                <li>
                    <strong>Tumores ósseos:</strong>
                    <p>Tumores benignos ou malignos nos ossos podem causar dor, especialmente quando crescem e pressionam os tecidos circundantes.</p>
                </li>
                <li>
                    <strong>Doenças metabólicas:</strong>
                    <p>Condições como doença de Paget ou hiperparatireoidismo podem afetar o metabolismo ósseo e causar dor nos ossos.</p>
                </li>
                <li>
                    <strong>Doenças hematológicas:</strong>
                    <p>Algumas doenças do sangue, como anemia falciforme ou leucemia, podem afetar a medula óssea, causando dor nos ossos.</p>
                </li>
            </ol>
        
            <p>É importante consultar um médico se você estiver enfrentando dor óssea persistente, especialmente se estiver associada a outros sintomas como inchaço, vermelhidão ou dificuldade de movimento. O diagnóstico correto da causa subjacente é essencial para determinar o tratamento adequado.</p>
            
            <h4>Logo abaixo temos um corpo humano, clique nas partes que você sente dor, iremos te dar mais informações.</h4>`;
            break;
        case "button-hernias":
            message = `<h1>Possíveis causas de hérnia de disco:</h1>
            <div class="imgs-js">
                <img width="350" height="400" src="img/ilustracoes/hernia-de-disco.png" alt="Hernia de Disco">
            </div>
            <ol>
                <li>
                    <strong>Envelhecimento:</strong>
                    <p>Com o passar dos anos, os discos intervertebrais começam a perder sua elasticidade e flexibilidade natural, tornando-os mais suscetíveis a danos e rupturas.</p>
                </li>
                <li>
                    <strong>Lesões ou trauma:</strong>
                    <p>Lesões na coluna vertebral devido a acidentes automobilísticos, quedas, esportes de alto impacto ou outros tipos de trauma podem causar uma hérnia de disco.</p>
                </li>
                <li>
                    <strong>Sobrecarga repetitiva:</strong>
                    <p>Movimentos repetitivos, especialmente aqueles que envolvem torção e flexão da coluna, podem gradualmente enfraquecer os discos intervertebrais, aumentando o risco de uma hérnia de disco.</p>
                </li>
                <li>
                    <strong>Má postura:</strong>
                    <p>Posturas inadequadas durante atividades diárias, trabalho ou exercícios físicos podem colocar pressão adicional nos discos intervertebrais, contribuindo para o desenvolvimento de uma hérnia.</p>
                </li>
                <li>
                    <strong>Obesidade:</strong>
                    <p>O excesso de peso coloca uma carga adicional na coluna vertebral, aumentando o estresse nos discos intervertebrais e aumentando o risco de hérnia de disco.</p>
                </li>
                <li>
                    <strong>Fatores genéticos:</strong>
                    <p>Algumas pessoas podem ter uma predisposição genética para desenvolver problemas nos discos intervertebrais, incluindo hérnias de disco.</p>
                </li>
                <li>
                    <strong>Atividades ocupacionais:</strong>
                    <p>Certas ocupações que envolvem levantamento de peso, movimentos repetitivos ou ficar sentado por longos períodos podem aumentar o risco de desenvolver uma hérnia de disco.</p>
                </li>
                <li>
                    <strong>Tabagismo:</strong>
                    <p>O tabagismo pode comprometer a circulação sanguínea para os discos intervertebrais, enfraquecendo sua estrutura e aumentando o risco de hérnia de disco.</p>
                </li>
            </ol>
        
            <p>É importante observar que essas são apenas algumas das possíveis causas de hérnia de disco e que a condição pode variar dependendo de vários fatores individuais. O diagnóstico e tratamento adequados são essenciais para lidar com uma hérnia de disco de maneira eficaz. Se você suspeitar de uma hérnia de disco, consulte um médico para avaliação e orientação adequadas.</p>
        
            
            <h4>Logo abaixo temos um corpo humano, clique nas partes que você sente dor, iremos te dar mais informações.</h4>`;
            break;
        case "button-lesoes":
            message = ` <h1>Possíveis causas de lesões:</h1>
            <div class="imgs-js">
                <img width="350" height="350" src="img/ilustracoes/lesoes.jpg" alt="lesões">
            </div>
            <ol>
                <li>
                    <strong>Acidentes de trânsito:</strong>
                    <p>Colisões de veículos, atropelamentos e outros acidentes de trânsito podem resultar em uma variedade de lesões, desde ferimentos leves até graves traumas.</p>
                </li>
                <li>
                    <strong>Quedas:</strong>
                    <p>Quedas de escadas, escorregões em superfícies escorregadias e tropeções podem causar lesões, como fraturas, contusões e entorses.</p>
                </li>
                <li>
                    <strong>Lesões esportivas:</strong>
                    <p>Atividades esportivas e recreativas podem levar a lesões, incluindo distensões musculares, entorses, fraturas e concussões.</p>
                </li>
                <li>
                    <strong>Acidentes domésticos:</strong>
                    <p>Lesões em casa podem ocorrer devido a cortes, queimaduras, quedas de móveis ou outros objetos, eletrocussão e outros incidentes.</p>
                </li>
                <li>
                    <strong>Lesões ocupacionais:</strong>
                    <p>Acidentes de trabalho e movimentos repetitivos em ambientes de trabalho podem resultar em lesões, como lesões por esforço repetitivo (LER), lesões na coluna vertebral e quedas de altura.</p>
                </li>
                <li>
                    <strong>Atividades de lazer:</strong>
                    <p>Atividades recreativas como caminhadas, ciclismo, natação e outras podem levar a lesões, especialmente se não forem praticadas com segurança adequada.</p>
                </li>
                <li>
                    <strong>Agressões:</strong>
                    <p>Violência física, incluindo brigas e ataques, pode resultar em uma variedade de lesões, desde cortes e contusões até fraturas e lesões internas.</p>
                </li>
                <li>
                    <strong>Lesões relacionadas ao trabalho:</strong>
                    <p>Trabalhos que envolvem levantamento de peso, trabalho manual repetitivo, posturas inadequadas ou exposição a substâncias perigosas podem aumentar o risco de lesões ocupacionais.</p>
                </li>
            </ol>
        
            <p>É importante observar que essas são apenas algumas das possíveis causas de lesões e que a prevenção é fundamental. Adotar práticas de segurança adequadas e tomar medidas para minimizar o risco de lesões é essencial em todos os aspectos da vida diária. Se você sofrer uma lesão, é importante procurar assistência médica para avaliação e tratamento adequados.</p>
            <h4>Logo abaixo temos um corpo humano, clique nas partes que você sente dor, iremos te dar mais informações.</h4>`;
            break;
        default:
            console.log('informação não encontrada');
    }

    // Exibe a mensagem nos containers de tipo de dor
    var containers = document.getElementsByClassName("type-pains");

    // Itera sobre cada container encontrado
    for (var i = 0; i < containers.length; i++) {
        // Obtém o container atual
        var container = containers[i];

        // Obtém o primeiro parágrafo dentro do container
        var paragraph = container.querySelector("p");

        // Define o conteúdo do parágrafo como a mensagem recebida
        paragraph.innerHTML = message;

       

        // Verifica se o container está oculto
        if (container.style.display === "none") {
            // Se estiver oculto, mostra o container
            container.style.display = "block";
        }
        
        container.scrollTop = 0;
    }  
}


// Define uma função para fechar os elementos de dor
function closeDor() {
    // Obtém todos os elementos com a classe 'type-pains'
    const resultsDivs = document.getElementsByClassName('type-pains');
    
    // Itera sobre cada elemento encontrado
    for (var i = 0; i < resultsDivs.length; i++) {
        // Obtém o elemento atual
        var div = resultsDivs[i];
        
        // Oculta o elemento atual definindo o estilo de exibição como 'none'
        div.style.display = 'none';
    }
}
