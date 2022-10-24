export const ControllerBtnUp = ({ currentCardIndex, setCurrentCardIndex, currentCard }) => {
	return (
		<div
			onClick={() => {
				const triggerBottom = currentCard.offsetHeight
				const root = document.documentElement;
				root.scrollTo({
					top: root.scrollTop - triggerBottom,
					behavior: "smooth"
				});
				if (currentCardIndex > 0)
					setCurrentCardIndex(currentCardIndex - 1);
				currentCard.classList.remove("-translate-x-1/2");
				currentCard.classList.remove("translate-x-1/2");
			}}
			className="bg-black w-20 h-20 rounded-xl flex justify-center items-center cursor-pointer">
			<div className="bg-up w-10 h-10 bg-cover" />
		</div>
	)
}