/*
Desafio: Sistema de Aprovacao de Empréstimo
Você deve criar uma função que avalia se uma pessoa pode ou não ser aprovada para um empréstimo com base em suas informações financeiras. A aprovação depende de várias condições que você precisa verificar.

Requisitos:
A função deve receber os seguintes parâmetros:
•idade: idade da pessoa (número inteiro).
•rendaMensal: a renda mensal da pessoa (número flutuante).
•pontuacaoCredito: a pontuação de crédito da pessoa (número inteiro entre 0 e 1000).
•valorEmprestimo: o valor que a pessoa deseja pegar emprestado (número flutuante).

A pessoa será aprovada para o empréstimo com base nas seguintes condições:
•Idade: A pessoa deve ter 18 anos ou mais.
•Renda: A pessoa deve ter uma renda mensal mínima de R$ 2.000.
•Pontuação de crédito: A pontuação de crédito da pessoa deve ser maior ou igual a 600.
•Valor do empréstimo: O valor solicitado não pode ser maior que 5 vezes a renda mensal da pessoa.

A função deve retornar um relatório que mostre:
•Se a pessoa foi aprovada ou reprovada para o empréstimo.
•Detalhes sobre o motivo da aprovação ou reprovação (qual condição não foi atendida).
*/

let idade = parseInt(prompt("Digite a sua idade"))
let rendaMensal = parseFloat(prompt("Digite sua renda mensal: R$"))
let pontuacaoCredito = parseInt(prompt("Digite sua pontuação de crédito (entre 0 e 1000)."))
let valorDoEmprestimo = parseFloat(prompt("Digite o valor do empréstimo  que você deseja: R$")).toFixed(2)

const aprovada = (idade,renda, pontuacao, valor) => {
    if(idade<18){
       return "Empréstimo reprovado: Idade abaixo de 18 anos." 
    }
    if(renda < 2000){
        return "Empréstimo reprovado: Renda mensal insuficiente."
    }
    if(pontuacao < 600){
        return "Empréstimo reprovado: Pontuação de crédito abaixo de 600."
    }
    if(renda> valor*5){
        return "Empréstimo reprovado: Valor solicitado maior que 5 vezes a renda mensal."
    }
    return `Seu empréstimo foi aprovado. Solicitação aceita!`
}

alert(aprovada(idade, rendaMensal, pontuacaoCredito, valorDoEmprestimo))