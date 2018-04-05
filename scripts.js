var body = document.querySelector('body');
var menu = document.getElementById('nav-menu');
var drawer = document.getElementById('nav-menu-drawer');

menu.addEventListener('click', function(e) {
	drawer.classList.toggle('open');
	body.classList.toggle('nav-menu-open');
	e.stopPropagation();
});
