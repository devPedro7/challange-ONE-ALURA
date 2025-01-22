//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.


//CRIANDO ARRAY PARA ARMAZENAR OS DADOS
let listaSecreta = []

function adicionarAmigo(){
    //CAPTURANDO O VALOR NO INPUT DA LISTA
    let campoAmigo = document.getElementById('amigo')
    let nomeLista = campoAmigo.value

    console.log('Valor do campo: ' + nomeLista)

    //VALIDAÇÃO PARA QUE O VALOR RECEBIDO DO USUÁRIO NÃO SEJA NULL OU VAZIO
    if(nomeLista == '' || nomeLista == null){
        alert('Insira um nome válido na lista! 🫡')
    }else{
    //INSERINDO OS VALORES DO INPUT NO ARRAY CASO FOR VÁLIDO
        listaSecreta.push(nomeLista)
        console.log('Lista: '+ listaSecreta)
        percorrerListaSectreta()
    }
    campoAmigo.value = '' //LIMPANDO O VALOR DO CAMPO PARA VAZIO APÓS ADICIONAR
}

//FUNÇÃO PARA PERCORRER A LISTA DE AMIGOS E ADICIONAR EM UMA PARTE DA PAGINA
function percorrerListaSectreta(){

    let listaAmigosHTML = document.getElementById('listaAmigos')
    listaAmigosHTML.innerHTML = ''

    let listaHTML = ''

    for(let i = 0; i < listaSecreta.length; i++){
        listaHTML += `<li>Amigo: ${listaSecreta[i]}</li>`
    }

    listaAmigosHTML.innerHTML = listaHTML
}

// SELECIONANDO ALEATORIAMENTE PARA O SORTEIO
function sortearAmigo(){

    // verificando se o array de amigos não está vazio
    if(listaSecreta == null || listaSecreta == undefined){
        alert('A lista não possui valores válidos, possivelmente está vazia.')
        return
    }

    let sorteio = Math.floor(Math.random() * listaSecreta.length)
    console.log(`Amigo sorteado: ${listaSecreta[sorteio]}`)
    

    let mostrarResultado = document.getElementById('resultado')
    mostrarResultado.innerHTML = ''

     mostrarResultado.innerHTML = `<li>Seu amigo secreto sorteado foi: ${listaSecreta[sorteio]}</li>`

     return mostrarResultado
}