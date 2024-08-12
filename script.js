// img and par selectors
let par = document.getElementsByClassName("para")
let img = document.querySelector("#cardimgtop1")
let img2 = document.querySelector("#cardimgtop2")
let img3 = document.querySelector("#cardimgtop3")

for(let i = 0; i<par.length;i++){
par[i].addEventListener("mouseover", function(event){
  par[i].style.color = "blue";
});
  //event listener for par
par[i].addEventListener("mouseout", function(event){
  par[i].style.color = "white";
});
};
// Event listeners so the new images can pop out
img.addEventListener("mouseover", function(event){
  img.src = "knick2.jpg"
})

img.addEventListener("mouseout", function(event){
  img.src = "knicks.png"
})

// Event listeners so the new images can pop out
img2.addEventListener("mouseover", function(event){
  img2.src = "veeze2.jpg"
})


img2.addEventListener("mouseout", function(event){
  img2.src = "Veeze.jpg"
})

// Event listeners so the new images can pop out
img3.addEventListener("mouseover", function(event){
  img3.src = "aladdin2.jpg"
})


img3.addEventListener("mouseout", function(event){
  img3.src = "Aladdin.jpg"
})