export default function showMenu() {
	const menuButton = document.getElementsByClassName('header__menu-button')[0];
	const menu = document.getElementById('menu');

	menuButton.addEventListener('click', function() {
		menu.classList.toggle('menu-hidden');
	})
}