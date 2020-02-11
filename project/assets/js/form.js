const form = document.querySelector("#form");
const button = form.querySelector("button");
const buttonText = button.querySelector("span");
const removeIcon = form.querySelector(".shorter__remove__icon");
const input = form.querySelector("input");

setButtonWidth();
setFormSubmit();

function setFormSubmit() {
	form.onsubmit = function(event) {
		event.preventDefault();
		if (form.classList.contains("submitted")) return;

		const fadeDuration = 300;
		buttonText.classList.add("fade");
		input.classList.add("fade");
		setTimeout(function() {
			buttonText.innerText = "Copiar";

			input.value = "http://chr.dc/xyzxyz";
			input.setAttribute("readOnly", true);

			removeIcon.classList.add("show");
			buttonText.classList.remove("fade");
			input.classList.remove("fade");
		}, fadeDuration);

		form.classList.add("submitted");
	};
}

function setButtonWidth() {
	const buttonWidth = button.offsetWidth;
	button.style.width = buttonWidth + "px";
}
