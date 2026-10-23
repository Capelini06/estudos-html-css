

function montarMaratona() {

    const filmes = ["Matrix", "Interestelar", "O Senhor dos Anéis", "Toy Story", "Coringa"];
    const duracoes = [136, 169, 178, 81, 122]; 
    const resultado = document.getElementById("resultado");
    let duracaoMaior = 0;
    let nomeMaior = "";
    let minutosTotais = 0;
    let tamanho;

    for(let i = 0; i < filmes.length; i++){
        minutosTotais+=duracoes[i];
        let horas = Math.floor(duracoes[i]/60);
        let minutos = Math.floor(duracoes[i]%60);

        if (duracoes[i] > 150){
            tamanho = "longo";
        } else {
            tamanho = "pequeno";
        }

        resultado.innerHTML += `
        <p>FILME: ${filmes[i]}: ${horas} horas(s) e ${minutos} minutos(s).</p>
        <p>TAMANHO : ${tamanho}</p>
        <br>
        `

        if (duracaoMaior < duracoes[i]){
            duracaoMaior = duracoes[i];
            nomeMaior= filmes[i];
        }
    }

        let horas = Math.floor(minutosTotais/60);
        let minutos = Math.floor(minutosTotais%60);

        resultado.innerHTML +=`
        <p>HORAS TOTAIS ASSISTIDAS: ${horas} horas(s) e ${minutos} minutos(s).</p>
        <p>MAIOR FILME: ${nomeMaior} com ${duracaoMaior} minutos.</p>
        `
}
