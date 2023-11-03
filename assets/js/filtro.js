const input_name_filter = qs("#name-filter")
const ilustracao_busca_nao_encotrada = qs('#ilustracao-busca-nao-encotrada')
const btn_voltar = qs("#btn-voltar")


//Evento de Pressionar Enter e chamar a função Buscar Lançamento
input_name_filter.addEventListener('keyup', (event) => {
    if(event.key == 'Enter'){
      buscarLancamento()
    }
})

//Função para Buscar Lançamento pesquisado
function buscarLancamento(){
    if(!input_name_filter.value){
        alert("Campo Vazio!")
        return
    }

    ilustracao_busca_nao_encotrada.classList.remove('hide')
    btn_voltar.classList.remove('hide')
  
    for (lancamento of (cards_containers.children)){
        lancamento.classList.add('hide')
        if(lancamento.id.toLowerCase() == input_name_filter.value.toLowerCase()){
            lancamento.classList.remove('hide')
            lancamento.classList.add('lancamento-encontrado')
            ilustracao_busca_nao_encotrada.classList.add('hide')
            btn_voltar.classList.remove('hide')
        }
    }
    input_name_filter.value = ''
}

//Função para Limpar a Busca
function limparPesquisa(){
    for (lancamento of (cards_containers.children)){
        lancamento.classList.remove('hide')
        lancamento.classList.remove('lancamento-encontrado')
    }
    btn_voltar.classList.add('hide')
    ilustracao_busca_nao_encotrada.classList.add('hide')
}