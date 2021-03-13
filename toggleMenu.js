function toggleMenu(id) {
	var menuBox = document.getElementById(id);
	if (menuBox.style.display == "block") { // if is menuBox displayed, hide it
		menuBox.style.display = "none";
	}
	else { // if is menuBox hidden, display it
		menuBox.style.display = "block";
	}
}