// atribuindo o elemento button a uma variavel
const registerButton = document.getElementById('register_button')
// addEventListener - aciona um bloco de código quando ocorrer o evento
registerButton.addEventListener('click', register)

function register(ev){
    // currentTarget - seleciona específicamente o elemento 
    // parentNode - seleciona o elemento 'pai'
    const section = ev.currentTarget.parentNode

    const username = section.children.username.value
    const password = section.children.password.value
    const passwordConfirmation = section.children.passwordConfirmation.value

    // criando condições
    if(password === passwordConfirmation){
        alert('Usuário ' + username + ' cadastrado!') 
    } else {
        alert('As senhas não coincidem!')
    }
}

const deleteEventButton = document.getElementById('remove_button')
deleteEventButton.addEventListener('click', deleteEvent)

// deletando eventos
function deleteEvent(){
    // removeEventListener - remove um evento
    registerButton.removeEventListener('click', register)
    console.log('evento removido.')
}

