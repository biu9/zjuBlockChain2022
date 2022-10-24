const ControllerBtnUp = ({ currentCardIndex, setCurrentCardIndex, currentCard }) => {
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

const ControllerBtnLeft = ({ currentCardIndex, setCurrentCardIndex, currentCard }) => {
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

const ControllerBtnConfirm = ({ currentCardIndex, setCurrentCardIndex, currentCard }) => {
	return (
		<div className="bg-black w-20 h-20 rounded-xl flex justify-center items-center cursor-pointer">
			<div className="w-10 h-10 border-2 border-white rounded-full" />
		</div>
	)
}

const ControllerBtnRight = ({ currentCardIndex, setCurrentCardIndex, currentCard }) => {
	return (
		<div
			onClick={() => {
				currentCard.classList.remove("-translate-x-1/2");
				currentCard.classList.add("translate-x-1/2");
			}}
			className="bg-black w-20 h-20 rounded-xl flex justify-center items-center cursor-pointer">
			<div className="bg-up w-10 h-10 bg-cover transform rotate-90" />
		</div>
	)
}

const ControllerBtnDown = ({ currentCardIndex, setCurrentCardIndex, currentCard }) => {
	return (
		<div
			onClick={() => {
				const triggerBottom = currentCard.offsetHeight
				const root = document.documentElement;
				root.scrollTo({
					top: root.scrollTop + triggerBottom,
					behavior: "smooth"
				});
				if (currentCardIndex < 99)
					setCurrentCardIndex(currentCardIndex + 1);
				currentCard.classList.remove("-translate-x-1/2");
				currentCard.classList.remove("translate-x-1/2");
			}}
			className="bg-black w-20 h-20 rounded-xl flex justify-center items-center cursor-pointer">
			<div className="bg-up w-10 h-10 bg-cover transform rotate-180" />
		</div>
	)
}

export default function Controller({ currentCardIndex, setCurrentCardIndex, currentCard }) {
	return (
		<div className="fixed bottom-0 left-0 p-10 grid-cols-3 grid gap-1">
			<div />
			<ControllerBtnUp
				currentCardIndex={currentCardIndex}
				setCurrentCardIndex={setCurrentCardIndex}
				currentCard={currentCard}
			/>
			<div />
			<ControllerBtnLeft
				currentCardIndex={currentCardIndex}
				setCurrentCardIndex={setCurrentCardIndex}
				currentCard={currentCard}
			/>
			<ControllerBtnConfirm />
			<ControllerBtnRight
				currentCardIndex={currentCardIndex}
				setCurrentCardIndex={setCurrentCardIndex}
				currentCard={currentCard}
			/>
			<div />
			<ControllerBtnDown
				currentCardIndex={currentCardIndex}
				setCurrentCardIndex={setCurrentCardIndex}
				currentCard={currentCard}
			/>
			<div />
		</div>
	)
}