import { ControllerBtnConfirm } from "./components/ControllerBtnConfirm";
import { ControllerBtnDown } from "./components/ControllerBtnDown";
import { ControllerBtnLeft } from "./components/ControllerBtnLeft";
import { ControllerBtnRight } from "./components/ControllerBtnRight";
import { ControllerBtnUp } from "./components/ControllerBtnUp";

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