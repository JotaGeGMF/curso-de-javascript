/*
ARRAYS,LOOPS E ALGUNS MÉTODOS
Arrays são listas que armazenam valores. Eles são numerados por índices, que começam com 0.
                             0        1           2         3
ex: const listaMercado = ['arroz', 'feijão', 'macarrão','patinho']
listaMercado[2] = 'macarrão'

MÉTODOS:
📦Manipulação Direta
•push(): Adiciona um item no final do array.
•pop(): Remove o último item do array.
•unshift(): Adiciona um item no início do array.
•shift(): Remove o primeiro item do array.
•splice(i, n): Remove ou insere itens a partir do índice i, removendo n elementos.
•slice(i, j): Retorna uma cópia entre os índices i e j (não altera o original).

🔍 Busca e Verificação
•includes(valor): Verifica se o valor existe no array.
•indexOf(valor): Retorna o índice da primeira ocorrência do valor.
•lastIndexOf(valor): Retorna o índice da última ocorrência do valor.
•find(callback): Retorna o primeiro item que satisfaz a condição fornecida.
•findIndex(callback): Retorna o índice do primeiro item que satisfaz a condição fornecida.
•some(callback): Verifica se algum item satisfaz a condição.
•every(callback): Verifica se todos os itens satisfazem a condição.

🔄 Transformação e Iteração
•map(callback): Transforma cada item e retorna um novo array.
•filter(callback): Filtra e retorna um novo array com itens que passaram no teste.
•reduce(callback, valorInicial): Reduz o array a um único valor (exemplo: soma ou média).
•forEach(callback): Executa uma função para cada item (não retorna nada).

🧠 Ordenação e Organização
•sort(): Ordena os elementos (por padrão, como strings).
•reverse(): Inverte a ordem dos elementos do array.

🔗 Juntar e Dividir
•join(separador): Junta todos os itens do array em uma string, separados pelo separador.
•concat(): Junta dois ou mais arrays, retornando um novo array.
*/



//01 -Crie um array vazio e adicione 3 nomes
let arr1 = []
arr1.push("João","Gabriel","Gonçalves")
console.log(arr1)

//02 - Remova o último elemento de um array
let arr2 = [0,1,2,3,4,5]
arr2.pop()
console.log(arr2)

//03 - Adicione um novo nome no início do array
let arr3 = ["Marcos","Otávio","Mesquita"]
arr3.unshift("Abreu")
console.log(arr3)

//04 - remova o primeiro elemento de um array
let arr4 = ["A","B","C","D"]
arr4.shift()
console.log(arr4)

//05 - remova o segundo elemento do array por outro nome
let arr5 = ["A", "B","C","D","E","F"]
arr5.splice(1,1,"ASDASD")
console.log(arr5)

//06 - crie uma cópia dos dois primeiros elementos do array
let arr6 = [1,2,3,4,5,6,7,8,9,10]
let arr6666 = arr6.slice(0,2)
console.log(arr6666)

//07 - Veja se um nome está no array
let arr7 = ["AS","BS","CS","DS","ES"]
console.log(arr7.includes("BS"))
console.log(arr7.includes("DaS"))