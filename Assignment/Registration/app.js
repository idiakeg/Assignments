const password = document.querySelector("#password");

const icon = document.querySelector(".icon-right");

let iconName = icon.firstChild.getAttribute("name");

let on = false;

function togglePassword() {
	// ---> Get the current attribute of the password field
	let foo = password.getAttribute("type");

	// --> if the password field has a type of "password", change it to text, and if it has a type of text, change it to password
	let type = foo === "password" ? "text" : "password";

	password.setAttribute("type", type);

	// --> upon button click, toggle the value of on
	on = !on;

	// --> if on is true, display the eye open icon, if on is false, display the eye close(off) icon
	on
		? (icon.innerHTML = `<ion-icon name="eye"></ion-icon>`)
		: (icon.innerHTML = `<ion-icon name="eye-off"></ion-icon>`);

	console.log(foo);
}

icon.addEventListener("click", togglePassword);
