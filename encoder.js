let textarea = document.querySelector("#textarea1");
let button = document.querySelector("#criptografar");
let button2 = document.querySelector("#descriptografar")
let resultado = document.querySelector('.resultado__texto');
let copiar = document.querySelector("#copiar")

button.onclick = function(){
    resultado.textContent = criptografia(textarea.value);
    document.getElementById("imgchat").style.display = "none";
    document.getElementById("ConteudoChatH1").style.display = "none";
    document.getElementById("ConteudoChatP").style.display = "none";
    document.getElementById("copiar").style.display="inline";

    copiarTexto(resultado.textContent);
}
button2.onclick = function(){
    resultado.textContent = descriptografia(textarea.value)
    document.getElementById("imgchat").style.display = "none";
    document.getElementById("ConteudoChatH1").style.display = "none";
    document.getElementById("ConteudoChatP").style.display = "none";
    document.getElementById("copiar").style.display="inline";

    copiarTexto(resultado.textContent);
}   
function criptografia(texto){
    texto = texto.replace(/e/g, "enter");
    texto = texto.replace(/i/g, "imes");
    texto = texto.replace(/a/g, "ai");
    texto = texto.replace(/o/g, "ober");
    texto = texto.replace(/u/g, "ufa");

    return texto;
}
function descriptografia(texto){
    texto = texto.replace(/enter/g, "e");
    texto = texto.replace(/imes/g, "i");
    texto = texto.replace(/ai/g, "a");
    texto = texto.replace(/ober/g, "o");
    texto = texto.replace(/ufa/g, "u");
    
    return texto;
}
function conteudoChat(){
    document.getElementById("imgchat").style.display = "none";
    document.getElementById("ConteudoChatH1").style.display = "none";
    document.getElementById("ConteudoChatP").style.display = "none";
}
function copiarTexto(texto){
    navigator.clipboard.writeText(texto);
}

























































































































































