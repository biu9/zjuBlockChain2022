import Web3 from "web3";

const abi = require("../config/abi.json").abi;

export default function readContractData() {
    const web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:8545"));
    const contractAdress = "0xE3c58D312Ec22b165C90ed54a62bA101B9243757";

    const votingContract = new web3.eth.Contract(abi, contractAdress);
    const address = "0xdE5340543EA7b17A321095ec1eAdC911d1c0C3A2";

    votingContract.methods.getTitle().call({
        from: address
    },function(e,contract){
        console.log("title",contract);
    });

    votingContract.methods.getDescription().call({
        from: address
    },function(e,contract){
        console.log("getDescription",contract);
    });

    votingContract.methods.getProposer().call({
        from: address
    },function(e,contract){
        console.log("getProposer",contract);
    });

    votingContract.methods.agreeNum().call({
        from: address
    },function(e,contract){
        console.log("agreeNum",contract);
    });

    votingContract.methods.disagreeNum().call({
        from: address
    },function(e,contract){
        console.log("disagreeNum",contract);
    });
}