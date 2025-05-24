document.addEventListener("DOMContentLoaded", function () {
    const btnId = document.getElementById("btn-id");
    const btnSelector = document.getElementById("btn-selector");

    btnId.addEventListener("click", function () {
        const input = document.getElementById("nome");
        const saida = document.getElementById("saida");
        saida.textContent = "ID: " + input.value;
    });

    btnSelector.addEventListener("click", function () {
        const input = document.querySelector(".campo-nome");
        const saida = document.querySelector("#saida");
        saida.textContent = "QuerySelector: " + input.value;
    });
});