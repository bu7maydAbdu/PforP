const burgerMenuLogo = document.querySelector(".burgerMenu ")
const menu = document.querySelector(".mobileSideMenu")
const crossBtn = document.querySelector(".fa-xmark")
const deletePostBtn = document.querySelector(".delete-post")

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

deletePostBtn.addEventListener("click", deletePostModal)

function deletePostModal({
     
}



// profile pic click 

// const avatar = document.querySelector(".avatar")

// avatar.addEventListener("click", toggleProgileMenu)


// function toggleProgileMenu(){
    
// }




//intersection oberver


const cards = document.querySelectorAll(".post-card")

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    entry.target.classList.toggle("show", entry.isIntersecting)
    // if(entry.isIntersecting) observer.unobserve(entry.target)
  })
},
{
  threshold : 1,
  // root : "",
  // rootMargin : "100px"
})

// const bottomCardObsrver = new IntersectionObserver(entries => {
//   const bottomCard = entries[0]
//   if(!bottomCard.isIntersecting) return
//   loadMoreCards()
// })
//  bottomCardObsrver.observe(document.querySelector(".post-card:last-child"))
// cards.forEach(card => {
//   observer.observe(card)

// })

