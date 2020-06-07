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

### Contract ABI
Can be found on eth-contracts/build/contracts folder on github cloned repository

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


## Results
```
> Compiled successfully using:
   - solc: 0.5.5+commit.47a71e8f.Emscripten.clang



Migrations dry-run (simulation)
===============================
> Network name:    'rinkeby-fork'
> Network id:      4
> Block gas limit: 0x989680


1_initial_migration.js
======================

   Replacing 'Migrations'
   ----------------------
   > block number:        6624127
   > block timestamp:     1591517379
   > account:             0x7E485f61Cd098802fC55EF3A81642cc70Ea98400
   > balance:             3.1900865115
   > gas used:            208305
   > gas price:           2 gwei
   > value sent:          0 ETH
   > total cost:          0.00041661 ETH

   -------------------------------------
   > Total cost:          0.00041661 ETH


2_deploy_contracts.js
=====================

   Replacing 'Verifier'
   --------------------
   > block number:        6624129
   > block timestamp:     1591517405
   > account:             0x7E485f61Cd098802fC55EF3A81642cc70Ea98400
   > balance:             3.1879729495
   > gas used:            1029418
   > gas price:           2 gwei
   > value sent:          0 ETH
   > total cost:          0.002058836 ETH


   Replacing 'SolnSquareVerifier'
   ------------------------------
   > block number:        6624130
   > block timestamp:     1591517485
   > account:             0x7E485f61Cd098802fC55EF3A81642cc70Ea98400
   > balance:             3.1816014575
   > gas used:            3185746
   > gas price:           2 gwei
   > value sent:          0 ETH
   > total cost:          0.006371492 ETH

   -------------------------------------
   > Total cost:         0.008430328 ETH


Summary
=======
> Total deployments:   3
> Final cost:          0.008846938 ETH



Starting migrations...
======================
> Network name:    'rinkeby'
> Network id:      4
> Block gas limit: 0x989680


1_initial_migration.js
======================

   Replacing 'Migrations'
   ----------------------
   > transaction hash:    0x2e0fa5597709a75b6d9c16455834427526953909e95b0bac35e3372cbf0b686b
   > Blocks: 1            Seconds: 9
   > contract address:    0x112c8a423bccf610952738DfA2eD921D6Ac3923F
   > block number:        6624138
   > block timestamp:     1591517540
   > account:             0x7E485f61Cd098802fC55EF3A81642cc70Ea98400
   > balance:             3.1860370215
   > gas used:            223305
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.0044661 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:           0.0044661 ETH


2_deploy_contracts.js
=====================

   Replacing 'Verifier'
   --------------------
   > transaction hash:    0x3e4b9a8e5fb3583ba738aec71f759292ed29b0897f000fdb76ae97234497f4fd
   > Blocks: 1            Seconds: 9
   > contract address:    0x96e383F80A70BA1B19B64345A72e28df3F09846B
   > block number:        6624140
   > block timestamp:     1591517570
   > account:             0x7E485f61Cd098802fC55EF3A81642cc70Ea98400
   > balance:             3.1646014015
   > gas used:            1029418
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.02058836 ETH


   Replacing 'SolnSquareVerifier'
   ------------------------------
   > transaction hash:    0xa6f91720c3f5a60665f7cfc3dbd5f2afa9d6a141ea5c4980f287639a18c2dd01
   > Blocks: 2            Seconds: 38
   > contract address:    0x0B1d2F3a3bA4665E6EEe6b8890487691129CdD6A
   > block number:        6624144
   > block timestamp:     1591517630
   > account:             0x7E485f61Cd098802fC55EF3A81642cc70Ea98400
   > balance:             3.0975864815
   > gas used:            3350746
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.06701492 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.08760328 ETH


Summary
=======
> Total deployments:   3
> Final cost:          0.09206938 ETH

```

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
