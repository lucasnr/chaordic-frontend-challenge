const form = $("#form");
const button = form.find("button");

form.submit(function (event) {
	event.preventDefault();
	if (form.hasClass("submitted")) return;

	const buttonText = button.find("span");
	const input = form.find("input");
	const inputIcon = form.find(".form__input-icon");

	const fadeDuration = 300;
	buttonText.addClass("fade");
	input.addClass("fade");
	setTimeout(function () {
		buttonText.text("Copiar");

		input.val("http://chr.dc/xyzxyz");
		input.attr("readOnly", true);
		input.css("color", "#fff");

		inputIcon.addClass("show");
		buttonText.removeClass("fade");
		input.removeClass("fade");
	}, fadeDuration);

	form.addClass("submitted");
});

button.width(button.outerWidth());
