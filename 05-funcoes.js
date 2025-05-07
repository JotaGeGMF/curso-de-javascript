/*
FUNÇÕES E ARROW FUNCTIONS

O que são funções? 
Funções são um conjunto de instruções que realizam uma tarefa.
Ela possui a seguinte estrutura:
function nomeDaFuncao(parametros){
    instruções
    return 
}
nomeDaFuncao(argumento)

•function: é a palavra reservada para declarar uma função
•parâmetros: valores passados e manipulados pela função
•return: é o que a função irá retornar quando for executada
•argumentos: é o valor referente aos parâmetros
•A função deve ser chamada e receber os argumentos para ser executada.

OBS: parâmetros como arrays e objetos quando são manipulados dentro de uma função, eles são alterados fora dela.

Com o ES6, houve uma nova forma de criar funções, as arrows functions:
const nomeDafuncao = (params) => {instruções + return} 
OBS: se houver apenas uma chamada de return na função, não precisamos escrevê-lo.
OBS: Caso tivermos apenas um parâmetro, não precisamos utilizar parênteses
const sayHello = name => `Olá, ${name}!`

*/

let nome1 = "João Gabriel"
let nome2 = "Alyne"
function seApresentar(nome){
    return `Eu me chamo ${nome}`
}
console.log(seApresentar(nome1))
console.log(seApresentar(nome2))

function fatorial(n){
    if(n <0){
        return 'inválido'
    }else if(n == 1|| n ==0){
        return 1
    }else{
       
        let resultado = 1
        for( let i = 2; i <=n; i++){
            resultado *=i
        }
        return resultado
    }
}
console.log(fatorial(3))
console.log(fatorial(4))
console.log(fatorial(5))
