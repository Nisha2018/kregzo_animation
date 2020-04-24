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
let mainContainer = document.getElementById("main-container");

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

    if (window.pageYOffset <= 122) {
        home.classList.remove("mentor-view");
        home.classList.remove("investor-view");
    }

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

if (screen.width <= 800) {
    let initialPosition = null;
    let moving = false;


    const gestureMove = (e) => {
        if (window.pageYOffset >= 680) {
            if (moving) {
                e.preventDefault();
                const currentPosition = e.pageX;
                // const diff = currentPosition - initialPosition;
                var x = e.targetTouches[0].clientX;
                var midpoint = Math.floor(screen.width / 2);
                console.log(x,midpoint);
                if (x > midpoint) {
                    if (counter === 1) {
                        home.classList.add("mentor-view");
                        counter++;
                    } else if (counter === 2) {
                        home.classList.add("investor-view");
                        counter++;
                    } else if (counter === 3) {
                        home.classList.remove("investor-view", "mentor-view");
                        counter = 1;
                    }
                }else {
                    if (counter === 3) {
                        home.classList.remove("investor-view");
                        counter--;
                    } else if (counter === 2) {
                        home.classList.remove("mentor-view");
                        counter--;

                    }
                }
            }
        }
    };

    const gestureEnd = (e) => {
        moving = false;
    }


    home.addEventListener('touchstart', (e) => {
        initialPosition = e.pageX;
        moving = true;

        document.body.addEventListener('touchmove', gestureMove);
        document.body.addEventListener('touchend', gestureEnd);
    }, true);

}









// gsap.registerPlugin(Draggable);
// if (screen.width <= 800) {
//     Draggable.create("#home", {
//         type: "scroll",
//         onDragStart: function() {
//             console.log("drag started");
//         }
//     });

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

//     let controller = new ScrollMagic.Controller();
//     let sceneMobile = new ScrollMagic.Scene({
//             triggerElement: '#home',
//             duration: '100%',
//             triggerHook: 0
//         })
//         .setTween(mobile_tween)
//         // .addIndicators({ name: "1" })
//         .setPin('#home')
//         .addTo(controller);

// }



// if (screen.width <= 800) {
//     window.addEventListener("load", function() {
//         window.addEventListener("touchstart", function(e) {
//             console.log(e.touches, e.type);
//             let mobile_tween = gsap.timeline();
//             tween.from(".gear", { y: -280, rotation: 0.001, opacity: 0, duration: 3, ease: "linear" })
//                 .from(".box", {
//                     y: 200,
//                     rotation: 0.001,
//                     opacity: 0,
//                     duration: 3,
//                     ease: "linear"
//                 }, '-=3')
//                 .from(".panel", {
//                     y: 200,
//                     rotation: 0.001,
//                     opacity: 0,
//                     duration: 3,
//                     ease: "linear"
//                 }, '-=3')
//                 .from(".filament", { x: -200, rotation: 0.001, duration: 3, ease: "linear" }, '-=3')
//                 .from(".base", { x: -130, rotation: 0.001, duration: 3, ease: "linear" }, '-=3')
//                 .from(".creator1", { x: -350, rotation: 0.001, duration: 3, ease: "linear" }, '-=3')
//                 .to(".text1", { y: -400, rotation: 0.001, zIndex: -1, opacity: 0, duration: 3, ease: "linear" }, '-=3')
//                 .fromTo(".text2", { y: 400, rotation: 0.001 }, { y: 0, rotation: 0.001, visibility: "visible", opacity: 1, duration: 6, ease: "linear" }, '-=3')
//                 .fromTo(".text3", { y: 400 }, { y: 0, duration: 3, ease: "linear" }, '-=3')
//                 .fromTo(".text4", { y: 400 }, { y: 0, duration: 3, ease: "linear" }, '-=3')
//                 .to(".left", { display: "block" }, '-=1')
//                 .to(".right", { display: "block" }, '-=1')
//                 .to(".mouse", { display: "none" });

//             let controller = new ScrollMagic.Controller();
//             let sceneMobile = new ScrollMagic.Scene({
//                     triggerElement: '#home',
//                     duration: '100%',
//                     triggerHook: 0
//                 })
//                 .setTween(mobile_tween)
//                 // .addIndicators({ name: "1" })
//                 .setPin('#home')
//                 .addTo(controller);

//             e.preventDefault();
//         }, false);
//     }, false);
// }



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