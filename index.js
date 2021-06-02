const allIcons = document.querySelectorAll('.section-1__icons i');
const menu = document.querySelector('.menu');
const target = document.querySelectorAll('.target');
let counter = 1;

setInterval(() => {
	counter++;
	const icon = document.querySelector('.change');
	icon.classList.remove('change');

	if (counter > allIcons.length) {
		counter = 1;
		allIcons[0].classList.add('change');
	} else {
		icon.nextElementSibling.classList.add('change');
	}
}, 4000);

menu.addEventListener('click', function () {
	target.forEach(node => {
		node.classList.toggle('drawer');
	});
});
