import Web3 from "web3";

const abi = require("../config/abi.json").abi;
const deployData = require("../config/contractDeployData.json").data;

export default function createContract(title,content,proposer,address) {
    const web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:8545"));
    const candidateNames = [
    "0xd4967590eb024589dfb6b9e48a576eb49ebc19d764b0d1d67dc21975e7258e97",
    "0x416c696365000000000000000000000000000000000000000000000000000000",
    "0x426f620000000000000000000000000000000000000000000000000000000000",
    "0x4361727900000000000000000000000000000000000000000000000000000000",
    "0x065e0be95fb43db528a20ba65c0e575e33cd4a9e1ca089dba4efff24596e8553"];
    
    const votingContract = new web3.eth.Contract(abi);
    web3.eth.accounts[0] = web3.eth.accounts.privateKeyToAccount("0x28db1f2c2e21aefc7aa4f102c9adfb92d94c49bfeb93aaa11cf40f2f98c1f5c7").address;

    votingContract.deploy({
        data: deployData,
        arguments : [candidateNames],
    }).send({
        from: web3.eth.accounts[0],
        gas: '4700000',
        gasPrice: '3000000000000'
    }, function (e, contract) {
        console.log(e, contract);
        if (typeof contract.address !== 'undefined') {
            console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
        }
    }).then(function(newContractInstance){
        console.log(newContractInstance.options.address) // 带有新合约地址的合约实例
        return newContractInstance;
    });
}