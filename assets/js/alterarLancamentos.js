// EVENTO DE MUDAR VISUALIZAÇÃO DE LANÇAMENTOS ENTRE PASSADOS E FUTUROS ->

//Função para evitar que ao trocar entre lançamentos fique a imagem e o botão de voltar (da pesquisa não encontrada)
function removerBuscaNaoEncontrada(){
    colocarClasse(ilustracao_busca_nao_encotrada, 'hide')
    colocarClasse(btn_voltar, 'hide')
}

const btnUltimosLancamentos = qs("#btn-ultimos-lancamentos")
const btnProximosLancamentos = qs("#btn-proximos-lancamentos")
const containerBtnsLancamentos = qs("#btns-trocar-lancamentos-container")

containerBtnsLancamentos.addEventListener('click', (e) => {

  if(e.target.id == "btn-ultimos-lancamentos"){

    if(!e.target.classList.contains("btn-selected")){
      colocarClasse(btnUltimosLancamentos, 'btn-selected')
      removerClasse(btnProximosLancamentos, "btn-selected")
      qs("#title").innerHTML = 'PAST ROCKET LAUNCHES'
      
      formatarLancamentos(dataPast)
      removerBuscaNaoEncontrada()
    }

  } else if(e.target.id == "btn-proximos-lancamentos"){

    if(!e.target.classList.contains("btn-selected")){
      colocarClasse(btnProximosLancamentos, "btn-selected")
      removerClasse(btnUltimosLancamentos, "btn-selected")
      qs("#title").innerHTML = 'UPCOMING ROCKET LAUNCHES'

      formatarLancamentos(dataUpcoming)
      removerBuscaNaoEncontrada()
    }

  }
})