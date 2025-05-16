document.addEventListener('DOMContentLoaded', () => {

    const botaoEnviar = document.getElementById('botao-enviar')
    const resultado = document.getElementById('resultado')
    const texto = document.getElementById('texto')

    botaoEnviar.addEventListener('click', () => {

        const textoFormatado = texto.value.replace(/\s+/g, '');
        let checarPalindromo = ''

        if (texto != ''){

            for (let i = textoFormatado.length - 1; i >= 0; i--){
                checarPalindromo += textoFormatado[i]
                console.log(checarPalindromo)
            };

            if (textoFormatado === checarPalindromo) {
                resultado.textContent = "Yes!!! Temos um palíndromo"
            } else {
                resultado.textContent = "Nãoo, isso não é um palíndromo"
                console.log(textoFormatado)
            };
        };
    });

});