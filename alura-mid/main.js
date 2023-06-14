const listaDeTeclas = document.querySelectorAll('.tecla');

function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);
    if (elemento != null && elemento.localName === "audio") {
        elemento.play();
    } else {
        console.log("Elemento não encontrado ou seletor inválido.")
    }
}

for (indice = 0; indice < listaDeTeclas.length; indice++) {

    const teclas = listaDeTeclas[indice];
    const instrumento = teclas.classList[1];
    const idSom = `#som_${instrumento}`;

    teclas.onclick = function () {
        tocaSom(idSom);
    }

    teclas.onkeydown = function (evento) {
        if (evento.code === "Space" || evento.code === "Enter") {
            teclas.classList.add('ativa')
        }
    }

    teclas.onkeyup = function () {
        teclas.classList.remove('ativa')
    }
}