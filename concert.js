// Img selectors
let img7 = document.querySelector("#cardimgtop7")
let img8 = document.querySelector("#cardimgtop8")
let img9 = document.querySelector("#cardimgtop9")

// Event listeners so the new images can pop out
img7.addEventListener("mouseover", function(event){
  img7.src = "pp.jpg"
})

img7.addEventListener("mouseout", function(event){
  img7.src = "peso.jpg"
})

// Event listeners so the new images can pop out
img8.addEventListener("mouseover", function(event){
  img8.src = "Travy.jpg"
})

img8.addEventListener("mouseout", function(event){
  img8.src = "travyfish.webp"
})



// Event listeners so the new images can pop out
img9.addEventListener("mouseover", function(event){
  img9.src = "kyle.jpg"
})

img9.addEventListener("mouseout", function(event){
  img9.src = "Kylee.jpg"
})