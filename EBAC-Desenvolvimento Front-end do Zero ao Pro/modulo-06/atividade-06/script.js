const secreto = Math.floor(Math.random() * 100) + 1;
let contador = 7;
let acabou = false;
let dicas = document.getElementById("dica");

function adivinhar() {
    if (contador > 0) {
        let numero = parseInt(document.getElementById("numero").value);

        if (isNaN(numero) || numero < 1 || numero > 100) {
            alert("O numero deve ser entre 1 e 100");
            return;
        }

        if (numero > secreto) {
            document.getElementById("dica").textContent = "O número secreto é menor";
        } else if (numero < secreto) {
            document.getElementById("dica").textContent = "O número secreto é maior";
        } else if (numero === secreto) {
            document.getElementById("dica").textContent = "VOCÊ ACERTOU!!!";
            acabou = true;
        }

        contador--;
        dicas.textContent = "Tentativas restantes: " + contador;

        if (contador === 0 || acabou) {
            document.getElementById("dica").textContent = "Suas tentativas acabaram! O número secreto era: " + secreto;
        }
    } else {
        alert("Suas tentativas acabaram!")
    }
}