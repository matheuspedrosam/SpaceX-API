// EVENTO DE MUDAR VISUALIZAÇÃO DE LANÇAMENTOS ENTRE PASSADOS E FUTUROS ->

//Função para evitar que ao trocar entre lançamentos fique a imagem e o botão de voltar (da pesquisa não encontrada)
function removerBuscaNaoEncontrada(){
    ilustracao_busca_nao_encotrada.classList.add('hide')
    btn_voltar.classList.add('hide')
}

const btnUltimosLancamentos = qs("#btn-ultimos-lancamentos")
const btnProximosLancamentos = qs("#btn-proximos-lancamentos")
const containerBtnsLancamentos = qs("#btns-trocar-lancamentos-container")

containerBtnsLancamentos.addEventListener('click', (e) => {

  if(e.target.id == "btn-ultimos-lancamentos"){
    if(!e.target.classList.contains("btn-selected")){
      btnUltimosLancamentos.classList.add("btn-selected")
      btnProximosLancamentos.classList.remove("btn-selected")
      formatarLancamentos(dataPast)
      qs("#title").innerHTML = 'PAST ROCKET LAUNCHES'

      removerBuscaNaoEncontrada()
    }

  } else if(e.target.id == "btn-proximos-lancamentos"){
    if(!e.target.classList.contains("btn-selected")){
      btnProximosLancamentos.classList.add("btn-selected")
      btnUltimosLancamentos.classList.remove("btn-selected")
      formatarLancamentos(dataUpcoming)
      qs("#title").innerHTML = 'UPCOMING ROCKET LAUNCHES'

      removerBuscaNaoEncontrada()
    }
  }
})