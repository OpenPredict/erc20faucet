const OPUSDToken = artifacts.require("OPUSDToken");

module.exports = function(deployer) {
  deployer.deploy(OPUSDToken)
};
