const navbar = document.querySelector("nav");
const mobNavbar = document.querySelector(".mobNav");
let mobIcon = document.querySelector("#mobIcon");

// title sticky position
const title = document. querySelector(".title");

let span;
let tick = false;
function mobileExpand(){
    if(tick == false){
        mobNavbar.style.display = "flex"
        mobNavbar.style.animation = "expand 1s forwards";
        mobIcon.innerHTML = "<img src=\"../00_assets/svgs/close.svg\" width=\"60vh\" height=\"60vh\">"
        tick = true;
        clearTimeout(span);
    }else{
        mobNavbar.style.animation = "close 1s forwards";
        mobIcon.innerHTML = "<img src=\"../00_assets/svgs/hmg.svg\" width=\"60vh\" height=\"60vh\">"
        tick = false;
        span = setTimeout(() => {
            mobNavbar.style.display = "none";
        }, 1000)
    }
}
mobIcon.addEventListener("click", mobileExpand);

let r = 77;
let g = 176;
let b = 244;
mobNavbar.style.backgroundColor = `rgb(${r},${g},${b})`
addEventListener("scroll" , () => {
    // Pink: 247,75,91 
    // Blue: 77,176,244 
    // if(window.scrollY >= 4500){
    //     if(r < 247){
    //         r+=10
    //     }if(g > 75){
    //         g-=10
    //     }if(b > 91){
    //         b-=10
    //     }
    // }
    // else{
    //     if(r > 77){
    //         r-=10
    //     }if(g < 176){
    //         g+=10
    //     }if(b < 244){
    //         b+=10
    //     }
    // }
    navbar.style.backgroundColor = `rgba(${r},${g},${b},${window.scrollY/500})` 
    mobNavbar.style.backgroundColor = `rgb(${r},${g},${b})`
    // navbar.style.color = `rgb(${window.scrollY/2},${window.scrollY/2},${window.scrollY/2})`
});