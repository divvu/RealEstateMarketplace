// migrating the appropriate contracts
var SquareVerifier = artifacts.require("verifier.sol");
// var TestERC721Mintable = artifacts.require("ERC721MintableComplete.sol");
var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");

module.exports = async function(deployer) {
  await deployer.deploy(SquareVerifier);
  // await deployer.deploy(TestERC721Mintable,"Div_ERC721MintableToken", "DIV_EC_721");
  await deployer.deploy(SolnSquareVerifier, SquareVerifier.address, "Div_ERC721MintableToken", "DIV_EC_721");

};
