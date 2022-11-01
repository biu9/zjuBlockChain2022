import Card from "./components/Card"
import Controller from "./components/Controller";
import { useEffect, useState } from "react";
import UploadModal from "./components/UploadModal";
import { openModal } from "./store/globalStateSlice";
import { useDispatch,useSelector } from "react-redux";
import checkCards from "./utils/checkCards";
import openSerial from "./utils/openSerial";
import { getInitCoin } from "./utils/getInitCoin";

import { voteProposal } from "./utils/voteProposal";
import { agree,disagree,resetAgree } from "./store/globalStateSlice";

const confirm = (currentCardIndex, setCurrentCardIndex, currentCard,ifAgree) => {

	const contractAddresses = JSON.parse(localStorage.getItem("address")) || []; // 获取储存在localStroage中的已部署合约地址

	const currentContractAddress = contractAddresses[parseInt(currentCardIndex)];
	const walletAddress = "0x28db1f2c2e21aefc7aa4f102c9adfb92d94c49bfeb93aaa11cf40f2f98c1f5c7";

    voteProposal(currentContractAddress,ifAgree,walletAddress);
    currentCard.classList.remove("-translate-x-1/2");
    currentCard.classList.remove("translate-x-1/2");
}

const down = (currentCardIndex, setCurrentCardIndex, currentCard,dispatch) => {
    dispatch(resetAgree());
    const triggerBottom = currentCard.offsetHeight
    const root = document.documentElement;
    root.scrollTo({
        top: root.scrollTop + triggerBottom,
        behavior: "smooth"
    });
    if (currentCardIndex < 99) {
        setCurrentCardIndex(currentCardIndex => currentCardIndex + 1);
    }
    currentCard.classList.remove("-translate-x-1/2");
    currentCard.classList.remove("translate-x-1/2");
}

const up = (currentCardIndex, setCurrentCardIndex, currentCard,dispatch) => {
    dispatch(resetAgree());
    const triggerBottom = currentCard.offsetHeight
    const root = document.documentElement;
    root.scrollTo({
        top: root.scrollTop - triggerBottom,
        behavior: "smooth"
    });
    if (currentCardIndex > 0)
        setCurrentCardIndex(currentCardIndex => currentCardIndex - 1);
    currentCard.classList.remove("-translate-x-1/2");
    currentCard.classList.remove("translate-x-1/2");
}

const left = (currentCardIndex, setCurrentCardIndex, currentCard,dispatch) => {
    dispatch(disagree());
    currentCard.classList.remove("translate-x-1/2");
    currentCard.classList.add("-translate-x-1/2");
}

const right = (currentCardIndex, setCurrentCardIndex, currentCard,dispatch) => {
    dispatch(agree());
    currentCard.classList.remove("-translate-x-1/2");
    currentCard.classList.add("translate-x-1/2");
}

const InitiateProposal = ( { setSerialRecv } ) => {
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
				openSerial(setSerialRecv);
			}}
			className="bg-black text-white rounded-lg p-6 cursor-pointer shadow-2xl">
				open serial
			</div>
			<div
			onClick={() => {
				getInitCoin();
			}}
			className="bg-black text-white rounded-lg p-6 cursor-pointer shadow-2xl">
				get init coid
			</div>
		</div>
	)
}

export default function App() {
	window.addEventListener("scroll", checkCards);
	const [currentCardIndex, setCurrentCardIndex] = useState(0);
	const [currentCard, setCurrentCard] = useState(null);
	const contractAddresses = JSON.parse(localStorage.getItem("address")) || []; // 获取储存在localStroage中的已部署合约地址
	const [serialRecv, setSerialRecv] = useState("");
	const dispatch = useDispatch();

	//console.log("deployed contract address : ",contractAddresses);

	useEffect(() => {
		const cards = document.querySelectorAll("#card");
		cards.forEach((card, index) => {
			if (index === currentCardIndex) {
				card.classList.add("scale-125");
				setCurrentCard(card);
			} else {
				card.classList.remove("scale-125");
				card.classList.remove("-translate-x-1/2");
				card.classList.remove("translate-x-1/2");
			}
		});
	}, [currentCardIndex]);

	const [tmpStep,setTmpStep] = useState(0);

	useEffect(() => {
		console.log("serialRecv : ",serialRecv);
		if(currentCard) {
			console.log(tmpStep);
			if(serialRecv === 'U') {
				up(currentCardIndex, setCurrentCardIndex, currentCard,dispatch);
			} else if(serialRecv === 'D') {
				down(currentCardIndex, setCurrentCardIndex, currentCard,dispatch);
			} else if(serialRecv === 'L') {
				left(currentCardIndex, setCurrentCardIndex, currentCard,dispatch);
			} else if(serialRecv === 'R') {
				right(currentCardIndex, setCurrentCardIndex, currentCard,dispatch);
			} else if(serialRecv === 'C') {
				confirm(currentCardIndex, setCurrentCardIndex, currentCard,true);
			}
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[serialRecv]);
	return (
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
				setSerialRecv={setSerialRecv}
			/>
			<UploadModal />
		</div>
	)
}