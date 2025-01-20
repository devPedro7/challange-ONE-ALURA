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
    }
    campoAmigo.value = '' //LIMPANDO O VALOR DO CAMPO PARA VAZIO APÓS ADICIONAR
    
}