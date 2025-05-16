document.addEventListener('DOMContentLoaded', () => {
    const senhaInput = document.getElementById('senha');
    const maiuscula = document.getElementById('verificador-maiuscula');
    const minuscula = document.getElementById('verificador-minuscula');
    const numero = document.getElementById('verificador-numero');
    const tamanho = document.getElementById('verificador-min-caracteres');

    senhaInput.addEventListener('input', (event) => {
        const senha = event.target.value;
        
        if (/[A-Z]/.test(senha)) {
            maiuscula.style.color = 'green';
        } else {
            maiuscula.style.color = 'red';
        }
        
        if (/[a-z]/.test(senha)) {
            minuscula.style.color = 'green';
        } else {
            minuscula.style.color = 'red';
        }
        
        if (/[0-9]/.test(senha)) {
            numero.style.color = 'green';
        } else {
            numero.style.color = 'red';
        }
        
        if (senha.length >= 8) {
            tamanho.style.color = 'green';
        } else {
            tamanho.style.color = 'red';
        }
    });
});