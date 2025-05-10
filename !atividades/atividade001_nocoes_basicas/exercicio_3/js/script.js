document.addEventListener('DOMContentLoaded', () => {

    const texto = document.getElementById('texto');
    const contador = document.getElementById('contador');
    let count = 0

    texto.addEventListener('input', (event) => {

        if (texto.value === '') {
            contador.innerHTML = '0';
        };

        for (let i = 0; i < texto.value.length; i++) {
            count += 1;
            contador.innerHTML = texto.value.length;
        };
    });
});