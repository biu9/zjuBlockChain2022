import Card from "./components/Card"
import Controller from "./components/Controller";
import { useEffect, useState } from "react";
import UploadModal from "./components/UploadModal";
import { Provider } from "react-redux";
import store from "./store/index";
import { openModal } from "./store/globalStateSlice";
import { useDispatch,useSelector } from "react-redux";
import checkCards from "./utils/checkCards";
import openSerial from "./utils/openSerial";
const InitiateProposal = ( { currentCardIndex, setCurrentCardIndex, currentCard } ) => {
	const dispatch = useDispatch();
	const ifAgree = useSelector(state => state.globalState.ifAgree);
	return (
		<div className="fixed right-0 bottom-0 p-10 font-mono flex flex-col space-y-6 text-center">
			<div 
			onClick={() => {
				dispatch(openModal());
			}}
			className="bg-black text-white rounded-lg p-6 cursor-pointer shadow-2xl">
				initiate proposal
			</div>
			<div 
			onClick={() => {
				openSerial(currentCardIndex, setCurrentCardIndex, currentCard,ifAgree,dispatch);
			}}
			className="bg-black text-white rounded-lg p-6 cursor-pointer shadow-2xl">
				open serial
			</div>
		</div>
	)
}

export default function App() {
	window.addEventListener("scroll", checkCards);
	const [currentCardIndex, setCurrentCardIndex] = useState(0);
	const [currentCard, setCurrentCard] = useState(null);
	const contractAddresses = JSON.parse(localStorage.getItem("address")) || []; // 获取储存在localStroage中的已部署合约地址

	//console.log("deployed contract address : ",contractAddresses);

	useEffect(() => {
		const cards = document.querySelectorAll("#card");
		cards.forEach((card, index) => {
			if (index === currentCardIndex) {
				card.classList.add("scale-125");
				setCurrentCard(card);
			} else {
				card.classList.remove("scale-125");
			}
		});
	}, [currentCardIndex]);
	return (
		<Provider store={store}>
			<div className="flex p-6 bg-stdBg min-h-screen flex-col items-center space-y-9 overflow-hidden">
				<div className="font-mono text-3xl font-bold">
					Voting Board
				</div>
				{
					contractAddresses.map((address, index) => {
						return (
							<Card
								contractAddress={address}
								key={index}
							/>
						)
					})
				}
				<Controller
					currentCard={currentCard}
					currentCardIndex={currentCardIndex}
					setCurrentCardIndex={setCurrentCardIndex}
				/>
				<InitiateProposal 
					currentCard={currentCard}
					currentCardIndex={currentCardIndex}
					setCurrentCardIndex={setCurrentCardIndex}
				/>
				<UploadModal />
			</div>
		</Provider>
	)
}