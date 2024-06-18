const slides =document.querySelectorAll(".slides img")

let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded",event=>{
  initializeSlider();
})
function  initializeSlider() {
if(slides.length>0){
 slides[slideIndex].classList.add("displaySlide");
 intervalId = setInterval(nextSlide, 5000);
}
}

function showSlide(index){
  if(index >= slides.length){
      slideIndex=0;
  }
else if(index < 0){
slideIndex = slides.length - 1;
}

slides.forEach(slide=>{
  slide.classList.remove("displaySlide");
});
slides[slideIndex].classList.add("displaySlide");
}

function prevSlide() {
  clearInterval(intervalId)
  slideIndex--;
  showSlide(slideIndex);
}
function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}



const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("mouseover", (event) => {
  searchInput.style.display = "block";
});
searchBtn.addEventListener("mouseout", (event) => {
  searchInput.style.display = "none";
});

