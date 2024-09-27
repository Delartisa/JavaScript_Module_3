function addContact() {
    const contactsList = document.getElementById('contacts-list')

    const h3 = document.createElement('h3')
    h3.innerText = 'Contato'

    const ul = document.createElement('ul')

    const nameLi = document.createElement('li')
    nameLi.innerText = 'Nome: '
    const nameInput = document.createElement('input')
    nameInput.type = 'text'
    nameInput.name = 'fullName'

    nameLi.appendChild(nameInput)
    ul.appendChild(nameLi)
    ul.appendChild(document.createElement('br'))

    const phoneLi = document.createElement('li')
    phoneLi.innerText = 'Telefone: '
    const phoneInput = document.createElement('input')
    phoneInput.type = 'text'
    phoneInput.name = 'phoneNumber'

    phoneLi.appendChild(phoneInput)
    ul.appendChild(phoneLi)
    ul.appendChild(document.createElement('br'))
    // é possível criar um novo elemento diretamente no elemento 'pai'

    const addressLi = document.createElement('li')
    addressLi.innerText = 'Endereço: '
    const addressInput = document.createElement('input')
    addressInput.type = 'text'
    addressInput.name = 'address'

    addressLi.appendChild(addressInput)
    ul.appendChild(addressLi)
    ul.appendChild(document.createElement('br'))

    contactsList.append(h3, ul)
    // usamos append para adicionar mais de um elemento de uma vez 
}

function removeContact() {
    const contactsList = document.getElementById('contacts-list')
    const titles = document.getElementsByTagName('h3')
    const contacts = document.getElementsByTagName('ul')

    contactsList.removeChild(titles[titles.length - 1])
    contactsList.removeChild(contacts[contacts.length - 1])
}