# JS | 3 UNIDADE - DOM

# Eventos no HTML
Eventos são formas dinâmicas de utilizar o js em uma página HTML.

1. OnMouseEnter
é acionada quando o mouse passa por cima do elemento.

2. OnChange
é acionado quando há alteração do elemento. 
* esse evento só é atualizado quando o user clica fora do elemento.

3. OnFocus
é acionado a cada vez que o user foca (clica/usa o tab) no elemento.

4. OnBlur
é acionado quando o user sai de foco de um elemento.

5. OnClick
é acionado quando o user clica em um elemento. Diferente do OnMouseEnter e OnFocus, esse não é acionado quando o mouse passa por cima, apenas funciona ao clique.

**Como escrever esses códigos pelo HTML é bem mais difícil, usamos uma função com o mesmo nome do evento e atribuímos dentro das aspas do evento**

# DOM - Document Object Model
Permite que um documento escrito em uma linguagem de marcação (html, xml etc) seja acessado pelo javascript.

Sua interação funciona na seguinte hierarquia:

javascript -> DOM -> HTML

# Como obter elementos HTML do DOM

**Importante: o NodeList permite o uso de métodos, já o HTMLElements não.**

1. getElementById - HTMLElement
Usado para obter elementos pelo seu Id.

Ex: document.getElementById('<nome_do_id>')

2. getElementsByTagName - HTMLElement
Usado para obter elementos pela sua tag.

Ex: document.getElementsByTagName('<nome_da_tag>')

3. getElementsByClassName - HTMLElement
Usado para obter elementos pelo nome da classe.

Ex: document.getElementsByClassName('<nome_da_classe>')

4. querySelectorAll - NodeList
Usado para obter elementos específico.
*Sintaxe semelhante ao CSS.
*Retorna formato de lista
*Retorna todos os elementos que tiverem o mesmo nome

Ex: document.querySelectorAll('nome_elemento_mais_externo > nome_elemento_mais_interno')

**Use . para ref. classes e # para Id**

5. getElementsByName - NodeList
Usado para obter elementos pelo nome.

Ex: document.getElementsByName('<nome_do_elemento>')

6. querySelector
Usado para obter um único elemento.
*Retorna apenas o primeiro elemento 

Ex: document.querySelector('<nome_do_elemento>')

# Criando novos elementos no DOM

Para criar um elemento, é necessário definir variaveis para armazenar os elementos e, após isso, aninhá-los, do mais interno para o mais externo. Veja a seguir alguns exemplos:

document.createElement('<tag_do_elemento>') -> para criar novos elementos

para elementos já estabelecidos:
.className -> para definir a classe do elemento
.innerText -> para definir uma mensagem-texto no elemento
.type -> para definir o tipo do elemento
.name -> para definir o nome do elemento
.appendChild -> para adicionar 'filhos' a uma tag (aninhamento)

**Ao utilizar innerHTML, esteja ciente que ele deixará brechas para users maldosos aplicarem scrips maliciosos. Em todo caso, evite usar.**

Para maiores exemplos, vide a pasta class03_creating_new_elements_in_DOM.

# metodos no DOM

addEventListener
1 para