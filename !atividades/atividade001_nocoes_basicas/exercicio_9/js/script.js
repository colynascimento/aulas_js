document.addEventListener('DOMContentLoaded', () => {

    const botaoAlternar = document.getElementById('alternar-tema');

    botaoAlternar.addEventListener('click', () => {

        document.body.classList.toggle('dark-mode');
    });
});