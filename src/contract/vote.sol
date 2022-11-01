pragma solidity ^0.8.17;

contract Vote {
    string public title;
    string public description;
    string public proposer;
    uint public agree;
    uint public disagree;
    uint public expire;

    constructor(string memory _title, string memory _description, uint _expire,string memory _proposer) {
        title = _title;
        proposer = _proposer;
        description = _description;
        expire = block.timestamp + _expire;
    }

    function vote(bool _agree) public {
        require(block.timestamp < expire, "Vote has expired");
        if (_agree) {
            agree++;
        } else {
            disagree++;
        }
    }

    function result() public view returns (string memory) {
        if (agree > disagree) {
            return "Agree";
        } else if (agree < disagree) {
            return "Disagree";
        } else {
            return "Tie";
        }
    }

    function getTitle() public view returns (string memory) {
        return title;
    }

    function getDescription() public view returns (string memory) {
        return description;
    }

    function getProposer() public view returns (string memory) {
        return proposer;
    }

    function agreeNum() public view returns (uint) {
        return agree;
    }

    function disagreeNum() public view returns (uint) {
        return disagree;
    }

    function ifExpired() public view returns (bool) {
        return block.timestamp > expire;
    }
}