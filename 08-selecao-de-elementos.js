/*
Para fazer a seleção dos elementos HTML, temos o seguintes métodos:
getElementById()
getElementByClassName()
getElementByTagName()
querySelector()
querySelectorAll()
*/
//Uma HTMLCollection pode se tornar um array

//getElementById('id') -> retorna apenas um único elemento pelo id.
const titulo = document.getElementById('titulo-do-texto')
const idade = document.getElementById('idade')

//getElementsByClassName('classe') -> retorna uma HTMLCollection de elementos de mesma classe

const parargrafos = document.getElementsByClassName("paragrafos")

//document.getElementsByTagName('tag')-> retorna uma HTMLCollection com todos os elementos da tag selecionada.

const lis = document.getElementsByTagName('li')

//querySelector('seletor') -> retorna o primeiro elemento que combinar com o seletor css

const subtitulo = document.querySelector('#sub')

//querySelectorAll('seletor") -> retorna uma node lista com todos os elementos 
const btn = document.querySelectorAll('.btn')

/*
DESAFIO 01 
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Perfil de Usuário</title>
</head>
<body>
  <h1 id="titulo">Perfil</h1>

  <p class="info">Nome: <span id="nome">Desconhecido</span></p>
  <p class="info">Idade: <span id="idade">0</span></p>

  <ul class="interesses">
    <li>Programação</li>
    <li>Jogos</li>
    <li>Música</li>
  </ul>

  <button class="btn">Atualizar Dados</button>
  <button class="btn">Limpar Dados</button>

  <script src="script.js"></script>
</body>
</html>

🧠 JS (script.js)
Desafio 1: Altere o texto do título para "Perfil de João".
Desafio 2: Altere o nome e idade com getElementById.
Desafio 3: Mude a cor de fundo de todos os <p> com getElementsByClassName.
Desafio 4: Coloque a palavra “♥” no final de cada <li> usando getElementsByTagName.
Desafio 5: Mude o texto do primeiro botão para "Salvar" com querySelector.
Desafio 6: Mude a cor de fundo de todos os botões para azul com querySelectorAll.
*/



const tituloDesafio = document.getElementById('titulo')
const nomeDesafio = document.getElementById('nome')
const idadeDesafio = document.getElementById('idade')
const paragrafosDesafio = document.getElementsByClassName('info')
const lisDesafio = document.getElementsByTagName('li')
const botaoDesafio = document.querySelector(".btn")
const botoesDesafio = document.querySelectorAll(".btn")

tituloDesafio.innerText = "Perfil de João"
nomeDesafio.innerText = "João Gabriel"
idadeDesafio.innerText = "21"
paragrafosDesafio.style("backgroundcolor: blue")
lisDesafio.innerText

botaoDesafio.innerText = "Salvar"
botoesDesafio.style("backgroundColor: blue")



