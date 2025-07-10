export function analiseMaiorNumero(numero1, numero2, numero3) {
    const maior = Math.max(parseInt(numero1), parseInt(numero2), parseInt(numero3));
    return maior;
};

export function analiseMenorNumero(numero1, numero2, numero3) {
    const menor = Math.max(parseInt(numero1), parseInt(numero2), parseInt(numero3));
    return menor;
};

export function gerarAnaliseCompleta(numero1, numero2, numero3) {
    if (numero1 === numero2 && numero2 === numero3) {
        return 'Os números são iguais.';
    };
    const maior = analiseMaiorNumero(n1, n2, n3);
    const menor = analiseMenorNumero(n1, n2, n3);
    return `O maior número é: ${maior}\nO menor número é: ${menor}`;
};