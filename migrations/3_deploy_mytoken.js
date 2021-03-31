
const MyToken = artifacts.require("MyToken")
const MyFarmToken = artifacts.require("MyFarmToken")

module.exports = async function (deployer, network, accounts) {
  // Deploy MyToken
  await deployer.deploy(MyToken)
  const myToken = await MyToken.deployed()