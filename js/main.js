'use strict'

function getRandomNumber(max) {
	return Math.ceil(Math.random() * max);
}

const randomN = getRandomNumber(100);
console.log("El número aleatorio es " + randomN);

const text = document.querySelector(".text");
const hint = document.querySelector(".hint");
const attempt = document.querySelector(".attempt");
const btn = document.querySelector(".btn");
const form = document.querySelector(".js-form");
let attemptN = parseInt(attempt.innerHTML);

function tryN() {
	const textN = parseInt(text.value);
	console.log("Prueba con " + textN);
	if (textN <= 100 && textN >= 1) {
		if (textN < randomN) {
			writeHint('Demasiado bajo');
		} else if (textN > randomN) {
			writeHint('Demasiado alto');
		} else {
			writeHint('¡Has ganado campeona!');
		}
	} else {
		writeHint('El número debe estar comprendido entre 1 y 100') ;
	}
	attemptCounter();
	
}

function attemptCounter() {
	attempt.innerHTML = ++attemptN;
}

function writeHint(clue){
	hint.innerHTML = clue;

btn.addEventListener("click", tryN);

function handleForm(ev) {
	ev.preventDefault();
}

form.addEventListener("submit", handleForm)
