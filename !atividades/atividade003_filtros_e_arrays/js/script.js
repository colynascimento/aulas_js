const listaProdutos = [
    {nome: 'Sabonete Natural', preco: 15.0, categoria: 'cosmeticos'},
    {nome: 'Shampoo Orgânico', preco: 25.0, categoria: 'cosmeticos'},
    {nome: 'Granola Artesanal', preco: 18.5, categoria: 'alimentos'},
    {nome: 'Mel Puro', preco: 22.0, categoria: 'alimentos'}
];

const containerProdutos = document.querySelector('#container-produtos');

function criarCards(){
    for(let i = 0; i < listaProdutos.length; i++) {
        const cardProduto = document.createElement('div');
        cardProduto.className = `card-produto ${listaProdutos[i].categoria}`;
        const tituloProduto = document.createElement('h4'); 
        tituloProduto.className = 'nome-produto';
        const precoProduto = document.createElement('p');
        precoProduto.className = 'preco-produto';

        containerProdutos.appendChild(cardProduto);
        cardProduto.appendChild(tituloProduto);
        cardProduto.appendChild(precoProduto);

        tituloProduto.innerText = listaProdutos[i].nome;
        precoProduto.innerText = listaProdutos[i].preco;
    };
};

// const elementoCategoria = document.getElementById('lista-categorias');
// const categoriaSelecionada = elementoCategoria.value;

// function filtrarProdutos(){
//     listaProdutos.forEach(produto => {
//         if (!produto.classList.contains(categoriaSelecionada)) {
//             produto.style.display = 'none';
//         };
//     });
// };

// // montar a lista de produtos dinamicamente

// document.getElementById('lista-categorias').addEventListener('change', filtrarProdutos());