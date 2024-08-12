// Img selectors
let img10 = document.querySelector("#cardimgtop10")
let img11 = document.querySelector("#cardimgtop11")
let img12 = document.querySelector("#cardimgtop12")

// Event listeners so the new images can pop out
img10.addEventListener("mouseover", function(event){
  img10.src = "hamilton2.jpg"
})

img10.addEventListener("mouseout", function(event){
  img10.src = "Hamilton.jpg"
})

// Event listeners so the new images can pop out
img11.addEventListener("mouseover", function(event){
  img11.src = "lion2.jpg"
})

img11.addEventListener("mouseout", function(event){
  img11.src = "Lion.png"
})


// Event listeners so the new images can pop out
img12.addEventListener("mouseover", function(event){
  img12.src = "aladdin2.jpg"
})

img12.addEventListener("mouseout", function(event){
  img12.src = "Aladdin.jpg"
})