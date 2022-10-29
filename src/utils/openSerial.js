import { voteProposal } from "./voteProposal";
import { agree,disagree,resetAgree } from "../store/globalStateSlice";

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

export default async function openSerial(currentCardIndex, setCurrentCardIndex, currentCard,ifAgree,dispatch) {
    if ("serial" in navigator) {
        const port = await navigator.serial.requestPort();
        //打开串口
        await port.open({
            baudRate: 9600, // 波特率
            //dataBits: 8, // 每帧的数据位数(7或8)
            parity: 'none', // 校验模式，可以是none，偶数，奇数
            flowControl: 'hardware', // 流控模式(none或hardware)。
            bufferSize: 1024 // 读取缓冲区的大小
        });
        const reader = port.readable.getReader();
        // 监听来自串口的数据
        setInterval(async() => {
            const { value, done } = await reader.read();
            // value 是一个 Uint8Array
            // 将其转换为字符串
            const tmpStr = new TextDecoder().decode(value);
            if(tmpStr.charCodeAt() !== 13) {
                console.log(tmpStr.trim());    
            }
        },1000);
    }
}