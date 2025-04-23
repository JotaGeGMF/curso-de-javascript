/*
COMENTÁRIOS - BLOCO E LINHA
CONSOLE.LOG()
TIPOS DE DADOS
*/

//Comentário de linha em javascript
/*
Comentário de bloco
OBS: ambos podem ser vistos no DevTools pelos usuários.
*/

console.log("Hello world! Eu sou a função responsável por mostrar coisas no terminal.")

/* 
Podemos ter o seguintes tipos de dados em javascript:
- String: conjuntos de caracteres que ficam entre aspas (simples, duplas ou crases).
- number: números, eles podem ser inteiros (int) ou reais (float).
- boolean: verdadeiro ou falso (TRUE/FALSE -> 1/0).
- null: é um valor vazio.
- undefined: é um valor que ainda não foi definido. 
*/

let meuNome = "João Gabriel"
let meuSobrenome = 'Gonçalves Maciel Ferreira'
let nomeDaMinhaMae = `Alyne`

console.log(`${meuNome} ${meuSobrenome} e sou filho da ${nomeDaMinhaMae}.`)//Isto é o que chamamos de template strings. Aonde podemos alocar variáveis anteriores de forma simples.

let numeroPar = 2
let numeroImpar = 3
let numeroFlutuante = 3.121314151617

let falso = false
let verdadeiro = true

console.log(1 + 3 == 5 )//False, pois 1 + 3 é diferente de 5.
console.log(2*5==10)//True, pois 2 vezes 5 é 10.

let valorNulo = null
console.log(valorNulo)

let valorIndefinido //A variável foi inicializada, porém, não recebeu nenhum valor ainda.
console.log(valorIndefinido)

//-----------------------------PRÁTICA-----------------------------
/*
Crie um código que:

Guarde em variáveis os seguintes dados:
Seu nome completo
Sua idade
Se você é maior de idade (boolean)
Sua altura em metros (com casas decimais)
Um valor null representando algo que você ainda não tem (ex: carro, emprego, etc.)
Um valor undefined para algo que ainda vai ser definido no futuro (ex: salário)

Imprima no console uma mensagem com template string, dizendo:
"Olá, meu nome é [nome] e eu tenho [idade] anos. Sou maior de idade? [true/false]"

Imprima também no console:
O tipo de cada uma das variáveis usando typeof.
*/
console.log('-----------------------------PRÁTICA-----------------------------')
const nomeCompleto = "João Gabriel Gonçalves Maciel Ferreira"
let idade = 21
const maiorDeIdade = true
const alturaEmMetros = 1.74
let temCarro = null
let salário

console.log(`Olá, meu nomé é ${nomeCompleto} e eu tenho ${idade} anos. Sou maior de idade? ${maiorDeIdade}.`)

console.log(typeof nomeCompleto)
console.log(typeof idade)
console.log(typeof maiorDeIdade)
console.log(typeof alturaEmMetros)
console.log(typeof temCarro)
console.log(typeof salário)