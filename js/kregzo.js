let next = document.querySelector('.right');
let prev = document.querySelector('.left');
let home = document.querySelector('.home');
let imgContainer = document.querySelector(".img-container");
let content = document.querySelector(".content-right");
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
//     var value = window.scrollY;
    // if (window.pageYOffset <= 450) {
    //     gear1.style.top = (value * 0.3) + 10 + '%';
    //     gear2.style.top = value * 0.38 + '%';
    //     gear2.style.left = value * 0.2 + 'px';
    //     gear3.style.top = value * 0.38 + '%';
    //     gear4.style.top = value * 0.35 + '%';
    //     box.style.bottom = value * 0.32 + '%';
    //     panel.style.bottom = value * 0.432 + '%';
    //     filament.style.left = value * 0.34 + 'px';
    //     filament.style.top = value * 0.15 + 'px';
    //     base.style.left = value * 0.38 + 'px';
    //     creator1.style.left = value * 0.18 + '%';

    //     if (screen.width <= 600) {
    //         filament.style.left = value * 0.29 + 'px';
    //         base.style.left = value * 0.31 + 'px';
    //         creator1.style.left = value * 0.2 + '%';
    //         panel.style.bottom = value * 0.85 + '%';
    //         box.style.bottom = value * 0.65 + '%';
    //         gear1.style.top = (value * 0.3) + 18 + '%';
    //         gear2.style.left = value * 0.14 + 'px';
    //     }
    // }

//     if (window.pageYOffset <= 122) {
//         home.classList.remove("mentor-view");
//         home.classList.remove("investor-view");
//     }

    if (window.pageYOffset >= 10 && screen.width <= 800) {
        imgContainer.classList.add("blur");
    } else {
        imgContainer.classList.remove("blur");
    }

    if (window.pageYOffset <= 20 && screen.width <= 800) {
        imgContainer.style.position = "relative";
    } else {
        imgContainer.style.position = "fixed";
    }

//     if (window.pageYOffset >= 300) {
//         mouse.style.display = "none";
//         prev.style.display = "block";
//         next.style.display = "block";
//     } else {
//         mouse.style.display = "block";
//         if (screen.width <= 800) {
//             mouse.style.display = "none";
//         }
//         prev.style.display = "none";
//         next.style.display = "none";
//     }

//     if (window.pageYOffset >= 450) {
//         gear1.classList.add("spin");
//         gear2.classList.add("spin");
//         gear3.classList.add("spin");
//         gear4.classList.add("spin");
//     } else {
//         gear1.classList.remove("spin");
//         gear2.classList.remove("spin");
//         gear3.classList.remove("spin");
//         gear4.classList.remove("spin");
//     }

//     if (window.pageYOffset >= 600) {
//         imgContainer.style.display = "none";
//         prev.style.display = "none";
//         next.style.display = "none";
//     } else {
//         imgContainer.style.display = "grid";
//     }

});


// // scroll down
// mouse.addEventListener("click", () => {
//     window.scrollTo({ top: 450, behavior: 'smooth' })
// });


// if (screen.width <= 800) {
//     mouse.style.display = "none";
// } else {
//     mouse.style.display = "block";
// }


// scrollmagic

const tween = gsap.timeline();
tween.from(".gear",{y:-500,stagger:0.2,opacity:0.5,duration:0.5,ease:"sine.inOut"})
     .from(".box",{y:500,opacity:0,duration:1,ease:"sine.inOut"})
     .from(".panel",{y:500,opacity:0,duration:1.5,ease:"sine.inOut"})
     .from(".filament",{x:-300,ease:"power2.out"})
     .to(".base",{x:170,duration:1.8})
     .from(".creator1",{x:-400,duration:3.5,ease:"sine.inOut"})
     .to(".gear",{rotation:360,duration:"infinite"})
     .to(".left",{display:"block"})
     .to(".right",{display:"block"})
     .to(".mouse",{display:"none"});

if(screen.width<=800){
    const tween = gsap.timeline();
    tween.to(".base",{x:138,duration:1.8,delay:5})
}

const tween2 = gsap.timeline();
tween2.to(".left",{display:"none"})
      .to(".right",{display:"none"})
      .to(".img-container",{display:"none"},"-=2")

const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
    triggerElement: '#home',
    duration: 3000,
    triggerHook: 0
})
.setTween(tween)
.addIndicators({name: "1 (duration: 3000)"})
.setPin('#home')
.addTo(controller);


const scene2 = new ScrollMagic.Scene({
    triggerElement:"#about",
})

.setTween(tween2)
.addTo(controller);



