// Array base que será usado nos exemplos
let arrayExemplo = ['Maçã', 'Banana', 'Laranja'];

// Método push()
// Adiciona um ou mais elementos ao final do array e retorna o novo comprimento
document.getElementById('botao-push').addEventListener('click', function() {
    // Spread operador(...) para criar uma cópia do array e não modificá-lo diretamente
    let array = [...arrayExemplo];

    let novoComprimento = array.push('Manga', 'Abacaxi');

    document.getElementById('resultado-push').innerHTML = `
        <strong>Array original:</strong> [${arrayExemplo.join(', ')}]<br>
        <strong>Elementos adicionados:</strong> "Manga", "Abacaxi"<br>
        <strong>Novo comprimento do array:</strong> ${novoComprimento}<br>
        <strong>Array modificado:</strong> [${array.join(', ')}]
    `;
});

// Método
// 
document.getElementById('botao-pop').addEventListener('click', function() {
    let array = [...arrayExemplo];

    let elementoRemovido = array.pop();

    document.getElementById('resultado-pop').innerHTML = `
        <strong>Array original:</strong> [${arrayExemplo.join(', ')}]<br>
        <strong>Elemento removido:</strong> ${elementoRemovido}<br>
        <strong>Array modificado:</strong> [${array.join(', ')}]
    `;
});

// Método unshift()
// Adiciona um ou mais elementos no início do array e retorna o novo comprimento
document.getElementById('botao-unshift').addEventListener('click', function() {
    let array = [...arrayExemplo];

    let novoComprimento = array.push('Manga', 'Abacaxi');

    document.getElementById('resultado-unshift').innerHTML = `
        <strong>Array original:</strong> [${arrayExemplo.join(', ')}]<br>
        <strong>Elementos adicionados:</strong> "Manga", "Abacaxi"<br>
        <strong>Novo comprimento do array:</strong> ${novoComprimento}<br>
        <strong>Array modificado:</strong> [${array.join(', ')}]
    `;
});

// Método shift()
// Remove o primeiro elemento do array e retorna esse elemento
document.getElementById('botao-shift').addEventListener('click', function() {
    let array = [...arrayExemplo];

    let elementoRemovido = array.shift();

    document.getElementById('resultado-shift').innerHTML = `
        <strong>Array original:</strong> [${arrayExemplo.join(', ')}]<br>
        <strong>Elemento removido:</strong> ${elementoRemovido}<br>
        <strong>Array modificado:</strong> [${array.join(', ')}]
    `;
});

// Método splice()
// Alterna o conteúdo de um array removendo, substituindo ou adicionando elementos
// Parâmetros: índice incial, quantidade a remover, elementos a adicionar
document.getElementById('botao-splice').addEventListener('click', function() {
    let array = [...arrayExemplo];

    let elementosRemovidos= array.splice(1, 1, 'Kiwi', 'Morango');

    document.getElementById('resultado-splice').innerHTML = `
        <strong>Array original:</strong> [${arrayExemplo.join(', ')}]<br>
        <strong>Operação:</strong> array.splice(1, 1, 'Kiwi', 'Morango')<br>
        <strong>Elemento removido:</strong> ${elementosRemovidos.join(', ')}<br>
        <strong>Array modificado:</strong> [${array.join(', ')}]
    `;
});

// Método slice()
// Retorna uma cópia de parte de um array em um novo array
// Parâmetros: índice inicial (inclusive), índice final (exclusivo)
document.getElementById('botao-slice').addEventListener('click', function() {

    let novoArray = arrayExemplo.slice(1, 2);

    document.getElementById('resultado-slice').innerHTML = `
        <strong>Array original:</strong> [${arrayExemplo.join(', ')}]<br>
        <strong>Operação:</strong> array.slice(1, 2)<br>
        <strong>Novo Array Retornado:</strong> [${novoArray.join(', ')}]<br>
        <strong>Array original permanece inalterado:</strong> [${arrayExemplo.join(', ')}]<br>
    `;
});