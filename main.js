let dodaj = document.getElementById("dodaj");
let usun = document.getElementById("usun");
let paragraf = document.querySelector("p");

document.getElementById("dodaj").onclick = function () {
    paragraf.textContent = "Przykładowy tekst";
}

document.getElementById("usun").onclick = function () {
    paragraf.textContent = "";
}