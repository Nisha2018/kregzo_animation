let next = document.querySelector('.right');
let prev = document.querySelector('.left');
let next1 = document.querySelector('.right1');
let prev1 = document.querySelector('.left1');

next.addEventListener("click", () => {
	document.querySelector('.img-container').classList.add('creator');
	document.querySelector('.content-right .text1').classList.add('hide');
	document.querySelector('.content-right .text2').classList.add('show');
});

prev.addEventListener("click",() => {
	document.querySelector('.img-container').classList.remove('creator');
	document.querySelector('.content-right .text1').classList.remove('hide');
	document.querySelector('.content-right .text2').classList.remove('show');
});

// next1.addEventListener("click", () => {
// 	document.querySelector('.img-container').classList.add('mentor-view');
// 	document.querySelector('.content-right .text2').classList.add('hide');
// 	document.querySelector('.content-right .text3').classList.add('show');
// });




	
	

