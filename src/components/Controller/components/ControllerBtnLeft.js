import { disagree } from "../../../store/globalStateSlice";
import { useDispatch } from "react-redux";

export const ControllerBtnLeft = ({ currentCardIndex, setCurrentCardIndex, currentCard }) => {
	const dispatch = useDispatch();
	
	return (
		<div
			onClick={() => {
				dispatch(disagree());
				currentCard.classList.remove("translate-x-1/2");
				currentCard.classList.add("-translate-x-1/2");
			}}
			className="bg-black w-20 h-20 rounded-xl flex justify-center items-center cursor-pointer">
			<div className="bg-up w-10 h-10 bg-cover transform -rotate-90" />
		</div>
	)
}