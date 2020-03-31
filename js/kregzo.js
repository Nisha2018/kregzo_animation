let next = document.querySelector('.right');
let prev = document.querySelector('.left');
let home = document.querySelector('.home');


var counter = 1;

next.addEventListener("click", () => {
    if(counter === 1) {
        home.classList.add("creator-view");
        counter++;
        prev.disabled = false;
    } else if(counter === 2) {
        home.classList.add("mentor-view");
        counter++;

    } else if(counter === 3) {
        home.classList.add("investor-view");
        counter++;
        next.disabled = true;
        next.style.backgroundColor = "#ede8e8";
        prev.disabled = false;
        prev.style.backgroundColor="#f90";
        
    } 

    // else if(counter === 4) {

    //         next.disabled = true;
    //         next.style.backgroundColor = "#ede8e8";



    // }

});

// 


prev.addEventListener("click", () => {

    if (counter === 4) {
        home.classList.remove("investor-view");
        counter--;
        next.disabled = false;
    } else if (counter === 3) {
        home.classList.remove("mentor-view");
        counter--;
    } else if (counter === 2) {
        home.classList.remove("creator-view");
        counter--;
        prev.disabled = true;
        prev.style.backgroundColor = "#ede8e8";
        next.disabled = false;
        next.style.backgroundColor="#f90";

    } 

});