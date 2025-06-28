// Questão A
function verificarParOuImpar(numeroRecebido){
    let numero = parseInt(numeroRecebido);
    if (numero % 2 == 0) {
        return `O número ${numero} é par.`;
    } else {
        return `O número ${numero} é ímpar.`;
    };
};

// Questão B
function analiseMaiorNumero(numero1, numero2, numero3){
    let maior = '';

    if (numero1 > numero2 && numero1 > numero3){
        maior = numero1;
    } else if(numero2 > numero1 && numero2 > numero3){
        maior = numero2;
    } else if(numero3 > numero1 && numero3 > numero2){
        maior = numero3;
    };

    return `O maior número é: ${maior}`;
};

function analiseMenorNumero(numero1, numero2, numero3){
    let menor = '';

    if (numero1 < numero2 && numero1 < numero3){
        menor = numero1;
    } else if(numero2 < numero1 && numero2 < numero3){
        menor = numero2;
    } else if(numero3 < numero1 && numero3 < numero2){
        menor = numero3;
    };

    return `O menor número é: ${menor}`;
};

function monitoramentoVelocidade(velocidade){
    if (velocidade > 60){
        return 'Atenção! A velocidade atual está acima do limite permitido de 60km/h, por favor, reduza para sua segurança.'
    } else{
        return 'A velocidade do carro está adequada! Continue dirigindo com segurança.'
    };
};

function calcularAumento(salarioAtual){
    let salario = parseFloat(salarioAtual);
    let novoSalario;

    if (salario > 1500){
        novoSalario = (salario * 1.05).toFixed(2);
        return `O novo salário será de R$${novoSalario}`
    } else if (salario < 1000){
        novoSalario = (salario * 1.10).toFixed(2);
        return `O novo salário será de R$${novoSalario}`
    } else if (salario <= 0){
        return 'O salário informado é inválido.'
    } else {
        return 'Não houve aumento de salário.'
    };
}

function calcularPassagem(distanciaRecebida){
    let distancia = parseFloat(distanciaRecebida);
    let preco;

    if (distancia < 200) {
        preco = (distancia * 0.7).toFixed(2)
    } else {
        preco = (distancia * 0.4).toFixed(2);
    };

    return `O preço estimado da viagem é de R$${preco}.`

};

document.addEventListener('DOMContentLoaded', () => {
    const numeroRecebido = document.getElementById('numero-verificar');
    const botaoVerificar = document.getElementById('btn-verificar');
    const resultadoVerificacao = document.getElementById('resultado-verificacao');

    const botaoAnalisar = document.getElementById('btn-analisar');
    const resultadoAnalise = document.getElementById('resultado-analise');

    const velocidadeDetectada = document.getElementById('velocidade');
    const botaoMonitorar = document.getElementById('btn-monitorar');
    const resultadoMonitoramento = document.getElementById('resultado-monitoramento');

    const salario = document.getElementById('salario');
    const botaoCalcular = document.getElementById('btn-calcular');
    const resultadoCalculo = document.getElementById('resultado-calculo');

    const distanciaRecebida = document.getElementById('distancia');
    const botaoCalcularPreco = document.getElementById('btn-calcular-preco');
    const resultadoCalculoPreco = document.getElementById('resultado-calculo-preco');

    // botaoVerificar.addEventListener('click', () => {
    //     const resultado = verificarParOuImpar(numeroRecebido.value);
    //     resultadoVerificacao.textContent = resultado;
    // });

    // botaoAnalisar.addEventListener('click', () => {
    //     const numero1Recebido = parseInt(document.getElementById('numero1-analise').value);
    //     const numero2Recebido = parseInt(document.getElementById('numero2-analise').value);
    //     const numero3Recebido = parseInt(document.getElementById('numero3-analise').value);

    //     const maiorNumero = analiseMaiorNumero(numero1Recebido, numero2Recebido, numero3Recebido);
    //     const menorNumero = analiseMenorNumero(numero1Recebido, numero2Recebido, numero3Recebido);
    //     if (maiorNumero !== menorNumero){
    //         resultadoAnalise.textContent = maiorNumero + '\n' + menorNumero;
    //     } else{
    //         resultadoAnalise.textContent = 'Os números são iguais.'
    //     };
    // });

    // botaoMonitorar.addEventListener('click', () => {
    //     const velocidade = parseInt(velocidadeDetectada.value)
    //     const velocidadeResultado = monitoramentoVelocidade(velocidade);
    //     resultadoMonitoramento.textContent = velocidadeResultado;
    // });

    // botaoCalcular.addEventListener('click', () => {
    //     const resultadoSalario = calcularAumento(salario.value);
    //     resultadoCalculo.textContent = resultadoSalario;
    // });

    botaoCalcularPreco.addEventListener('click', () => {
        const resultadoPrecoPassagem =  calcularPassagem(distanciaRecebida.value);
        resultadoCalculoPreco.textContent = resultadoPrecoPassagem;
    });
});