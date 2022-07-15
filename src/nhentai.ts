// Prevent popup ads on click
document.querySelectorAll('a[href^="/g/"]')
		.forEach(element => element.addEventListener('click', event => {
			event.stopPropagation();
		}));

