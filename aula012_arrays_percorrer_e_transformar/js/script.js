const numeros = [1, 2, 3, 4, 5];

const pessoas = [
    {nome: 'Gal Gadot', idade: 40, cidade: 'Rosh Halyin'},
    {nome: 'Elizabeth Olsen', idade: 36, cidade: 'Sherman Oaks'},
    {nome: 'Alexandra Daddario', idade: 39, cidade:'Nova York'},
    {nome: 'Anna de Armas', idade: 37, cidade: 'Havana'},
    {nome: 'Grace Kelly', idade: 95, cidade: 'Filadélfia'},
    {nome: 'Jaz Sinclair', idade: 17, cidade: 'Dallas'}
];

/**
 * Método forEach()
 * Executa uma função para cada elemento do array
 * Não retorna um novo array
 */

document.getElementById('botao-forEach').addEventListener('click', function() {
    let resultado = '';

    numeros.forEach(function(numero, indice) {
        resultado += `Posição ${indice}: ${numero}\n`;
    });

    document.getElementById('resultado-forEach').innerHTML = `
        <strong>Array original:</strong> ${JSON.stringify(numeros)}<br><br>
        <strong>Iteração com forEach:</strong><br>
        ${resultado}
        <small>Observação: forEach não retorna um novo array</small>
    `;
});

/**
 * Método map()
 * Cria um novo array com os resultados de uma função aplicada a cada elemento
 */

document.getElementById('botao-map').addEventListener('click', function() {
    const quadrados = numeros.map(function(numero) {
        return numero * numero;
    });

    document.getElementById('resultado-map').innerHTML = `
        <strong>Array original:</strong> ${JSON.stringify(numeros)}<br><br>
        <strong>Array com quadrados (map):</strong> ${JSON.stringify(quadrados)}<br><br>
        <small>Observação: map sempre retorna um novo array do mesmo tamanho</small>
    `;
});

/**
 * Método filter()
 * Cria um novo array com elementos que passam em um teste (função)
 */

document.getElementById('botao-filter').addEventListener('click', function() {
    const maioresDeIdade = pessoas.filter(function(pessoa) {
        return pessoa.idade >= 18;
    });

    document.getElementById('resultado-filter').innerHTML = `
        <strong>Array original:</strong> ${JSON.stringify(pessoas, null, 2)}<br><br>
        <strong>Maiores de idade (filter):</strong> ${JSON.stringify(maioresDeIdade, null, 2)}<br><br>
        <small>Observação: filter retorna um novo array apenas com elementos que passam no teste</small>
    `;
});

/**
 * Método reduce()
 * Reduz o array a um único valor usando uma função acumuladora
 */

document.getElementById('botao-reduce').addEventListener('click', function() {
    const somaTotal = numeros.reduce(function(acumulador, numeroAtual) {
        return acumulador + numeroAtual;
    }, 0);

    document.getElementById('resultado-reduce').innerHTML = `
        <strong>Array original:</strong> ${JSON.stringify(numeros)}<br><br>
        <strong>Soma total (reduce):<strong> ${somaTotal}<br><br>
        <small>Observação: reduce pode transformar um array em qualquer tipo de valor</small>
    `;
})

/**
 * Método find()
 * Retorna o primeiro elemento que satisfaz uma condição
 */

document.getElementById('botao-find').addEventListener('click', function() {
    const menorDeIdade = pessoas.find(function(pessoa) {
        return pessoa.idade <18
    });

    document.getElementById('resultado-find').innerHTML = `
        <strong>Array original:</strong> ${JSON.stringify(pessoas, null, 2)}<br><br>
        <strong>Primeiro menor de idade(find):</strong> ${JSON.stringify(menorDeIdade)}<br><br>
        <small>Observação: find retorna apenas o primeiro elemento encontrado</small>
    `;
});

/**
 * Métodos some() e every()
 * - some(): Verifica se pelo menos um elemento satisfaz a condição
 * - every(): Verifica se todos os elementos satisfazem a condição
 */

document.getElementById('botao-some').addEventListener('click', function() {
    const existeMenor = pessoas.some(function(pessoa) {
        return pessoa.idade < 18;
    });

    document.getElementById('resultado-some').innerHTML = `
        <strong>Array original:</strong> ${JSON.stringify(pessoas, null, 2)}<br><br>
        <strong>Existe algum menor de idade? (some):</strong> ${existeMenor ? 'Sim' : 'Não'}<br><br>
        <small>Observação: some retorna true se pelos menos um elemento passar no teste</small>
    `;
});

document.getElementById('botao-every').addEventListener('click', function() {
    const todosMaiores = pessoas.every(function(pessoa) {
        return pessoa.idade >= 18;
    });

    document.getElementById('resultado-every').innerHTML = `
        <strong>Array original:</strong> ${JSON.stringify(pessoas, null, 2)}<br><br>
        <strong>Todos são maiores de idade? (every):</strong> ${todosMaiores ? 'Sim' : 'Não'}<br><br>
        <small>Observação: every retorna true apenas se TODOS os elementos passarem no teste</small>
    `;
});