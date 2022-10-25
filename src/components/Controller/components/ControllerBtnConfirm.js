import openSerial from "../../../utils/openSerial"

export const ControllerBtnConfirm = ({ currentCardIndex, setCurrentCardIndex, currentCard }) => {
	return (
		<div 
		onClick={() => {
			openSerial();
		}}
		className="bg-black w-20 h-20 rounded-xl flex justify-center items-center cursor-pointer">
			<div className="w-10 h-10 border-2 border-white rounded-full" />
		</div>
	)
}