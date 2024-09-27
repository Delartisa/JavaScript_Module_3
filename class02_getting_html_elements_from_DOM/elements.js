function show() {
    // *Obtendo elementos pelo Id
    const contactList = document.getElementById('contact-list')
    console.log(contactList)

    // *Obtendo os elementos de lista do html
    const listElements = document.getElementsByTagName('li')
    console.log(listElements)

    // *Obtendo elementos pelo nome da classe
    const contactImputs = document.getElementsByClassName('contact-input')
    console.log(contactImputs)

    // *Obtendo elementos específicos
    const especificElements = document.querySelectorAll('#contact-list > li > label')
    console.log(especificElements)

    // *Obtendo elementos pelo nome
    const contatoUm = document.getElementsByName('contact1')
    console.log(contatoUm)

    // *Obter um único elemento
    const firstContact = document.querySelector('#contact-list > li > label')
    console.log(firstContact)
}