import Web3 from "web3";

const abi = require("../config/abi.json").abi;
const studentDAO_abi = require("../config/studentDAO_abi.json").abi;
const studentDAO_address = "0xE9c8A9396f2D9aEd8dDb6D4cA7810dad59aC12eF";

export const voteProposal = (contractAddress, vote=true,privateKey) => {
    const web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:8545"));
    
    //console.log("contract address : ",contractAddress);
    //const tmp = "0x3aaBA7dB9Ae272B9E51Ff77581E24aa7Fb82c5b6";
    const votingContract = new web3.eth.Contract(abi, contractAddress);
    const studentDAOContract = new web3.eth.Contract(studentDAO_abi, studentDAO_address);

    web3.eth.accounts[0] = web3.eth.accounts.privateKeyToAccount(privateKey).address;

    /**
     * 在一次投票前，先判断发起者是否有足够的代币
     */
    studentDAOContract.methods.transfer("0xe5C1ad9473B8B0BBc49258dfE961F58157e59291",5).send({
        from: web3.eth.accounts[0],
        gas: '4700000',
        gasPrice: '3000'
    },function(e,contract){
        console.log("transfer",contract);
    }).then(res => {
        console.log("transfer res : ",res);
    }).then(() => {
        // 如果有足够的代币，则投票
        votingContract.methods.vote(vote).send({
            from: web3.eth.accounts[0],
            gas: '4700000',
            gasPrice: '3000'
        },function(e,contract){
            console.log("vote",contract);
        }).then(res => {
            console.log("vote res : ",res);
        });
    })

    /*
    votingContract.methods.vote(vote).send({
        from: web3.eth.accounts[0],
        gas: '4700000',
        gasPrice: '3000'
    },function(e,contract){
        console.log("vote",contract);
    }).then(res => {
        console.log("vote res : ",res);
    });*/
}