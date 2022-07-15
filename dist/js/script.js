// navbar fixed ketika di scroll
window.onscroll = function () {
	const header = document.querySelector("header");
	const navFixed = header.offsetTop;

	if (window.pageYOffset > navFixed) {
		header.classList.add("navbar-fixed");
	} else {
		header.classList.remove("navbar-fixed");
	}
};

// keadaan hamburger saat active
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
	hamburger.classList.toggle("hamburger-active");
	navMenu.classList.toggle("hidden");
});
