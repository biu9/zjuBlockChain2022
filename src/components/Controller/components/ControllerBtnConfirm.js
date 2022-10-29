import { voteProposal } from "../../../utils/voteProposal"
import { useSelector } from "react-redux"

export const ControllerBtnConfirm = ({ currentCardIndex, setCurrentCardIndex, currentCard }) => {
	const ifAgree = useSelector(state => state.globalState.ifAgree);
	const contractAddresses = JSON.parse(localStorage.getItem("address")) || []; // 获取储存在localStroage中的已部署合约地址

	const currentContractAddress = contractAddresses[parseInt(currentCardIndex)];
	const walletAddress = "0x28db1f2c2e21aefc7aa4f102c9adfb92d94c49bfeb93aaa11cf40f2f98c1f5c7";
	
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