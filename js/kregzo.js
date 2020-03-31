let next = document.querySelector('.right');
let prev = document.querySelector('.left');
let home = document.querySelector('.home');


var counter = 1;

next.addEventListener("click", () => {
    if(counter === 1) {
        home.classList.add("creator-view");
        counter++;
    } else if(counter === 2) {
        home.classList.add("mentor-view");
        counter++;

    } else if(counter === 3) {
        home.classList.add("investor-view");
        counter++;
        
    } else {
        if(counter === 4) {
            next.disabled = true;
            next.style.backgroundColor = "#ede8e8";
        }
    }

});

next.disabled = false;


prev.addEventListener("click", () => {
    var counter = 3;
    if (counter === 3) {
        home.classList.remove("investor-view");
        counter--;
    } else if (counter === 2) {
        home.classList.remove("mentor-view");
        counter--;
    } else if (counter === 1) {
        home.classList.remove("creator-view");
        counter--;
    } else {
        if (counter === 0) {
            prev.disabled = true;
            prev.style.backgroundColor = "#ede8e8";
        }
    }    

});