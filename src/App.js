import Card from "./components/Card"
import Controller from "./components/Controller";
import { useEffect, useState } from "react";

function checkCards() {
    const triggerBottom = window.innerHeight / 5 * 4;
    const cards = document.querySelectorAll("#card");
    cards.forEach(card => {
        //console.log(card.getBoundingClientRect().top);
        if(card.getBoundingClientRect().top < triggerBottom) {
            card.classList.add("translate-x-0");
            card.classList.remove("translate-x-4full");
        } else {
            card.classList.remove("translate-x-0");
            card.classList.add("translate-x-4full");
        }
    })
}

export default function App() {
    window.addEventListener("scroll", checkCards);
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [currentCard, setCurrentCard] = useState(null);
    const tmp = new Array(100).fill(0);
    useEffect(() => {
        const cards = document.querySelectorAll("#card");
        cards.forEach((card,index) => {
            if(index === currentCardIndex) {
                card.classList.add("scale-110");
                setCurrentCard(card);
            } else {
                card.classList.remove("scale-110");
            }
        });
    },[currentCardIndex]);
    return (
        <div className="flex p-6 bg-stdBg min-h-screen flex-col items-center space-y-6 overflow-hidden">
            <div className="font-mono text-3xl font-bold">
                Voting Board
            </div>
            {
                tmp.map((_,index) => {
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
        </div>
    )
}