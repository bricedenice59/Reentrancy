const Bank = artifacts.require("Bank");
const Attack = artifacts.require("Attack");

module.exports = function (deployer) {
    deployer.deploy(Bank).then(function () {
        return deployer.deploy(Attack, Bank.address)
    });
};

//const bank = await Bank.deployed()
//const attack = await Attack.deployed()
//Attack.defaults({from:''}) //any account from Ganache that has enough ethers for testing 
//bank.deposit({value: 30000000000000000000})
//attack.attack({value: 1000000000000000000})