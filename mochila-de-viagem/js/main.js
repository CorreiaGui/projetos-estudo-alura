const form = document.getElementById("novoItem");
const lista = document.getElementById('lista');
const itens = []

form.addEventListener("submit", (evento) => {

    const nome = evento.target.elements['nome'];
    const quantidade = evento.target.elements['quantidade'];

        evento.preventDefault();
        criaElemento(nome.value, quantidade.value);
    
        nome.value = '';
        quantidade.value = '';
})

function criaElemento(nome, quantidade) {

    if (nome && quantidade && quantidade > 0) {
        const novoItem = document.createElement('li');
        novoItem.classList.add('item');

        const numeroItem = document.createElement('strong');
        numeroItem.innerHTML = quantidade;

        novoItem.appendChild(numeroItem);
        novoItem.innerHTML += nome;

        lista.appendChild(novoItem);

        const itemAtual = {
            "nome": nome,
            "quantidade": quantidade
        }

        itens.push(itemAtual);

        localStorage.setItem("itens", JSON.stringify(itens));

    } else {
        console.log('É obrigatório informar os valores para inserir na mochila');
        alert('É obrigatório informar os valores para inserir na mochila');
    }
}
