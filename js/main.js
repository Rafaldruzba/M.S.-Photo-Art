const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.nav-mobile-toggle');

const footerYear = document.querySelector('.footer__year');

navToggle.addEventListener('click', () => {
	const visibility = primaryNav.getAttribute('data-visible');
	console.log(navToggle);
	if (visibility === 'false') {
		primaryNav.setAttribute('data-visible', true);
	} else if (visibility === 'true') {
		primaryNav.setAttribute('data-visible', false);
	}
});

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

handleCurrentYear();
