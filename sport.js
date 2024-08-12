// Img selectors
let img4 = document.querySelector("#cardimgtop4")
let img5 = document.querySelector("#cardimgtop5")
let img6 = document.querySelector("#cardimgtop6")


 // Event listeners so the new images can pop out
img4.addEventListener("mouseover", function(event){
  img4.src = "knick2.jpg"
})

img4.addEventListener("mouseout", function(event){
  img4.src = "knicks.png"
})

// Event listeners so the new images can pop out
img5.addEventListener("mouseover", function(event){
  img5.src = "yankee2.jpg"
})

img5.addEventListener("mouseout", function(event){
  img5.src = "Yankee.png"
})


// Event listeners so the new images can pop out
img6.addEventListener("mouseover", function(event){
  img6.src = "cowoboy2.jpg"
})

img6.addEventListener("mouseout", function(event){
  img6.src = "Cowboys.png"
})
