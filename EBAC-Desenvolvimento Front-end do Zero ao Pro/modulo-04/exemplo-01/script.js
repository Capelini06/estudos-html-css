//Conhecendo as variaveis
// Const é uma variavel que não vai mudar durante a execução do codigo
const nome = "Guilherme";

// Let é uma variavel que ode mudar durante a execução do codigo
let idade = 20;

// Define valor nulo
let nulo = null;

// Permite definir variavel inicialmente sem valor
let salario;

// Boolean
let verdade = true;

// ========================================================

// Recebendo valor do usuario
const valor = prompt("Insira um valor: ");

// processando
const gorjeta = Number(valor) * 0.10;
const valorFinal = Number(valor) + gorjeta;

//Saida
alert("Valor total R$:" + valorFinal);