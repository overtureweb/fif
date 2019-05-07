(function () {
	const container = document.querySelector("#container"),
		pickLettersBtn = document.querySelector("#pickLetters");

	const handleClick = () => {
		const letters = ["a", "a", "b", "b", "b", "c", "c", "c", "d", "d", "d", "e", "e", "f", "f", "g", "g", "h", "h", "h", "i", "j", "j", "k", "l", "l", "m", "m", "m", "n", "n", "o", "p", "p", "p", "q", "r", "r", "s", "s", "s", "t", "t", "u", "v", "w", "w", "y", "z", "*", "*"];

		//passing in a copy of the letters via currying makes this a pure function; no side effects and the original letter array is not mutated
		const getLetters = (xLetters) => [...Array(5)].map(() => {
			let i = Math.floor(Math.random() * xLetters.length);
			const item = xLetters[i];
			xLetters.splice(i, 1);
			return item;
		});

		const chosenLetters = getLetters([...letters]);

		while (container.hasChildNodes()) {
			container.removeChild(container.firstChild);
		}

		chosenLetters.forEach((el, i) => {
			let newEl = document.createElement("h1");
			newEl.innerHTML = el;
			newEl.classList.add("mx-3", "letter", "d-inline-block");
			setTimeout(() => newEl.classList.add("show"), 100 + (i * 750));
			container.appendChild(newEl);
		});
	};

	pickLettersBtn.addEventListener("click", handleClick, true);
})();

