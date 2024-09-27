function register(element) {
    // element - coleta x elemento
    // children - coleta o elemento filho 
    // escreva o identificador do elemento
    // value - armazena o valor
    const username = element.children.username.value
    const password = element.children.password.value  
    const passwordConfirmation = element.children.passwordConfirmation.value  

    console.log({username, password, passwordConfirmation})
}