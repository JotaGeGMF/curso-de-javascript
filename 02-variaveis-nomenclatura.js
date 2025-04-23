/*
DECLARAR VARIÁVEIS E BOAS PRÁTICAS DE NOMEAÇÃO

•VAR - atualmente está em desuso pois não respeita a declaração em bloco. O que isso quer dizer? Que ao declarar uma variável dentro de um bloco (if,while, for, functions...), você ainda consegue acessá-la globalmente.

•LET - é utilizada para declarar variáveis que podem sofrer alteração no futuro. Também é uma variável que pode ser declarada sem algum valor.

•CONST - é uma variável que não pode ser alterada posteriormente e, por conta disso, deve obrigatoriamente ser inicializada com algum valor.

BOAS PRÁTICAS DE NOMENCLATURA:
Geralmente, usa-se a convenção do camelCase. Também é importante saber colocar nomes descritivos.

•Arquivos: nome-do-arquivo.js
•Funções: camelCase -> function nomeDaFuncao()
•Variáveis: camelCase -> let minhaVariavel;

*/

//-------------------------EXEMPLOS-------------------------
//Acessando a variável que foi criada dentro do bloco
var count = 1;
while(count < 10){
    var table = 10
    count++
}
table += 20
console.log(table)
//OBS: se o var fosse substituído por let/const, a aplicação daria erro, pois são variáveis de bloco.

//Criando uma variável que vai poder ser alterada posteriormente.
let minhaIdade = 20
minhaIdade += 1

//Há um erro ao tentar alterar o valor de uma constante:
//TypeError: Assignment to constant variable.
const minhaAltura = 1.70
//minhaAltura += 0.04
console.log(minhaAltura)

//-------------------------EXERCÍCIOS-------------------------
/*
Escopos e Declarações de Variáveis
Objetivo: Entender escopo global, escopo de função e escopo de bloco, além de usar corretamente let, const e var.

Regras e instruções:
01)Crie uma variável global chamada mensagemGlobal com o valor "Sou global!" (use var de propósito).

02)Crie uma função chamada minhaFuncao() que:
a - Tente acessar e mostrar mensagemGlobal.
b - Crie uma variável com const chamada mensagemFuncao com o valor "Sou da função!" e mostre no console.

03)Dentro da função, crie um bloco if (true) que:
a - Crie uma variável mensagemBloco com let, com o valor "Sou do bloco!".
b - Mostre mensagemBloco no console.

04)Fora da função, tente acessar:
a - mensagemFuncao
b - mensagemBloco
c - E veja o que o console diz.
*/

var mensagemGlobal = "Sou global!!!";

function minhaFuncao(){
    console.log(mensagemGlobal)
    const mensagemFuncao = "Sou da função!!!"

    if(true){
        let mensagemBloco = "Sou do bloco!!!"
    }
   //console.log(mensagemBloco)não consegue acessar esta mensagem pois foi declarada com let, que respeita o bloco
}
minhaFuncao()

//console.log(mensagemFuncao) também não é possível acessar a mensagemFunção pois foi declarada com const dentro do escopo de uma função. Só seria possível acessar esta mensagem caso ela fosse o retorno da função. 

console.log(a)
var a = 10