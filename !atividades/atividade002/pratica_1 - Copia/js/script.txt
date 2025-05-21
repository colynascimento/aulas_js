document.addEventListener('DOMContentLoaded', () => {

    let elementoContador = document.getElementById('contador').innerHTML;
    const btnAdicionar = document.getElementById('btn-adicionar');
    const btnSubtrair = document.getElementById('btn-subtrair');
    const btnZerar = document.getElementById('btn-zerar');
    
    function adicionar(valor) {
        let contador = parseInt(elementoContador) + 1;
        elementoContador = contador;
    };

    function subtrair() {
        let contador = parseInt(elementoContador) - 1;
        elementoContador = contador;
    };

    function zerar() {
        document.getElementById('contador').textContent = '0';
    };

    btnAdicionar.addEventListener('click', adicionar);
    btnSubtrair.addEventListener('click', subtrair);
    btnZerar.addEventListener('click', zerar);
});