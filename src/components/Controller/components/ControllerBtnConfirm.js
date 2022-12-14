import { voteProposal } from "../../../utils/voteProposal"
import { useSelector } from "react-redux"

export const ControllerBtnConfirm = ({ currentCardIndex, setCurrentCardIndex, currentCard }) => {
	const ifAgree = useSelector(state => state.globalState.ifAgree);
	const contractAddresses = JSON.parse(localStorage.getItem("address")) || []; // 获取储存在localStroage中的已部署合约地址

	const currentContractAddress = contractAddresses[parseInt(currentCardIndex)];
	const walletAddress = "05da7a3e88a6fe43aa5e859adaf971504270a664dd7a0abeef8d5d033b3f0039";
	
	return (
		<div 
		onClick={() => {
			voteProposal(currentContractAddress,ifAgree,walletAddress);
			currentCard.classList.remove("-translate-x-1/2");
			currentCard.classList.remove("translate-x-1/2");
		}}
		className="bg-black w-20 h-20 rounded-xl flex justify-center items-center cursor-pointer">
			<div className="w-10 h-10 border-2 border-white rounded-full" />
		</div>
	)
}