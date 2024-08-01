var myImg = document.querySelectorAll(".myImg");
var modaljs = document.getElementById("modaljs");
var catchImgInfojs = document.getElementById("catchImgInfojs");
var modalImgjs = document.getElementById("modalImgjs");
var closejs = document.getElementById("closejs");

myImg.forEach((img)=>{
  img.onclick = () => {
    modaljs.style.display = "block";
    modalImgjs.src = img.src;
    catchImgInfojs.textContent = img.alt;
  };
})

closejs.onclick=()=>{
  modaljs.style.display = "none";
}
