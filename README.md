# Decentralized Real Estate Marketplace

A decentralized house listing service to prevent title issues that could be mitigated by blockchain technology.



## Versions

      truffle: Truffle v5.0.24
      truffle-compiler: 0.5.1+commit.c8a2cb62.Emscripten.clang


## Contracts

### SolnSquareVerifier.sol

<b>Note</b>: SolnSquareVerifier inherits all other contracts except verifier.sol

Completed contract that inherits the ERC721 token backed through zkSnarks that enhances privacy and scalability.

### verifier.sol

Implements Succinct Zero-knowledge proofs (zkSnarks).


---

## Quick Start Deploying to Ganache and Testing

1. cd into project repro & install modules

        cd RealEstateMarketPlace

        npm install

2. Compile Contracts

        truffle compile

1. Start ganache (CLI or GUI)

            ganache-cli

2. Mirgrate locally

              truffle migrate --network development --reset

#### Testing contracts

Testing ERC721

File: TestERC721Mintable.js

Test minting functionality of tokens and transfer of tokens.

    truffle test ./test/TestERC721Mintable.js

Test zkSnarks

File: TestSquareVerifier.js

Verifies zkSnarks is successfully implemented.

    truffle test ./test/TestSquareVerifier.js

Testing ERC721 token with zkSnarks

File: TestSolnSquareVerifier.js

Test minting with zkSnarks.

    truffle test ./test/TestSolnSquareVerifier.js

---

## Quick Start Deploying to Rinkeby

1. Make a new project with Infura

    Infura: https://infura.io

2. Setup truffle-config

    2.1 set infuraKey 

    2.2 set mnemonic from metamask within HDWalletProvider

    2.3 set rinkeby endpoint within HDWalletProvider 

3. Migrate to rinkeby

        truffle migrate --network rinkeby

4. Finding ER721 token on ether-scan

  https://rinkeby.etherscan.io/address/0x64f76b85A02F050AA36E1404A997Eda9F3a6543b

5. Minting tokens

  https://www.myetherwallet.com/interface/interact-with-contract

6. Finding tokes on rinkeby OpenSea

  https://rinkeby.opensea.io/assets/0x64f76b85a02f050aa36e1404a997eda9f3a6543b/1



## assets

  https://rinkeby.opensea.io/assets/0x64f76b85a02f050aa36e1404a997eda9f3a6543b/1
  https://rinkeby.opensea.io/assets/0x64f76b85a02f050aa36e1404a997eda9f3a6543b/2
  https://rinkeby.opensea.io/assets/0x64f76b85a02f050aa36e1404a997eda9f3a6543b/3
  https://rinkeby.opensea.io/assets/0x64f76b85a02f050aa36e1404a997eda9f3a6543b/4




## Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)
