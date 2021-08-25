let num = 15
let img1  = document.getElementById('photo-grid1');
let img2  = document.getElementById('photo-grid2');
let img3  = document.getElementById('photo-grid3');
function createImageNode(n) {
    var img = document.createElement('img');
    img.classList.add("images");
    img.src = `./Images/img/i (${n}).jpg`
    return img;
}
    let i =1
    while(i<16){
        img1.appendChild(createImageNode(i));
        img2.appendChild(createImageNode(i+1));
        img3.appendChild(createImageNode(i+2));
        i=i+3;
    }
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}