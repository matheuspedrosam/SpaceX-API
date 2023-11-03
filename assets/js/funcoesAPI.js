const qs = object => document.querySelector(object)
const cards_containers = qs('#cards-container')

function gerarDivParaLancamentosContainer(id, name, linkImg, data, foguete, descricao){
    cards_containers.innerHTML += `
      <div id="${id}" class="cards">
        <div class="cards-imgs">
          <img id="${id}" src="${linkImg}" alt="Launch Img">
        </div>
        <div id="${id}" class="card content">
            <p>Nome: ${name}</p>
            <p>Data: ${data}</p>
            <p>Foguete: ${foguete}</p>
            <p>Descrição: ${descricao}</p>
        </div>
      </div>
    `
}
  
function formatarLancamentos(data){
  cards_containers.innerHTML = ''

  for(lancamentos of data){
    let linkImg;
    if (!lancamentos.links.patch.large){
      linkImg = 'assets/imgs/em-breve.png'
    } else{
      linkImg = lancamentos.links.patch.large
    }

    let name;
    if(lancamentos.name.length > 13){
      name = `${lancamentos.name.slice(0, 13)}...`
    } else{
      name = lancamentos.name
    }

    let foguete;
    if(lancamentos.rocket.length > 13){
      foguete = `${lancamentos.rocket.slice(0, 13)}...`
    } else{
      foguete = lancamentos.rocket
    }

    let descricao;
    if(lancamentos.details){
      if(lancamentos.details.length > 13){
        descricao = `${lancamentos.details.slice(0, 13)}...`
      } else{
        descricao = lancamentos.details
      }
    } else{
      descricao = 'Em breve...'
    }

    let data = new Date(lancamentos.date_local).toLocaleDateString('pt-BR')

    gerarDivParaLancamentosContainer(lancamentos.name, name, linkImg, data, foguete, descricao)
  }
}