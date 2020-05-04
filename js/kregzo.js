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
const track = document.querySelector(".track");
let text = document.querySelectorAll(".track .text");
const size = text[0].clientWidth + 20;
console.log(size);

var counter = 1;

next.classList.add("button-hover2");
prev.classList.add("button-hover");

next.addEventListener("click", () => {
    if (counter === 1) {
        home.classList.add("mentor-view");
        track.style.transform = 'translateX(' + (-2*size) + 'px)';
        counter++;
        prev.disabled = false;
        prev.classList.remove("button-hover");
        prev.classList.add("button-hover2");
    } else if (counter === 2) {
        home.classList.add("investor-view");
        track.style.transform = 'translateX(' + (-3*size ) + 'px)';
        counter++;
        prev.disabled = false;
        prev.classList.add("button-hover2");

    } else if (counter === 3) {
        home.classList.remove("investor-view", "mentor-view");
        track.style.transition = "none";
        track.style.transform = 'translateX(-105%)';
        counter = 1;
        prev.disabled = true;
        prev.classList.remove("button-hover2");
        prev.classList.add("button-hover");
    }

});

prev.addEventListener("click", () => {

    if (counter === 3) {
        home.classList.remove("investor-view");
        track.style.transform = 'translateX(' + (-2*size) + 'px)';
        counter--;
    } else if (counter === 2) {
        home.classList.remove("mentor-view");
        track.style.transform = 'translateX(' + (-size) + 'px)';
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
let controller = new ScrollMagic.Controller();

var mql = window.matchMedia('(min-width: 992px)');

if (mql.matches) {

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

    let scene = new ScrollMagic.Scene({
            triggerElement: '#home',
            duration: '100%',
            triggerHook: 0
        })
        .setTween(tween)
        // .addIndicators({ name: "1" })
        .setPin('#home')
        .addTo(controller);

}

const tween2 = gsap.timeline();
tween2.to(".left", { display: "none" })
    .to(".right", { display: "none" })
    // .to(".text2", { visibility: "hidden", opacity: 0 })


let scene2 = new ScrollMagic.Scene({
        triggerElement: "#about",
    })

    .setTween(tween2)
    .addTo(controller);



//For mobile view
var mql2 = window.matchMedia('(max-width: 800px)');
if (mql2.matches) {

    let mobileTween = gsap.timeline();
    mobileTween.from(".gear", { y: -280, rotation: 0.001, opacity: 0, duration: 2, ease: "linear" })
        .from(".box", {
            y: 200,
            rotation: 0.001,
            opacity: 0,
            duration: 2,
            ease: "linear"
        }, '-=2')
        .from(".panel", {
            y: 200,
            rotation: 0.001,
            opacity: 0,
            duration: 2,
            ease: "linear"
        }, '-=2')
        .from(".filament", { x: -200, rotation: 0.001, duration: 2, ease: "linear" }, '-=2')
        .from(".base", { x: -130, rotation: 0.001, duration: 2, ease: "linear" }, '-=2')
        .from(".creator1", { x: -350, rotation: 0.001, duration: 2, ease: "linear" }, '-=2')
        .to(".text1", { x: -400, rotation: 0.001, opacity: 0, duration: 1, ease: "linear" }, '-=2')
        .fromTo(".track", { x: 0, opacity: 0, rotation: 0.001 }, { x: -size, rotation: 0.001, visibility: "visible", opacity: 1, duration: 2, ease: "linear" }, '-=2')
        .to(".right", { display: "block" })
        .to(".left", { display: "block" })
        .to(".mouse", { display: "none" });

    let scene = new ScrollMagic.Scene({
            triggerElement: '#home',
            duration: '100%',
            triggerHook: 0
        })
        .setTween(mobileTween)
        // .addIndicators({ name: "1" })
        .setPin('#home')
        .addTo(controller);

}

//For mobile view

if (screen.width <= 800) {
    track.style.transition = "transform 1s ease-in-out";
    home.addEventListener('touchstart', handleTouchStart, false);
    home.addEventListener('touchmove', handleTouchMove, false);
    var xDown = null;
    var yDown = null;

    function handleTouchStart(evt) {
        xDown = evt.touches[0].clientX;
        yDown = evt.touches[0].clientY;
    };

    function handleTouchMove(evt) {
        if (window.pageYOffset >= 680) {
            if (!xDown || !yDown) {
                return;
            }
            var xUp = evt.touches[0].clientX;
            var yUp = evt.touches[0].clientY;
            var xDiff = xDown - xUp;
            var yDiff = yDown - yUp;

            if (Math.abs(xDiff) > Math.abs(yDiff)) { /*most significant*/
                if (xDiff > 0) {
                    /* left swipe */
                    console.log("left swipe");
                    if (counter === 1) {
                        track.style.transition = "transform 1s ease-in-out";
                        home.classList.add("mentor-view");
                        track.style.transform = 'translateX(' + (-2*size) + 'px)';
                        counter++;
                    } else if (counter === 2) {
                        home.classList.add("investor-view");
                        track.style.transform = 'translateX(' + (-3*size ) + 'px)';
                        counter++;
                    } else if (counter === 3) {
                        home.classList.remove("investor-view", "mentor-view");
                        track.style.transition = "none";
                        track.style.transform = 'translateX(-105%)';
                        counter = 1;
                    }
                } else {
                    /* right swipe */
                    console.log("right swipe");
                    if (counter === 3) {
                        home.classList.remove("investor-view");
                        track.style.transform = 'translateX(' + (-2*size) + 'px)';
                        counter--;
                    } else if (counter === 2) {
                        home.classList.remove("mentor-view");
                        track.style.transform = 'translateX(' + (-size) + 'px)';
                        counter--;
                    }
                }
            } else {
                if (yDiff > 0) {
                    /* up swipe */
                    console.log("up swipe");
                } else {
                    /* down swipe */
                    console.log("down swipe");
                }
            }
            /* reset values */
            xDown = null;
            yDown = null;
        };
    }
}


