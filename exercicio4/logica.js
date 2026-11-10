let contador = 0;
let texto = document.querySelector("#texto")
let adicionar = document.querySelector("#adicionar")
let diminuir = document.querySelector("#diminuir")
let zerar = document.querySelector("#zerar")


adicionar.addEventListener("click", function(){
        contador += 1
        texto.innerText = 'Contador: ' + contador
});

diminuir.addEventListener("click", function(){

    contador -= 1
    texto.innerText = 'Contador: ' + contador
});

zerar.addEventListener("click", function(){

    contador = 0
    texto.innerText = 'Contador: ' + contador
});