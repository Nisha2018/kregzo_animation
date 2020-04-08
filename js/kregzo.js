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
let gear4 =document.querySelector(".gear4");
let box =document.querySelector(".box");
let panel =document.querySelector(".panel");

var counter = 1;


next.classList.add("button-hover2");
prev.classList.add("button-hover");

next.addEventListener("click", () => {
    if(counter === 1) {
        home.classList.add("creator-view");
        counter++;
        prev.disabled = false;
        prev.classList.remove("button-hover");
        prev.classList.add("button-hover2");
    } else if(counter === 2) {
        home.classList.add("mentor-view");
        counter++;

    } else if(counter === 3) {
        home.classList.add("investor-view");
        counter++;
        // next.disabled = true;
        // next.classList.remove("button-hover2");
        // next.classList.add("button-hover");
        
        prev.disabled = false;
        prev.classList.add("button-hover2");
 
    } else if(counter===4){
        home.classList.remove("investor-view","mentor-view","creator-view");
        counter = 1;
        prev.disabled = true;
        prev.classList.remove("button-hover2");
        prev.classList.add("button-hover");
    }

}); 


prev.addEventListener("click", () => {

    if (counter === 4) {
        home.classList.remove("investor-view");
        counter--;
        // next.disabled = false;
        // next.classList.remove("button-hover");
        // next.classList.add("button-hover2");
    } else if (counter === 3) {
        home.classList.remove("mentor-view");
        counter--;
    } else if (counter === 2) {
        home.classList.remove("creator-view");
        counter--;
        prev.disabled = true;
        prev.classList.remove("button-hover2");
        prev.classList.add("button-hover");
        
        // next.disabled = false;
        // next.classList.remove("button-hover");
        // next.classList.add("button-hover2");
    } 

});


window.addEventListener('scroll', () => {

    console.log(pageYOffset);
    var value = window.scrollY;

    filament.style.left = value * 1 + 'px';
    base.style.left = value * 1 + 'px';
    gear1.style.top = value + 500  + 'px';

    if(window.pageYOffset <= 20){
        imgContainer.style.position = "relative";
        content.style.position = "relative";
    }
    else{
        imgContainer.style.position = "fixed";
        // content.style.position = "fixed";
    }

    if(window.pageYOffset >= 150){
        filament.style.left = 36 + '%';
        base.style.left = 39.5 + '%';
        gear1.setAttribute("style","top:10%;left:20%;");

        home.classList.add("creator-view");
        temp.classList.add("show");
        content.style.top = 246+"px";
        mouse.style.display = "none";
        prev.style.display = "block";
        next.style.display = "block";
    } else {
        home.classList.remove("creator-view");
        content.style.top = 0+"px";
        temp.classList.remove("show");
        mouse.style.display = "block";
        prev.style.display = "none";
        next.style.display = "none";
    }

    if(window.pageYOffset >= 400) {
        imgContainer.style.position = "relative";
        content.style.position = "relative";
        prev.style.display = "none";
        next.style.display = "none";
    }
    
    
});

