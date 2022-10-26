import Web3 from "web3";
import { useState } from "react";

const abi = require("../config/abi.json").abi;

export default function useReadContractData(contractAddress) {
    const web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:8545"));
    //const contractAddress = "0xE3c58D312Ec22b165C90ed54a62bA101B9243757";

    const votingContract = new web3.eth.Contract(abi, contractAddress);
    const address = "0xdE5340543EA7b17A321095ec1eAdC911d1c0C3A2";

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [proposer, setProposer] = useState("");
    const [agree, setAgree] = useState(0);
    const [disagree, setDisagree] = useState(0);

    votingContract.methods.getTitle().call({
        from: address
    },function(e,contract){
        console.log("title",contract);
        setTitle(contract);
    });

    votingContract.methods.getDescription().call({
        from: address
    },function(e,contract){
        console.log("getDescription",contract);
        setContent(contract);
    });

    votingContract.methods.getProposer().call({
        from: address
    },function(e,contract){
        console.log("getProposer",contract);
        setProposer(contract);
    });

    votingContract.methods.agreeNum().call({
        from: address
    },function(e,contract){
        console.log("agreeNum",contract);
        setAgree(contract);
    });

    votingContract.methods.disagreeNum().call({
        from: address
    },function(e,contract){
        console.log("disagreeNum",contract);
        setDisagree(contract);
    });
    return {
        title,
        content,
        proposer,
        agree,
        disagree
    }
}