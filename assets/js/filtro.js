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

    removerClasse(ilustracao_busca_nao_encotrada, 'hide')
    removerClasse(btn_voltar, 'hide')
  
    for (lancamento of (cards_containers.children)){
        colocarClasse(lancamento, 'hide')
        if(lancamento.id.toLowerCase() == input_name_filter.value.toLowerCase()){
            removerClasse(lancamento, 'hide')
            colocarClasse(lancamento, 'lancamento-encontrado')
            colocarClasse(ilustracao_busca_nao_encotrada, 'hide')
            removerClasse(btn_voltar, 'hide')
        }
    }
    input_name_filter.value = ''
}

//Função para Limpar a Busca
function limparPesquisa(){
    for (lancamento of (cards_containers.children)){
        removerClasse(lancamento, 'hide')
        removerClasse(lancamento, 'lancamento-encontrado')
    }
    colocarClasse(btn_voltar, 'hide')
    colocarClasse(ilustracao_busca_nao_encotrada, 'hide')
}