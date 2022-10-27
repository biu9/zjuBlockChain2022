import Web3 from "web3";

const abi = require("../config/abi.json").abi;

export const voteProposal = (contractAddress, vote,walletAddress) => {
    const web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:8545"));
    
    //console.log("contract address : ",contractAddress);
    //const tmp = "0x3aaBA7dB9Ae272B9E51Ff77581E24aa7Fb82c5b6";
    const votingContract = new web3.eth.Contract(abi, contractAddress);
    
    web3.eth.accounts[0] = web3.eth.accounts.privateKeyToAccount(walletAddress).address;

    votingContract.methods.vote(vote).send({
        from: web3.eth.accounts[0],
        gas: '4700000',
        gasPrice: '3000000000000'
    },function(e,contract){
        console.log("vote",contract);
    }).then(res => {
        console.log("vote",res);
    });
}