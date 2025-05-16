document.addEventListener('DOMContentLoaded', () => {

    const numeroPalpite = document.getElementById('numero-resposta');
    const botaoEnviar = document.getElementById('botao-enviar');
    const afericao = document.getElementById('afericao');

    // função para sortear número aleatório de 0 a 10. Math random sorteia números float de 0 a 1
    // já o Math floor arredonda
    const numeroSorteado = Math.floor(Math.random() * 10);

    console.log(numeroSorteado);

    botaoEnviar.addEventListener('click', () => {

        const palpite = Number(numeroPalpite.value);

        if (numeroPalpite.value.trim() != ''){
            if (palpite === numeroSorteado){
                afericao.textContent = "Isso, você acertou!!!"
            } else if (palpite > numeroSorteado){
                afericao.textContent = "Errado! Boa tentativa, mas tente um número menor."
            } else if (palpite < numeroSorteado){
                afericao.textContent = "Errado! Pode aumentar mais isso aí."
            };
        } else {
            alert('Resposta inválida! Campo em branco');
        };
    });
})