let pontos = Number(prompt("Quantos pontos?"));
let anosDeCliente = Number(prompt("Quantos anos de casa"));
let resultado = "";

if (pontos <= 99) {
    resultado = "Bronze";
} else if (pontos <= 499) {
    resultado = "Prata";
} else if (pontos <= 999) {
    resultado = "Ouro";
} else if (anosDeCliente >= 1) {
    resultado = "Diamante";
} else if (pontos >= 1000000000000000000) {
    resultado = "Adamastor"
}

alert(`A sua classificação é ${resultado}`)