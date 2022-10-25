import Web3 from "web3";

const abi = [
    {
        "constant": false,
        "inputs": [
            {
                "name": "candidate",
                "type": "bytes32"
            }
        ],
        "name": "voteForCandidate",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "name": "candidateNames",
                "type": "bytes32[]"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "candidateList",
        "outputs": [
            {
                "name": "",
                "type": "bytes32"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "candidate",
                "type": "bytes32"
            }
        ],
        "name": "totalVotesFor",
        "outputs": [
            {
                "name": "",
                "type": "uint8"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "candidate",
                "type": "bytes32"
            }
        ],
        "name": "validCandidate",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "bytes32"
            }
        ],
        "name": "votesReceived",
        "outputs": [
            {
                "name": "",
                "type": "uint8"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
]

export default function createContract() {
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
        data: "0x608060405234801561001057600080fd5b50604051610419380380610419833981018060405281019080805182019291905050508060009080519060200190610049929190610050565b50506100c8565b828054828255906000526020600020908101928215610092579160200282015b82811115610091578251829060001916905591602001919060010190610070565b5b50905061009f91906100a3565b5090565b6100c591905b808211156100c15760008160009055506001016100a9565b5090565b90565b610342806100d76000396000f30060806040526004361061006d576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680632f265cf714610072578063392e6678146100bd5780637021939f14610106578063b13c744b14610151578063cc9ab2671461019a575b600080fd5b34801561007e57600080fd5b506100a160048036038101908080356000191690602001909291905050506101cb565b604051808260ff1660ff16815260200191505060405180910390f35b3480156100c957600080fd5b506100ec6004803603810190808035600019169060200190929190505050610211565b604051808215151515815260200191505060405180910390f35b34801561011257600080fd5b506101356004803603810190808035600019169060200190929190505050610276565b604051808260ff1660ff16815260200191505060405180910390f35b34801561015d57600080fd5b5061017c60048036038101908080359060200190929190505050610296565b60405180826000191660001916815260200191505060405180910390f35b3480156101a657600080fd5b506101c960048036038101908080356000191690602001909291905050506102b9565b005b60006101d682610211565b15156101e157600080fd5b60016000836000191660001916815260200190815260200160002060009054906101000a900460ff169050919050565b600080600090505b6000805490508160ff16101561026b57826000191660008260ff1681548110151561024057fe5b906000526020600020015460001916141561025e5760019150610270565b8080600101915050610219565b600091505b50919050565b60016020528060005260406000206000915054906101000a900460ff1681565b6000818154811015156102a557fe5b906000526020600020016000915090505481565b6102c281610211565b15156102cd57600080fd5b6001806000836000191660001916815260200190815260200160002060008282829054906101000a900460ff160192506101000a81548160ff021916908360ff160217905550505600a165627a7a723058204fbf6c115dcfdb2c759a59837834cd99fded3e4c528a4013fd32783334dc23800029",
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