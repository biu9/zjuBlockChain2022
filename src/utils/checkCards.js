function checkCards() {
	const triggerBottom = window.innerHeight / 5 * 4;
	const cards = document.querySelectorAll("#card");
	const cardChoice = document.querySelectorAll("#voteChoice");
	cards.forEach((card, index) => {
		//console.log(card.getBoundingClientRect().top);
		if (card.getBoundingClientRect().top < triggerBottom) {
			card.classList.add("translate-x-0");
			card.classList.remove("translate-x-4full");
			cardChoice[index].classList.add("translate-x-0");
			cardChoice[index].classList.remove("translate-x-4full");
		} else {
			card.classList.remove("translate-x-0");
			card.classList.add("translate-x-4full");
			cardChoice[index].classList.remove("translate-x-0");
			cardChoice[index].classList.add("translate-x-4full");
		}
	});
}

export default checkCards;