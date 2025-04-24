/*
🎯 Desafio: Sistema de Acesso a Evento
Você deve criar um pequeno sistema que verifica as credenciais de uma pessoa para acessar um evento. Esse sistema deve usar:
•if, else if, else
•operador ternário
•switch/case

✅ Regras:
Solicite via prompt:
•nome
•idade
•tipo de ingresso (VIP, COMUM, ESTUDANTE)
•se está com o ingresso (sim ou não)

Condições:

Parte 1 – Verificando se pode entrar:
•Se não tiver o ingresso, negar entrada direto.
•Se tiver:
    •Se for menor de 18: precisa de responsável.
    •Se for maior ou igual a 18: pode entrar normalmente.
Use if/else if/else aqui.

Parte 2 – Validando tipo de ingresso:
Use switch/case para responder com base no tipo:
•VIP: "Seja bem-vindo ao lounge VIP!"
•COMUM: "Entrada padrão, aproveite o evento!"
•ESTUDANTE: "Entrada com desconto de estudante validada."
•Caso o tipo seja inválido: "Tipo de ingresso desconhecido."

Parte 3 – Mensagem final com ternário:
Use operador ternário para exibir:
•Se idade >= 60: "Você tem direito a atendimento preferencial."
•Caso contrário: "Aproveite o evento!"
*/

let nome = prompt("Digite seu nome: ")
let idade = parseInt(prompt("Digite a sua idade:"))

let jaComprouIngresso = prompt("Já está com ingresso: SIM/NÃO")
while(jaComprouIngresso !== 'SIM' && jaComprouIngresso !=='NÃO'){
    jaComprouIngresso = prompt("Digite novamente da forma como está sendo mostrado: SIM/NÃO.")
}
//jaComprouIngresso.toUpperCase()

if(jaComprouIngresso === "SIM"){
    let ingresso = prompt("Digite o tipo de ingresso: VIP, COMUM, ESTUDANTE")
    ingresso.toLocaleUpperCase()
    while(ingresso !== 'VIP' || ingresso !== 'COMUM' || ingresso !=='ESTUDANTE'){
        ingresso = prompt("Digite novamente o tipo de ingresso: VIP, COMUM, ESTUDANTE")
    }
    if(idade<18){
        alert("Para entrar aqui, você precisa estar acompanhada de um responsável.")
    }else{
        switch(ingresso){
            case 'VIP':
                alert("Seja bem-vindo ao lounge VIP!")
                break
            case 'COMUM':
                alert("Entrada padrão, aproveite o evento!")
                break
            case 'ESTUDANTE': 
                alert("Entrada com desconto de estudante validada.")
                break
                default:
                    alert("Tipo de ingresso desconhecido.")
        }
    }
    idade >= 60 ? "Você tem direito ao atendimento preferencial" : "Apriveite a festa"
}else{
    alert("Vá para o caixa")
}
