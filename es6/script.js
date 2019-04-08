(function () {
	const container = document.querySelector("#container"),
		pickLettersBtn = document.querySelector("#pickLetters");

	const handleClick = () => {
		const items = ["a", "a", "b", "b", "b", "c", "c", "c", "d", "d", "d", "e", "e", "f", "f", "g", "g", "h", "h", "h", "i", "j", "j", "k", "l", "l", "m", "m", "m", "n", "n", "o", "p", "p", "p", "q", "r", "r", "s", "s", "s", "t", "t", "u", "v", "w", "w", "y", "z", "*", "*"];

		const chosenItems = [...Array(5)].map(() => {
			let i = Math.floor(Math.random() * items.length);
			const item = items[i];
			items.splice(i, 1);
			return item;
		});

		while (container.hasChildNodes()) {
			container.removeChild(container.firstChild);
		}

		chosenItems.forEach((el, i) => {
			let newEl = document.createElement("h1");
			newEl.innerHTML = el;
			newEl.classList.add("mx-3", "letter", "d-inline-block");
			setTimeout(() => newEl.classList.add("show"), 100 + (i * 750));
			container.appendChild(newEl);
		});
	};

	pickLettersBtn.addEventListener("click", handleClick, true);
})();

