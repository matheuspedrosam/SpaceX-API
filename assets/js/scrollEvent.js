const botaoScrollTop = qs("#botao-scroll-top-container")

document.addEventListener("scroll", () => {
  if(document.documentElement.scrollTop > 300){
    removerClasse(botaoScrollTop, "hide-btnScroll")
  } else{
    colocarClasse(botaoScrollTop, "hide-btnScroll")
  }
})

botaoScrollTop.addEventListener('click', ()=>{
  document.documentElement.scrollTo(0, 0)
})