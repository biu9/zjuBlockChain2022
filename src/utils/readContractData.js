import Web3 from "web3";

const abi = [
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
    }
]

export default function readContractData() {
    const web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:8545"));
    const contractAdress = "0x3FF778727428234De5b182a1D0166E105Abe5f6B";

    const votingContract = new web3.eth.Contract(abi, contractAdress);
    const address = "0xA950De0dBc2708977e216478E19fFC7f297F7818";

    votingContract.methods.totalVotesFor("0x416c696365000000000000000000000000000000000000000000000000000000").call({
        from: address
    }, function (e, contract) {
        console.log(e, contract);
    })
}