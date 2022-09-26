const burgerMenuLogo = document.querySelector(".burgerMenu ")
const menu = document.querySelector(".mobileSideMenu")
const crossBtn = document.querySelector(".fa-xmark")

burgerMenuLogo.addEventListener("click", displayMenu)

function displayMenu(){
  menu.style.display = "block"
  burgerMenuLogo.style.color = "transparent"
}


crossBtn.addEventListener("click", closeMenu )

function closeMenu(){
  menu.style.display = "none"
  burgerMenuLogo.style.color = "black"   
    
}



// profile pic click 

const avatar = document.querySelector(".avatar")

avatar.addEventListener("click", toggleProgileMenu)


function toggleProgileMenu(){
    
}


