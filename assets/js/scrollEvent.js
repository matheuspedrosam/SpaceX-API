const botaoScrollTop = qs("#botao-scroll-top-container")

document.addEventListener("scroll", () => {
  if(document.documentElement.scrollTop > 300){
    botaoScrollTop.classList.remove("hide-btnScroll")
  } else{
    botaoScrollTop.classList.add("hide-btnScroll")
  }
})

botaoScrollTop.addEventListener('click', ()=>{
  document.documentElement.scrollTo(0, 0)
})