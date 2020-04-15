const form = document.querySelector("#form");

const button = form.querySelector("button");
const buttonText = button.querySelector("span");

const input = form.querySelector("input");
const inputIcon = form.querySelector(".form__input-icon");

setOnSubmitHandler();
setButtonWidth();

function setOnSubmitHandler() {
	form.onsubmit = function (event) {
		event.preventDefault();
		if (form.classList.contains("submitted")) return;

		const fadeDuration = 300;
		buttonText.classList.add("fade");
		input.classList.add("fade");
		setTimeout(function () {
			buttonText.innerText = "Copiar";

			input.value = "http://chr.dc/xyzxyz";
			input.setAttribute("readOnly", true);

			inputIcon.classList.add("show");
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
