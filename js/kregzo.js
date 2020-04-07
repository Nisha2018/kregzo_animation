let next = document.querySelector('.right');
let prev = document.querySelector('.left');
let home = document.querySelector('.home');
let imgContainer = document.querySelector(".img-container");
let content = document.querySelector(".content-right");
let temp = document.querySelector(".temp");
let mouse = document.querySelector(".mouse");

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

    if(window.pageYOffset <= 20){
        imgContainer.style.position = "relative";
        // content.style.position = "relative";
    }
    else{
        imgContainer.style.position = "fixed";
        // content.style.position = "fixed";
    }

    if(window.pageYOffset >= 150){
        home.classList.add("creator-view");
        temp.style.display = "block";

        content.style.top = 246+"px";
        mouse.style.display = "none";
    } else {
        home.classList.remove("creator-view");
        content.style.top = 0+"px";
        temp.style.display = "none";
         mouse.style.display = "block";
    }

    if(window.pageYOffset >= 648) {
        imgContainer.style.position = "relative";
        // content.style.position = "relative";
        // temp.style.display = "none";
    }
    
    
});

