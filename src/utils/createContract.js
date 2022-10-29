import Web3 from "web3";

const abi = require("../config/abi.json").abi;
const deployData = require("../config/contractDeployData.json").data;

export default function createContract(title,content,proposer,address) {
    const EXPIRE = 10000;
    const web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:8545"));
    const contractAddresses = JSON.parse(localStorage.getItem("address")) || []; // 获取储存在localStroage中的已部署合约地址

    const votingContract = new web3.eth.Contract(abi);
    web3.eth.accounts[0] = web3.eth.accounts.privateKeyToAccount("0x28db1f2c2e21aefc7aa4f102c9adfb92d94c49bfeb93aaa11cf40f2f98c1f5c7").address;

    votingContract.deploy({
        data: deployData,
        arguments : [title,content,EXPIRE,proposer],
    }).send({
        from: web3.eth.accounts[0],
        gas: '4700000',
        gasPrice: '3000000000000'
    }).then(function(newContractInstance){
        console.log("the address of deployed contract",newContractInstance.options.address); // 带有新合约地址的合约实例
        contractAddresses.push(newContractInstance.options.address);
        localStorage.setItem("address",JSON.stringify(contractAddresses));
        return newContractInstance;
    });
}