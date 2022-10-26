const menuBtn = document.querySelector(".icon");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll("li a");

let on = false;
let goo;

// --> when hamburger icon is clicked, it toggles the value of the "on" variable. if the value of the on variable is truthy when the button is clicked, it makes the hamburger icon to display the close icon, and if the value of the "on" variable is falsy when the button is clicked, it makes the hamburger display the menu icon

// ---> the hidE_jav class sets the display property of the "nav" varibale to none and the show_icon class does the opposite
function toggle() {
	on = !on;

	if (on) {
		menuBtn.name = "close";
		nav.classList.remove("hide_nav");
		nav.classList.add("show_nav");
	} else {
		menuBtn.name = "menu";
		nav.classList.remove("show_nav");
		nav.classList.add("hide_nav");
	}
}

menuBtn.addEventListener("click", toggle);

// --> the changeActive function checks to see if the element that triggers it, has the active-link class, if it does not, it adds the class to it and removes the class from the element that currently has the active-link class.
// --> if the element that triggers it already has the active-link class, it does nothing.
function changeActive(e) {
	doom();
	const foo = e.target.classList.contains("active-link");

	if (!foo) {
		e.target.classList.add("active-link");
		goo.classList.remove("active-link");
	}
}

// --> the doom function loops over the navLinks and adds the click eventListener to all the links, and it checks through the navLinks array to find the item that current has the active link class and stores the data in the "goo" variable defined above.
// --> The goo variable is used in the changeActive function to remove the active-link class from the current element that has it.

const doom = () =>
	navLinks.forEach((navLink) => {
		navLink.addEventListener("click", changeActive);
		if (navLink.classList.contains("active-link")) {
			goo = navLink;
		}
	});

doom();
