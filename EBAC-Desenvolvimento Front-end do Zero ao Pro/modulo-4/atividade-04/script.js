function calcularIMC(){
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    const imc = peso / altura**2;

    document.getElementById("resultado").textContent = "IMC: " + imc.toFixed(2);

    if (imc >= 30){
        document.getElementById("classificacao").textContent = "Classificação: Obesidade";
    } else if (imc >= 25){
        document.getElementById("classificacao").textContent = "Classificação: Sobrepeso";
    } else if (imc >= 18.5) {
        document.getElementById("classificacao").textContent = "Classificação: Peso normal / Saudável";
    } else {
        document.getElementById("classificacao").textContent = "Classificação: Magreza / Abaixo do peso";
    }
}