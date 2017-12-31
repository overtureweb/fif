window.addEventListener('load', () => {
    "use strict";

    const btn = document.querySelector("#generateLetters");
    btn.addEventListener("click", getLetters, false);

    getLetters();

    function getLetters() {
        const theLetters = [...document.querySelectorAll(".the-letter")];
        let sequence = "aabbbcccdddeeffgghhhijjkllmmmnnopppqrrsssttuvwwyz**";

        theLetters.forEach((el) => {
            let randNumber = Math.floor(Math.random() * sequence.length);
            const aLetter = sequence.substr(randNumber, 1);
            sequence = sequence.replace(aLetter, '');
            el.innerHTML = ` ${aLetter}`;
        });
    }
});




