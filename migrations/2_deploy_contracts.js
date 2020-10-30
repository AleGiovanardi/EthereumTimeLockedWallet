var TimeLockedWalletFactory = artifacts.require("TimeLockedWalletFactory");
var TestToken = artifacts.require("TestToken");

module.exports = function(deployer) {
    deployer.deploy(TimeLockedWalletFactory);
    deployer.deploy(TestToken);
};