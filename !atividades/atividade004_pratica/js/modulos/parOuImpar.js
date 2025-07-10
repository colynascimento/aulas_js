export function verificarParOuImpar(numeroRecebido) {
    let numero = parseInt(numeroRecebido);

    if (numero % 2 == 0) {
        return `O número ${numero} é par.`;
    } else {
        return `O número ${numero} é ímpar.`;
    };
};