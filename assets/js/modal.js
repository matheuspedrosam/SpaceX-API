const modal = qs("#modal")

function gerarModal(idVideo, descricao){
  modal.innerHTML = `
    <div id="video">
      <div id="video-area">
          <iframe src="https://www.youtube.com/embed/${idVideo}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
    <p>${descricao}</p>
    <button id="btn-sair-modal" class="btn-azul" onclick="fecharModal()">Sair</button>  
  `
}

cards_containers.addEventListener("click", (e)=>{
    for (lancamentos of allData){
        if(e.target.id === lancamentos.name || e.target.parentNode.id === lancamentos.name){
            document.documentElement.scrollTo(0, 0)
            removerClasse(modal, "hide")
            colocarClasse(document.body, "overflow-hidden")
            lancamentos.details == null ? lancamentos.details = "Sem descrição" : null
            gerarModal(lancamentos.links.youtube_id, lancamentos.details)
        }
    }
})

function fecharModal(){
    modal.innerHTML = ""
    colocarClasse(modal, "hide")
    removerClasse(document.body, "overflow-hidden")
}