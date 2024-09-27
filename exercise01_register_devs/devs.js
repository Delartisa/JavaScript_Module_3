const form = document.getElementById('devForm')


// botão adicionar tecnologias
const addTechnologies = document.getElementById('addTechnologies')
addTechnologies.addEventListener('click', createTechnologies)

function createTechnologies(ev) {
    ev.preventDefault()

    const list = document.getElementById('technologies_list')
    const ul = document.createElement('ul')

    const nameLi = document.createElement('li')
    nameLi.innerText = 'Tecnologia: '
    const nameIn = document.createElement('input')
    nameIn.type = 'text'
    nameIn.name = 'technologie'

    const years_02_li = document.createElement('li')
    years_02_li.innerText = '0-2 anos'
    const years_02_in = document.createElement('input')
    years_02_in.type = 'radio'
    years_02_in.name = 'workYears'

    const years_34_li = document.createElement('li')
    years_34_li.innerText = '3-4 anos'
    const years_34_in = document.createElement('input')
    years_34_in.type = 'radio'
    years_34_in.name = 'workYears'

    const years_5_li = document.createElement('li')
    years_5_li.innerText = '5+ anos'
    const years_5_in = document.createElement('input')
    years_5_in.type = 'radio'
    years_5_in.name = 'workYears'

    nameLi.appendChild(nameIn)
    years_02_li.appendChild(years_02_in)
    years_34_li.appendChild(years_34_in)
    years_5_li.appendChild(years_5_in)
    ul.append(nameLi, years_02_li, years_34_li, years_5_li)
    list.appendChild(ul)
}
