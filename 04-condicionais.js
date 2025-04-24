/*
CONDIONAIS ENVOLVENDO - IF, ELSE IF E ELSE, TERNÁRIOS, SWITCH CASE E BOAS PRÁTICAS

•IF: cria a primeira condição: 
if(tal condição ocorrer){
    faça isso
}

•ELSE IF: cria outras condições para caso a primeira condição for falsa.
if(falso){
    x
}else if(se essa condição ocorrer){
    faça isso
}

•ELSE: caso todas as anteriores forem faça execute isso.
if(condição = false){
    x
}else if(condição = false){
    x
}else{
    faça isso
}

OBS: podemos ter vários else if, mas apenas um if e um else.

----------------------------------TERNÁRIOS----------------------------------
Já a operação ternária é uma forma simplifica de fazer um if-else.
Ela funciona da seguinte forma:
Condição 1 ? se sim, faça isso : se não, faça isso
-------------------------------SWITCH CASE------------------------------
É semelhante ao if else, porém avalia um valor exato com opções FIXAS.
switch(parâmetro){
    case 'opção1':
        faça isso
        break
    case 'opção2':
    case 'opção3':
        faça isso
        break
    case 'opção4':
        faça isso
        break
    default:
        faça isso
}
OBS: deve possuir um default que ocorrerá quando as opções anteriores forem inválidas.

Temos algumas opções de boas práticas:
01 - Evitar condições desnecessárias
ex: if(isTrue === true){}
pode se tornar if(isTrue){} quando a variável for verdadeira, isto é, ela tem que ser diferente de false, falsy, null, undefined, 0, '',NaN...

02 - Não ficar fazendo várias condicionais com else if, pois pode ser simplificado com switch case, o que deixa o código mais legível

03 - Lembre-se de que há a possibilidade de juntar comparadores lógicos quando uma estrutura for se repetir:
if(condicao1 == 'x'){
    console.log('parabens')
}else if(condicao2 == 'y'){
    console.log('parabens')
}
Ambos mostram parabens e poderiam ser substituidos por:
if(condição1 == 'x' || condição2 == 'y'){consoloe.log('parabens')}

04 - Evite usar ternários para códigos grandes pois dificulta o entendimento do código.

05 - Sempre colocar um default ao final do switch case para que haja um retorno
*/

