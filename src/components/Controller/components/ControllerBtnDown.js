import { useDispatch } from "react-redux";
import { resetAgree } from "../../../store/globalStateSlice";

export const ControllerBtnDown = ({ currentCardIndex, setCurrentCardIndex, currentCard }) => {
	const dispatch = useDispatch();
	
	return (
		<div
			onClick={() => {
				dispatch(resetAgree());
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