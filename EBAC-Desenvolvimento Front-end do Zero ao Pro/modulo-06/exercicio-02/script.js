let contador = 0;
const alunos = [];
const notas = [];
const frequencias = [];

function adicionarAluno() {

    const nome = document.getElementById("nome").value;
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const freq = parseFloat(document.getElementById("frequencia").value);


    if (nome.trim() === "") {
        alert("Insira o nome do aluno!");
        return;
    }
    if (isNaN(nota1) || isNaN(nota2)){
        alert("Insira as notas!");
        return;
    } 
    if (nota1 < 0 || nota1 > 10 ||
        nota2 < 0 || nota2 > 10){
            alert("As notas devem estar entre 0 e 10!");
            return;
        }
    if (freq < 0 || freq > 100 || isNaN(freq)) {
        alert("Insira uma frequencia valida!");
        return;
    }
    const media = (nota1 + nota2) / 2

    alunos.push(nome.trim());
    notas.push(media);
    frequencias.push(freq);
    contador++;

    document.getElementById("contador").textContent = "Alunos cadastrados: " + contador;

    document.getElementById("formulario").reset();
}

function verResultado() {
    let situacao;
    const resultado = document.getElementById("resultado");

    resultado.innerHTML = ``;

    for (let i = 0; i < notas.length; i++) {


        if (notas[i] >= 7 && frequencias[i] >= 70) {
            situacao = "APROVADO";
        } else if (notas[i] < 7 && frequencias[i] >= 70) {
            situacao = "REPROVADO POR NOTA";
        } else if (notas[i] >= 7 && frequencias[i] < 70) {
            situacao = "REPROVADO POR FREQUÊNCIA";
        } else {
            situacao = "REPROVADO";
        }

        resultado.innerHTML += `
        <p>ALUNO: ${alunos[i]}</p>
        <p>MEDIA: ${notas[i].toFixed(2)}</p>
        <p>FREQUÊNCIA: ${frequencias[i]}</p>
        <p>SITUAÇÃO: ${situacao}</p>
        <hr>
        `
    }
}
