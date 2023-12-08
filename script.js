


let chard = document.querySelector(".boxes");
let next_btn = document.getElementById("next-btn");
let back_btn = document.getElementById("back-btn");

chard.addEventListener("wheel", (evt) => {
evt.preventDefault();
chard.scrollLeft += evt.deltaY;
chard.style.scrollBehavior = "auto";
});

next_btn.addEventListener("click", ()=>{
  chard.style.scrollBehavior = "smooth";
  chard.scrollLeft += 900;
  
});

back_btn.addEventListener("click", ()=>{
  chard.style.scrollBehavior = "smooth";
  chard.scrollLeft -= 900;
  
});



