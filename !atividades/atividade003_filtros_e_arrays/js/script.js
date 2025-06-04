const cardsProdutos = document.querySelectorAll('.card-produto');
const listaProdutos = [
    {nome: 'Sabonete Natural', preco: 15.0, categoria: 'cosmetico'},
    {nome: 'Shampoo Orgânico', preco: 25.0, categoria: 'cosmetico'},
    {nome: 'Granola Artesanal', preco: 18.5, categoria: 'alimento'},
    {nome: 'Mel Puro', preco: 22.0, categoria: 'alimento'}
];
const elementoCategoria = document.getElementById('lista-categorias');
const categoriaSelecionada = elementoCategoria.value;

function filtrarProdutos(){
    listaProdutos.forEach(produto => {
        if (!produto.classList.contains(categoriaSelecionada)) {
            produto.style.display = 'none';
        };
    });
};

// montar a lista de produtos dinamicamente

document.getElementById('lista-categorias').addEventListener('change', filtrarProdutos());