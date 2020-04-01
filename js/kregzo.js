let next = document.querySelector('.right');
let prev = document.querySelector('.left');
let home = document.querySelector('.home');


var counter = 1;

prev.classList.add("button-hover2");
next.classList.add("button-hover2");

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
        next.disabled = true;
        next.classList.remove("button-hover2");
        next.classList.add("button-hover");
        
        prev.disabled = false;
        prev.classList.add("button-hover2");
 
    } 

}); 


prev.addEventListener("click", () => {

    if (counter === 4) {
        home.classList.remove("investor-view");
        counter--;
        next.disabled = false;
        next.classList.remove("button-hover");
        next.classList.add("button-hover2");
    } else if (counter === 3) {
        home.classList.remove("mentor-view");
        counter--;
    } else if (counter === 2) {
        home.classList.remove("creator-view");
        counter--;
        prev.disabled = true;
        prev.classList.remove("button-hover2");
        prev.classList.add("button-hover");
        
        next.disabled = false;
        next.classList.remove("button-hover");
        next.classList.add("button-hover2");


    } 

});