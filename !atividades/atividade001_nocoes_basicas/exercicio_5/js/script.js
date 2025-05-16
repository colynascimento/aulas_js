document.addEventListener('DOMContentLoaded', () => {

    const ul = document.querySelector('ul');
    const botaoEnviar = document.getElementById('botao-enviar');
    const novoItem = document.getElementById('novo-item');

    botaoEnviar.addEventListener('click', () => {

        if (novoItem.value != ''){
            const li = document.createElement('li');
            li.textContent = novoItem.value;
            ul.appendChild(li);
        } else {
            alert('Valor inválido! Item em branco.')
        };
    });
});