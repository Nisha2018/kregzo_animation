let next = document.querySelector('.right');
let prev = document.querySelector('.left');
let container = document.querySelector('#home');

const nextView = () => {
	for(i=0;i<next.length; i++){
		next[i].addEventListener('click',() => {
			container.classList.add('creator-view');
			container.classList.add('mentor-view');
			container.classList.add('investor-view');
		});
	}
	
};

next.addEventListener('click', () => {
	nextView();
});







	
	

