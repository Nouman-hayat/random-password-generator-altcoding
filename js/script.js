const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    
const display = document.querySelector("input");
const button = document.querySelector("button");
const copyBtn = document.querySelector("span.far");
const copyActive = document.querySelector("span.fas");

button.addEventListener("click", () => {
	let randomPassword = "";
	copyBtn.style.display = "block";
	copyActive.style.display = "none";

	for (var i = 0; i < 16; i++) {
		randomPassword += chars.charAt(Math.floor(Math.random() * chars.length));
	}

	display.value = randomPassword;
});

const copy = () => {
	copyBtn.style.display = "none";
    copyActive.style.display = "block";
    navigator.clipboard.writeText(display.value)
	// display.select();
	// document.execCommand("copy");
	
	setTimeout(function () {
		copyBtn.style.display = "block";
		copyActive.style.display = "none";
		display.value = "";
	}, 2000);

};
