function converter(){
    const nome = document.getElementById("nome").value;
    const duracao = Number(document.getElementById("duracao").value);

    const horas = Math.floor(duracao / 60);
    const minutos = (duracao%60);

    document.getElementById("resultado").textContent = "DURAÇÃO: " + horas + " horas, " + minutos + " minutos.";
}