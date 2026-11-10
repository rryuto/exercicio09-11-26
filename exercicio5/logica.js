let botao = document.querySelector("#botao")
botao.style.backgroundColor = "red"

botao.addEventListener("click", function(){
    if (botao.style.backgroundColor === "red") {
        botao.innerText = "Ligado"
        botao.style.backgroundColor = "green"
    } else {
        botao.innerText = "Desligado"
        botao.style.backgroundColor = "red"
    }
   
})
