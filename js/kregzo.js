let next = document.querySelector('.right');
let prev = document.querySelector('.left');
let home = document.querySelector('.home');
let imgContainer = document.querySelector(".img-container");
let content = document.querySelector(".content-right");
let temp = document.querySelector(".temp");
let mouse = document.querySelector(".mouse");
let filament = document.querySelector(".filament");
let base = document.querySelector(".base");
let creator1 = document.querySelector(".creator1");
let gear1 = document.querySelector(".gear1");
let gear2 = document.querySelector(".gear2");
let gear3 = document.querySelector(".gear3");
let gear4 = document.querySelector(".gear4");
let box = document.querySelector(".box");
let panel = document.querySelector(".panel");

var counter = 1;

next.classList.add("button-hover2");
prev.classList.add("button-hover");

next.addEventListener("click", () => {
    if (counter === 1) {
        home.classList.add("mentor-view");
        counter++;
        prev.disabled = false;
        prev.classList.remove("button-hover");
        prev.classList.add("button-hover2");
    } else if (counter === 2) {
        home.classList.add("investor-view");
        counter++;
        prev.disabled = false;
        prev.classList.add("button-hover2");

    } else if (counter === 3) {
        home.classList.remove("investor-view", "mentor-view");
        counter = 1;
        prev.disabled = true;
        prev.classList.remove("button-hover2");
        prev.classList.add("button-hover");
    }

});

prev.addEventListener("click", () => {

    if (counter === 3) {
        home.classList.remove("investor-view");
        counter--;
    } else if (counter === 2) {
        home.classList.remove("mentor-view");
        counter--;
        prev.disabled = true;
        prev.classList.remove("button-hover2");
        prev.classList.add("button-hover");
    }

});


window.addEventListener('scroll', () => {
    console.log(pageYOffset);
    var value = window.scrollY;
    filament.style.left = value * 1 + 'px';
    base.style.left = value * 1 + 'px';
    gear1.style.top = value + 500 + 'px';
    gear2.style.top = value + 200 + 'px';
    gear3.style.top = value + 500 + 'px';
    gear4.style.top = value + 500 + 'px';
    box.style.bottom = value * 1 + 200 + 'px';
    content.style.top = value * 1 + 'px';
    creator1.style.left = value * 1 + 100 + 'px';

    if (window.pageYOffset == 0) {
        box.style.visibility = "hidden";
        gear1.style.visibility = "hidden";
        gear2.style.visibility = "hidden";
        gear3.style.visibility = "hidden";
        gear4.style.visibility = "hidden";
        creator1.style.visibility = "hidden";
        box.style.display="block";
    } else {
        box.style.visibility = "visible";
        gear1.style.visibility = "visible";
        gear2.style.visibility = "visible";
        gear3.style.visibility = "visible";
        gear4.style.visibility = "visible";
        creator1.style.visibility = "visible";
    }

    if (window.pageYOffset <= 20) {
        imgContainer.style.position = "relative";
        content.style.position = "relative";
    } else {
        imgContainer.style.position = "fixed";
        // content.style.position = "fixed";
    }

     if (window.pageYOffset <= 122){
        home.classList.remove("mentor-view");
        home.classList.remove("investor-view");
     }

    if (window.pageYOffset >= 150) {
        
        if(screen.width <= 600){
            filament.style.left = 38 + '%';
            base.style.left = 40 + '%';
        }else{
            filament.style.left = 36 + '%';
            base.style.left = 39.5 + '%';
        }

        gear1.setAttribute("style", "top:10%;left:20%;");
        gear2.setAttribute("style", "top:34%;left:18%;");
        gear3.setAttribute("style", "top:40%;left:56%;");
        gear4.setAttribute("style", "top:22%;left:62%;");
        box.style.bottom = 140 + '%';
        creator1.style.left = 24 + '%';
        home.classList.add("creator-view");
        temp.classList.add("show");
        content.style.top = 250 + "px";
        mouse.style.display = "none";
        prev.style.display = "block";
        next.style.display = "block";
    } else {
        home.classList.remove("creator-view");
        // content.style.top = 0 + "px";
        temp.classList.remove("show");
        mouse.style.display = "block";
        prev.style.display = "none";
        next.style.display = "none";
    }

    if (window.pageYOffset >= 400) {
        imgContainer.style.position = "relative";
        content.style.position = "relative";
        prev.style.display = "none";
        next.style.display = "none";
        box.style.display="none";
    }

});


// scroll down
mouse.addEventListener("click",()=>{
    // window.scrollBy(0,250);
    window.scrollTo({ top: 250, behavior: 'smooth' })
});