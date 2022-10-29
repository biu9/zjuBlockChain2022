import Web3 from "web3";
import { useRef, useState } from "react";
const abi = require("../config/abi.json").abi;

export default function useReadContractData(contractAddress) {
    const web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:8545"));
    //const contractAddress = "0xE3c58D312Ec22b165C90ed54a62bA101B9243757";

    const votingContract = new web3.eth.Contract(abi, contractAddress);
    const address = "0xdE5340543EA7b17A321095ec1eAdC911d1c0C3A2";

    const title = useRef("");
    const content = useRef("");
    const proposer = useRef("");
    const agree = useRef(0);
    const disagree = useRef(0);
    const ifExpired = useRef(false);

    votingContract.methods.getTitle().call({
        from: address
    },function(e,contract){
        //setTitle(contract);
        title.current = contract;
    });

    votingContract.methods.getDescription().call({
        from: address
    },function(e,contract){
        //setContent(contract);
        content.current = contract;
    });

    votingContract.methods.getProposer().call({
        from: address
    },function(e,contract){
        //setProposer(contract);
        proposer.current = contract;
    });

    votingContract.methods.agreeNum().call({
        from: address
    },function(e,contract){
        //setAgree(contract);
        agree.current = contract;
    });

    votingContract.methods.disagreeNum().call({
        from: address
    },function(e,contract){
        //setDisagree(contract);
        disagree.current = contract;
    });

    votingContract.methods.ifExpired().call({
        from: address
    },function(e,contract){
        //setIfExpired(contract);
        ifExpired.current = contract;
    });

    const res = {
        title:title.current,
        content:content.current,
        proposer:proposer.current,
        agree:agree.current,
        disagree:disagree.current,
        ifExpired:ifExpired.current
    }

    return res;
}