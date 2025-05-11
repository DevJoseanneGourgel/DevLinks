function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

// Outra forma de fazer
/*   if(html.classList.contains('light')) {
    // If light mode is enabled, switch to dark mode
    html.classList.remove('light')
  } else {
    // If dark mode is enabled, switch to light mode
    html.classList.add('light')
  } */
 
  // Pegar a tag img
  const img = document.querySelector("#profile img")
  // Se a light mode estiver ativada, adicionar a imagem de light mode
  if(html.classList.contains('light')) {
   img.setAttribute('src', './assets/avatarG.png')
    // Se não, manter a light mode
  } else {
    img.setAttribute('src', './assets/avatarJ.png')
    
  }

  

 
}