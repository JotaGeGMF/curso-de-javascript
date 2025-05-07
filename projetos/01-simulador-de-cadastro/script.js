const form = document.querySelector("form")
form.addEventListener('submit',function(event){
    event.preventDefault()
    const nome = document.getElementById('nome').value
    const idade = document.getElementById('idade').value
    const profissao = document.getElementById('profissao').value

    console.log(nome,idade,profissao)
})