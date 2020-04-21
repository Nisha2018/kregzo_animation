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
    // console.log(pageYOffset);
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

    if (window.pageYOffset <= 122) {
        home.classList.remove("mentor-view");
        home.classList.remove("investor-view");
    }

    // if (window.pageYOffset >= 10 && screen.width <= 800) {
    //     imgContainer.classList.add("blur");
    // } else {
    //     imgContainer.classList.remove("blur");
    // }

    // if (window.pageYOffset <= 20 && screen.width <= 800) {
    //     imgContainer.style.position = "relative";
    // } else {
    //     imgContainer.style.position = "fixed";
    // }

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
let tween = gsap.timeline();
tween.from(".gear", { y: -280, rotation: 0.001, opacity: 0, duration: 6, ease: "linear" })
    .from(".box", {
        y: 200,
        rotation: 0.001,
        opacity: 0,
        duration: 6,
        ease: "linear"
    }, '-=6')
    .from(".panel", {
        y: 200,
        rotation: 0.001,
        opacity: 0,
        duration: 6,
        ease: "linear"
    }, '-=6')
    .from(".filament", { x: -200, rotation: 0.001, duration: 6, ease: "linear" }, '-=6')
    .from(".base", { x: -130, rotation: 0.001, duration: 6, ease: "linear" }, '-=6')
    .from(".creator1", { x: -350, rotation: 0.001, duration: 6, ease: "linear" }, '-=6')
    .to(".text1", { y: -400, rotation: 0.001, zIndex: -1, opacity: 0, duration: 3, ease: "linear" }, '-=6')
    .fromTo(".text2", { y: 400, rotation: 0.001 }, { y: 0, rotation: 0.001, visibility: "visible", opacity: 1, duration: 6, ease: "linear" }, '-=6')
    .fromTo(".text3", { y: 400 }, { y: 0, duration: 6, ease: "linear" }, '-=6')
    .fromTo(".text4", { y: 400 }, { y: 0, duration: 6, ease: "linear" }, '-=6')
    .to(".left", { display: "block" }, '-=4')
    .to(".right", { display: "block" }, '-=4')
    .to(".mouse", { display: "none" });


const tween2 = gsap.timeline();
tween2.to(".left", { display: "none" })
    .to(".right", { display: "none" })
    .to(".text2", { visibility: "hidden", opacity: 0 })


let controller = new ScrollMagic.Controller();
let scene = new ScrollMagic.Scene({
        triggerElement: '#home',
        duration: '100%',
        triggerHook: 0
    })
    .setTween(tween)
    // .addIndicators({ name: "1" })
    .setPin('#home')
    .addTo(controller);


let scene2 = new ScrollMagic.Scene({
        triggerElement: "#about",
    })

    .setTween(tween2)
    .addTo(controller);


//For mobile view
// if (screen.width <= 600) {
//     let mobile_tween = gsap.timeline();
//     tween.from(".gear", { y: -280, rotation: 0.001, opacity: 0, duration: 3, ease: "linear" })
//         .from(".box", {
//             y: 200,
//             rotation: 0.001,
//             opacity: 0,
//             duration: 3,
//             ease: "linear"
//         }, '-=3')
//         .from(".panel", {
//             y: 200,
//             rotation: 0.001,
//             opacity: 0,
//             duration: 3,
//             ease: "linear"
//         }, '-=3')
//         .from(".filament", { x: -200, rotation: 0.001, duration: 3, ease: "linear" }, '-=3')
//         .from(".base", { x: -130, rotation: 0.001, duration: 3, ease: "linear" }, '-=3')
//         .from(".creator1", { x: -350, rotation: 0.001, duration: 3, ease: "linear" }, '-=3')
//         .to(".text1", { y: -400, rotation: 0.001, zIndex: -1, opacity: 0, duration: 3, ease: "linear" }, '-=3')
//         .fromTo(".text2", { y: 400, rotation: 0.001 }, { y: 0, rotation: 0.001, visibility: "visible", opacity: 1, duration: 6, ease: "linear" }, '-=3')
//         .fromTo(".text3", { y: 400 }, { y: 0, duration: 3, ease: "linear" }, '-=3')
//         .fromTo(".text4", { y: 400 }, { y: 0, duration: 3, ease: "linear" }, '-=3')
//         .to(".left", { display: "block" }, '-=1')
//         .to(".right", { display: "block" }, '-=1')
//         .to(".mouse", { display: "none" });


//     let scene4 = new ScrollMagic.Scene({
//             triggerElement: '#home',
//             duration: '100%',
//             triggerHook: 0
//         })
//         .setTween(mobile_tween)
//         .addTo(controller);

// }




// gsap.registerPlugin(Draggable);
// $(window).on("resize", resize);

// resize();

// function resize() {

//     if (window.matchMedia("(max-width: 600px)").matches) {
//         Draggable.create("#home", {
//             type: "y",
//             inertia: true,
//             onClick: function() {
//                 console.log("clicked");
//             },
//             onDragEnd: function() {
//                 console.log("drag ended");
//             }
//         });
//     }
// }