/*

    1) Variáveis - São pedacinho de memória que guarda um valor.
    2) Funções - É um pedacinho de código que xexcuta quando eu ordeno e que faz uma ação
    3) Laços
    4) Objetos
    5) Arrays(Vetores)
    6) Estrutura de Dados
    7) Manipulação de DOM
    8) Manipulação de Eventos
    9) Algoritmo
    10) Lógica de Programação
    11) Seletores
    12) Template Strings
    13) Console.log - É uma forma de vermos os dados na tela


    O que vamos fazer
    1) Colocar os produtos na tela
        [x] saber quem são os produtos
        [x] Onde colocar os produtos
        [x] Colocar os produtos na Tela
        [x] Estilizar os produtos

    2) Filtrar por categoria
        [x] Quem são os botões para selecionar a categoria
        [x] Quando um dos botões ali foram clicados
        [x] Qual botão foi clicado
        [x] Filtrar os produtos daquela categoria
        [x] Mostrar na tela, SOMENTE os produtos filtrados  
    3) Filtrar por nome
        [x] Quem é o input 
        [x] Quando digitou algo no imput
        [x] O que foi digitado
        [x] Filtar os produtos de acordo com o que foi digitado
        [x] Deixar só os produtos filtrados na tela


    html -> document
    css -> style
    js -> script
    querySelector -> Selector -> Selecionar algo

*/

let produtos = [
    {
        id: 1,
        nome: "iPhone 15 Pro",
        categoria: "smartphones",
        preco: 7999,
        precoOriginal: 8999,
        desconto: 11,
        imagem: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400",
        descricao: "Smartphone Apple com câmera avançada"
    },
    {
        id: 2,
        nome: "MacBook Air M2",
        categoria: "laptops",
        preco: 8999,
        precoOriginal: 10999,
        desconto: 18,
        imagem: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400",
        descricao: "Notebook Apple ultrafino e potente"
    },
    {
        id: 3,
        nome: "AirPods Pro",
        categoria: "headphones",
        preco: 1899,
        precoOriginal: 2299,
        desconto: 17,
        imagem: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400",
        descricao: "Fones sem fio com cancelamento de ruído"
    },
    {
        id: 4,
        nome: "Samsung Galaxy S24",
        categoria: "smartphones",
        preco: 5499,
        precoOriginal: 6299,
        desconto: 13,
        imagem: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400",
        descricao: "Smartphone Samsung com tela AMOLED"
    },
    {
        id: 5,
        nome: "Apple Watch Series 9",
        categoria: "smartwatch",
        preco: 3299,
        precoOriginal: 3799,
        desconto: 13,
        imagem: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400",
        descricao: "Relógio inteligente com monitoramento"
    },
    {
        id: 6,
        nome: "Teclado Mecânico",
        categoria: "accessories",
        preco: 499,
        precoOriginal: null,
        desconto: null,
        imagem: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400",
        descricao: "Teclado mecânico RGB para gamers"
    },
    {
        id: 7,
        nome: "Sony WH-1000XM5",
        categoria: "headphones",
        preco: 2499,
        precoOriginal: 2999,
        desconto: 17,
        imagem: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400",
        descricao: "Fone com cancelamento de ruído"
    },
    {
        id: 8,
        nome: "Dell XPS 13",
        categoria: "laptops",
        preco: 7999,
        precoOriginal: null,
        desconto: null,
        imagem: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=400",
        descricao: "Notebook Windows premium"
    }
];

let containerProdutos = document.querySelector(".produtos-container");
let inputPesquisa = document.querySelector(".input-pesquisa")
let textoInput = ""
let todosBotoes = document.querySelectorAll(".botão-categorias")
let categoria = "todos"





function mostrarProdutos() {
    let htmlProdutos = ""

    produtos.forEach(prd => {


        // if (se) -> Tomar decisões
        // includes -> Verifica se dosi textos "batem"
        // prd.nome -> MacBook Air -> includes(input) -> Mac

        if (prd.nome.toLocaleLowerCase().includes(textoInput.toLocaleLowerCase())) {

            // = => Colocando um valor dentro da variável
            // == ou === COMPARANDO dois valores
            // || OU

            if (prd.categoria === categoria || categoria === "todos") {

                // COLOCAR PRODUTO NA TELA
                htmlProdutos +=
                    ` <div class="cartao-produto">
                <img src="${prd.imagem}" class="imagem-produto">
                <div class="info-produto">
                    <h3 class="nome-produto">${prd.nome}</h3>
                    <p class="descricao-produto">${prd.descricao}</p>
                    <p class="preco-produto">${prd.preco}</p>
                    <button class="botao-produto">Ver Detalhes</button>
                </div>
            </div>
            `
            }
        }




    })

    containerProdutos.innerHTML = htmlProdutos
}

mostrarProdutos()

function pesquisa() {
    textoInput = inputPesquisa.value

    mostrarProdutos()

}


inputPesquisa.addEventListener("input", pesquisa)

todosBotoes.forEach(botao => {

    botao.addEventListener("click", function () {
        categoria = botao.getAttribute("data-categoria")
        todosBotoes.forEach(b => b.classList.remove("ativo"))

        botao.classList.add("ativo")
      

        mostrarProdutos()
    })
})