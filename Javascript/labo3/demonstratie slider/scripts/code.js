	const setup = () => {
	let sldRed = document.getElementById("sldRed");
	let sliders = document.getElementsByClassName("slider");

	sldRed.addEventListener("input", update);
	for (let i = 0; i < sliders.length; i++) {
		sliders[i].addEventListener("change", update);
		sliders[i].addEventListener("input", update);
	}

}

const update = () => {
	let rood = document.getElementById("sldRed");
	let groen = document.getElementById("sldGreen");
	let blauw = document.getElementById("sldBlue");

	let valueRed = rood.value;
	let valueGreen = groen.value;
	let valueBlue = blauw.value;
	document.getElementById("lblRed").innerHTML = valueRed;
	document.getElementById("lblGreen").innerHTML = valueGreen;
	document.getElementById("lblBlue").innerHTML = valueBlue;

	let swatch = document.getElementById("swatch");
	swatch.style.backgroundColor = `rgb(${valueRed}, ${valueGreen}, ${valueBlue})`;
}

window.addEventListener("load", setup);