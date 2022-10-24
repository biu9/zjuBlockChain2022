import Card from "./components/Card"
import Controller from "./components/Controller";
import { useEffect, useState } from "react";
import UploadModal from "./components/UploadModal";
import { Provider } from "react-redux";
import store from "./store/index";
import { openModal } from "./store/globalStateSlice";
import { useDispatch } from "react-redux";

function checkCards() {
	const triggerBottom = window.innerHeight / 5 * 4;
	const cards = document.querySelectorAll("#card");
	const cardChoice = document.querySelectorAll("#voteChoice");
	cards.forEach((card, index) => {
		//console.log(card.getBoundingClientRect().top);
		if (card.getBoundingClientRect().top < triggerBottom) {
			card.classList.add("translate-x-0");
			card.classList.remove("translate-x-4full");
			cardChoice[index].classList.add("translate-x-0");
			cardChoice[index].classList.remove("translate-x-4full");
		} else {
			card.classList.remove("translate-x-0");
			card.classList.add("translate-x-4full");
			cardChoice[index].classList.remove("translate-x-0");
			cardChoice[index].classList.add("translate-x-4full");
		}
	});
}

const InitiateProposal = () => {
	const dispatch = useDispatch();
	return (
		<div className="absolute right-0 bottom-0 p-10">
			<div 
			onClick={() => {
				dispatch(openModal());
			}}
			className="bg-black text-white rounded-lg p-6 cursor-pointer shadow-2xl">
				initiate proposal
			</div>
		</div>
	)
}

export default function App() {
	window.addEventListener("scroll", checkCards);
	const [currentCardIndex, setCurrentCardIndex] = useState(0);
	const [currentCard, setCurrentCard] = useState(null);
	const tmp = new Array(100).fill(0);
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
					tmp.map((_, index) => {
						return (
							<Card
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
				<InitiateProposal />
				<UploadModal />
			</div>
		</Provider>
	)
}