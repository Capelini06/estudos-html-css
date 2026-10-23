function calcularMedia() {
    const nome = document.getElementById("nome").value;
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const resultado = document.getElementById("resultado");

    const media = (nota1 + nota2 + nota3) / 3

    if (media >= 7) {
        // Usa crase
        resultado.innerHTML = `
        <p>Nome do aluno: ${nome}</p>
        <p>Media: ${media}</p>
        <p>Situação: Aprovado</p>
        `;
    } else {
        // Usa crase
        resultado.innerHTML = `
        <p>Nome do aluno: ${nome}</p>
        <p>Media: ${media}</p>
        <p>Situação: Reprovado</p>
        `;
    }
}