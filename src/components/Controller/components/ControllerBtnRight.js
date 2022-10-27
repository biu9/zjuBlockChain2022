import { useDispatch } from "react-redux";
import { agree } from "../../../store/globalStateSlice";

export const ControllerBtnRight = ({ currentCardIndex, setCurrentCardIndex, currentCard }) => {
	const dispatch = useDispatch();
	
	return (
		<div
			onClick={() => {
				dispatch(agree());
				currentCard.classList.remove("-translate-x-1/2");
				currentCard.classList.add("translate-x-1/2");
			}}
			className="bg-black w-20 h-20 rounded-xl flex justify-center items-center cursor-pointer">
			<div className="bg-up w-10 h-10 bg-cover transform rotate-90" />
		</div>
	)
}