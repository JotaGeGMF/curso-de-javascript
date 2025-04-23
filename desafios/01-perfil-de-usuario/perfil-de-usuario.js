/*
🧠Mini Desafio: Perfil de Usuário
🎯Objetivo
Criar um conjunto de variáveis que representem um perfil de usuário e exibir essas informações organizadas no console.

✅ Regras:
Declare as seguintes variáveis:
• nomeCompleto (string)
• idade (number)
• altura (number, em metros)
• possuiEmprego (boolean)
• cargoAtual (string ou null)
• salarioDesejado (undefined)

Use uma template string para exibir a seguinte mensagem no console:

Olá, meu nome é [nomeCompleto], tenho [idade] anos e [altura]m de altura.
Atualmente estou empregado? [true/false].
Cargo atual: [cargoAtual].
Salário desejado: [salarioDesejado].
Mostre no console o tipo de cada variável usando typeof.


*/

let nomeCompleto = prompt("Digite seu nome completo:")
let idade = prompt("Digite sua idade:")
let altura = prompt("Digite a sua altura em metros: ")
let alturaConvertida = parseFloat(altura)
let possuiEmprego = prompt("Possui emprego? sim/não")
let cargoAtual
if(possuiEmprego == 'sim'){
    cargoAtual = prompt("Digite seu cargo:")
}else{
    cargoAtual = "Desempregado"
}
let salarioDesejado = prompt('Digite o valor de salário desejado: R$')
let salarioConvertido = parseFloat(salarioDesejado).toFixed(2)

alert(`Olá, meu nome é ${nomeCompleto}, tenho ${idade} anos e ${alturaConvertida.toFixed(2)}.
Atualmente estou empregado? ${possuiEmprego}.
Cargo atual: ${cargoAtual}.
Salário Desejado: R$${salarioConvertido}.
`)

