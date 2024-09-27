function addInput() {
    const ul = document.getElementById('inputs')

    // createElement para criar um novo elemento, seu primeiro parametro é sempre uma TAG
    const newLi = document.createElement('li')
    newLi.className = ('list-item') // className para definir o nome da classe
    newLi.innerText = ('Novo comentário: ') // innerText para definir um texto dentro da tag LI

    const newInput = document.createElement('input')
    newInput.type = ('text') // Type para definir o tipo do input
    newInput.name = ('input') // name para definir o nome do input

    // Para funcionar corretamente, é necessário aninhar os elementos para nao ficarem soltos na página, comece do mais interno para o mais externo

    // appendChild para adicionar 'filhos' a uma tag
    newLi.appendChild(newInput)
    ul.appendChild(newLi)
}