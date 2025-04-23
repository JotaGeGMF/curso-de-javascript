/*
OPERADORES E TIPOS
*/

/*-------------------------OPERADORES ARITMÉTICOS-------------------------
São operadores responsáveis por fazer operações matemáticas. Eles funcionam da mesma forma que vimos na escola.
+ adição
- subtração
* multiplicação
/ divisão
% resto de divisão
*/ 

let numero1 = 20
let numero2 = 30

console.log('Adição:', numero1 + numero2)
console.log('Subtração:', numero2 - numero1)
console.log('Multiplicação:', numero1 * numero2 )
console.log('Divisão:', (numero1/numero2).toFixed(2))
console.log('Resto de divisão:', numero2%numero1)

/*------------------------OPERADORES COMPARATIVOS-------------------------
São operadores responsáveis por fazer comparações entre duas sentenças, retornando um boolean.
== igual (compara dois valores)
=== estritamente igual (compara dois valores, tanto o valor quanto o tipo do valor)
!= diferente (confere se dois valores são diferentes entre si)
!== estritamente diferente (confere se dois valores são diferente e se seus tipos também são)
> maior que
< menor que
>= maior ou igual que 
<= menor ou igual que
*/

let a = 10
let b = 20
let c = '10'
let d = '20'

console.log(a == b)//10 == 20 F
console.log(a == c)//10 == '10' T
console.log(a === c)//10 === '10' F
console.log(b != d)//20 != '20' F
console.log(b !== d)// 20 !== '20' T
console.log(a > b)//10>20 F
console.log(a<=20)//10 <= 20 T
console.log(b >= a)//20 >= 10 T


