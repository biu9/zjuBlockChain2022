import Web3 from "web3";

const abi = require("../config/abi.json").abi;
const deployData = require("../config/contractDeployData.json").data;
const studentDAO_abi = require("../config/studentDAO_abi.json").abi;
const studentDAO_address = "0xC51233a070Dc40429448334cd545706ae52D5309";

export default function createContract(title,content,proposer,privateKey) {
    const EXPIRE = 10000;
    const web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:8545"));
    const contractAddresses = JSON.parse(localStorage.getItem("address")) || []; // 获取储存在localStroage中的已部署合约地址

    const votingContract = new web3.eth.Contract(abi);
    const studentDAOContract = new web3.eth.Contract(studentDAO_abi, studentDAO_address);
    web3.eth.accounts[0] = web3.eth.accounts.privateKeyToAccount(privateKey).address;

    /**
     * 在发起一次投票前，先判断发起者是否有足够的代币
     */
     studentDAOContract.methods.transfer("0xe5C1ad9473B8B0BBc49258dfE961F58157e59291",20).send({
        from: web3.eth.accounts[0],
        gas: '4700000',
        gasPrice: '3000'
    },function(e,contract){
        console.log("transfer",contract);
    }).then(res => {
        console.log("transfer res : ",res);
    }).then(() => {
        // 如果有足够的代币，则发起投票
        votingContract.deploy({
            data: deployData,
            arguments : [title,content,EXPIRE,proposer],
        }).send({
            from: web3.eth.accounts[0],
            gas: '4700000',
            gasPrice: '3000'
        }).then(function(newContractInstance){
            console.log("the address of deployed contract",newContractInstance.options.address); // 带有新合约地址的合约实例
            contractAddresses.push(newContractInstance.options.address);
            localStorage.setItem("address",JSON.stringify(contractAddresses));
            return newContractInstance;
        });
    });
}