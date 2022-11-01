pragma solidity ^0.8.17;

contract studentDAO {
    uint256 totalSupplyNumber;
    mapping(address => uint256) balances;
    mapping(address => mapping(address => uint256)) allowances;
    mapping(address => bool) ifGotCoin;
    string public name = "TCoin";
    string public symbol = "t";
    uint256 public decimals = 18;

    event Transfer(address indexed _from, address indexed _to, uint256 _value);
    event Approval(
        address indexed _owner,
        address indexed _spender,
        uint256 _value
    );

    constructor () {
        totalSupplyNumber = 100;
        balances[msg.sender] = totalSupplyNumber;
    }

    /**
     * 返回总量
     */
    function totalSupply() public view returns (uint256 _totalSupplyNumber) {
        _totalSupplyNumber = totalSupplyNumber;
        return _totalSupplyNumber;
    }

    /**
     * 返回余额
     */
    function balanceOf(address _owner) public view returns (uint256 balance) {
        return balances[_owner];
    }

    /**
     * 返回额度
     */
    function allowance(address _owner, address _spender) public view returns (uint256 remaining) {
        return allowances[_owner][_spender];
    }

    /**
     * 发币
     */
    function approve(address _spender, uint256 _value) public returns (bool success) {
        allowances[msg.sender][_spender] = _value;
        emit Approval(msg.sender, _spender, _value);
        return true;
    }

    /**
     * 转账
     */
    function transfer(address _to, uint256 _value) public returns (bool success) {
        require(balances[msg.sender] >= _value, "Insufficient balance");
        balances[msg.sender] -= _value;
        balances[_to] += _value;
        emit Transfer(msg.sender, _to, _value);
        return true;
    }

    function transferFrom(address _from,address _to, uint256 _value) public returns (bool success) {
        require(allowances[_from][msg.sender] >= _value, "Insufficient balance");
        allowances[_from][msg.sender] -= _value;
        balances[_from] -= _value;
        balances[_to] += _value;
        return true;
    }
}
