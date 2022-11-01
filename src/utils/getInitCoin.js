import Web3 from "web3";

const studentDAO_abi = require("../config/studentDAO_abi.json").abi;
const studentDAO_address = "0xC51233a070Dc40429448334cd545706ae52D5309";

export const getInitCoin = () => {
    const web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:8545"));
    const studentDAOContract = new web3.eth.Contract(studentDAO_abi, studentDAO_address);

    const receiverKey = "05da7a3e88a6fe43aa5e859adaf971504270a664dd7a0abeef8d5d033b3f0039";
    const receiverAddress = web3.eth.accounts.privateKeyToAccount(receiverKey).address;

    studentDAOContract.methods.transfer(receiverAddress,100).send({
        from:"0xe5C1ad9473B8B0BBc49258dfE961F58157e59291",
        gas: '4700000',
        gasPrice: '3000'
    },function(e,contract){
        console.log("get init coin",contract);
    }).then(res => {
        console.log("get init coin res : ",res);
    });
}