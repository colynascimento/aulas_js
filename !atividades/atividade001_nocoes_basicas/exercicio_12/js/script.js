document.addEventListener('DOMContentLoaded', () => {
    const temporizador = document.getElementById('temporizador');

    let contador = 10;

    const intervalo = setInterval(() => {
        contador -= 1;
        temporizador.textContent = contador;
        
        if (contador <= 0) {
            clearInterval(intervalo)
            temporizador.textContent = "Tempo esgotado!"
            temporizador.style.color = '#e84393'
        }
    }, 1000);
});