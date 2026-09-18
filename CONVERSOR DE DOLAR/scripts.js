alert("Em caso de fotossensibilidade, ative o modo escuro")
const dolar = 5.30
function FuncaoResposta() {

    let = valor = document.querySelector(".input").value
    let resultado = valor/dolar
    document.querySelector(".inputR").value = resultado.toFixed(2);
}
function FuncaoReset() {
    document.querySelector(".input").value = null
    document.querySelector(".inputR").value = null
}
function ModoEscuro() {
    document.body.classList.toggle("escuro")
}
