export const ControllerBtnLeft = ({ currentCardIndex, setCurrentCardIndex, currentCard }) => {
	return (
		<div
			onClick={() => {
				currentCard.classList.remove("translate-x-1/2");
				currentCard.classList.add("-translate-x-1/2");
			}}
			className="bg-black w-20 h-20 rounded-xl flex justify-center items-center cursor-pointer">
			<div className="bg-up w-10 h-10 bg-cover transform -rotate-90" />
		</div>
	)
}