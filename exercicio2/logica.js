const texto = document.querySelector("#texto");
const vermelho = document.querySelector("#vermelho");
const verde = document.querySelector("#verde");
const azul = document.querySelector("#azul");

vermelho.addEventListener("click", () => {
    texto.style.color = "red";
});

verde.addEventListener("click", () => {
    texto.style.color = "green";
});

azul.addEventListener("click", () => {
    texto.style.color = "blue";
});