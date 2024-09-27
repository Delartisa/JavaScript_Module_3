function addPlayer() {
    // .value retorna o texto do input
    const name = document.getElementById('playerName').value
    const position = document.getElementById('playerPosition').value
    const number = document.getElementById('playerNumber').value
    const confirma = confirm(
        'Você confirma os dados?' +
        '\n\nNome do Jogador: ' + name +
        '\nPosição do Jogador: ' + position +
        '\nNúmero do Jogador: ' + number
    )

    if(confirma === true){
        const playersList = document.getElementById('players-list')

        // padronização das infos. dos jogadores
        const playerInfo = document.createElement('li')
        playerInfo.id = 'player - ' + number // * importante formatar o Id para poder excluí-lo depois
        playerInfo.innerText = position + ': ' + name + ' (' + number + ')'

        playersList.appendChild(playerInfo)

        // limpando os inputs
        document.getElementById('playerName').value = ''
        document.getElementById('playerPosition').value = ''
        document.getElementById('playerNumber').value = ''
    }
}
    

function removePlayer() {
    const playersList = document.getElementById('players-list')

    const number = document.getElementById('playerRemoved').value
    const playerRemoved = document.getElementById('player - ' + number) // armazenando o Id do jogador a ser excluído
    const confirma = confirm('Você tem certeza que quer excluir o jogador n° ' + number + '?')

    if(confirma === true){
        playersList.removeChild(playerRemoved)
        document.getElementById('playerRemoved') = '' // limpando os inputs
    }
}