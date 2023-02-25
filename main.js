let form_validado = true
let send = document.querySelector('#send')
let erro = document.getElementsByClassName('campo-obrigatorio')

array_erro = Array.from(erro)

const form = document.querySelector('form')
array_inputs = Array.from(form.elements)

function valid_form(){
    array_inputs.forEach((input, index) => {
    if(input.value == ''){
        form_validado = false 
        array_erro[index].style = 'visibility: visible'
    }

    if(form_validado){
        send.innerHTML = 'Cadastro efetuado com sucesso!'
        send.style = 'visibility: visible; color: #15e05c'
    }else{
        send.innerHTML = 'Não foi possível efetivar seu cadastro!'
        send.style = 'visibility: visible; color: #e33d3df2'
    }})}


function show() {
        document.getElementById('quem').hidden = false;
    }       