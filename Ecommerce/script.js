const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click',() => {
        nav.classList.add('active')
    })
}

if (close) {
    close.addEventListener('click',() => {
        nav.classList.remove('active')
    })
}
//shop//
var MainImg = document.getElementById("MainImg");
var pimg = document.getElementsByClassName("pimg");

pimg[0].onclick = function(){
  MainImg.src = pimg[0].src;
}
pimg[1].onclick = function(){
  MainImg.src = pimg[1].src;
}
pimg[2].onclick = function(){
  MainImg.src = pimg[2].src;
}
pimg[3].onclick = function(){
  MainImg.src = pimg[3].src;
}
pimg[4].onclick = function(){
  MainImg.src = pimg[4].src;
}
pimg[5].onclick = function(){
  MainImg.src = pimg[5].src;
}