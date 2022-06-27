### Group 7 

# Members 
- Aimen Sahnoun
- Marshal Nganunu
- Celal Aksu
- Gabriel Horvart
- Ryan Chipwanya
- Inaki Cervera-Marzal

# Deployment

Contract address `0x067eA3431a0440F89774233fFCcD7eE170Ab37Bd`

The contract is deployed on [rinkeby tesnet.](https://rinkeby.etherscan.io/address/0x067eA3431a0440F89774233fFCcD7eE170Ab37Bd)


## Script usage

`yarn ts-node ./scripts/Ballot/deployment.ts <contract address> <string proposal1> <string proposal2>`

The parameters are the proposals.

### Example

yarn ts-node ./scripts/Ballot/deployment.ts  "Pizza" "Cake" "Hamburger" "Lasagna" "Popcorn"

#### Output

Using address 0x56491d3F87382b3fF39683B78b04457E06C40A89

Wallet balance 0.02

Deploying Ballot contract

Proposals: 

Proposal N. 1: Pizza

Proposal N. 2: Cake

Proposal N. 3: Hamburger

Proposal N. 4: Lasagna

Proposal N. 5: Popcorn

Awaiting confirmations

Completed

Contract deployed at 0x067eA3431a0440F89774233fFCcD7eE170Ab37Bd

Done in 33.36s.

# Query proposals

Contract address `0x067eA3431a0440F89774233fFCcD7eE170Ab37Bd`

First parameter is contract address.

Second parameter is index number for proposal.

## Script usage

`yarn ts-node ./scripts/Ballot/proposals.ts <contract address> <index number>`

### Example

yarn ts-node ./scripts/Ballot/proposals.ts 0x067eA3431a0440F89774233fFCcD7eE170Ab37Bd 3

#### Output

Using address 0x63FaC9201494f0bd17B9892B9fae4d52fe3BD377

Signer address is : 0x63FaC9201494f0bd17B9892B9fae4d52fe3BD377

Contract address is : 0x067eA3431a0440F89774233fFCcD7eE170Ab37Bd

Proposal name : Lasagna

Proposals vote count : 0

Done in 4.99s.

# Delegate

Contract address `0x067eA3431a0440F89774233fFCcD7eE170Ab37Bd`

First parameter is the contract address.

Second parameter is the address we want to delegate to (Has to have voting rights, otherwise the contract will revert).

## Script usage

`yarn ts-node ./scripts/Ballot/delegate.ts <contract address> <delegate to>`

### Example

`yarn ts-node ./scripts/Ballot/delegate.ts 0x067eA3431a0440F89774233fFCcD7eE170Ab37Bd 0xD24ff979e673188cb0BE80Da4914dF0e621e3e2F`

#### Output

Using address 0x93da76CFc683E1536C91d37abcfE17a60c29B578

Wallet balance 0.09995680299976961

Attaching ballot contract interface to address 0x067eA3431a0440F89774233fFCcD7eE170Ab37Bd

Delegating to this address: 0xD24ff979e673188cb0BE80Da4914dF0e621e3e2F

Awaiting confirmations
Transaction completed.
✨  Done in 29.41s.


# Cast a vote to a ballot

Contract address `0x067eA3431a0440F89774233fFCcD7eE170Ab37Bd`

First parameter is the contract address.

Second parameter is the index of the proposal we want to vote for.

The voter address is given inside the .env file.

## Script usage

`yarn ts-node ./scripts/Ballot/cast.ts <contract address> <int proposal>`

### Example

`yarn ts-node ./scripts/Ballot/delegate.ts 0x067eA3431a0440F89774233fFCcD7eE170Ab37Bd 3`

#### Output

Using address 0xc046cB6389571B43D09008828D6bC25e9997904E

Wallet balance 0.0885635145006305

Attaching ballot contract interface to address 0x067eA3431a0440F89774233fFCcD7eE170Ab37Bd

0xc046cB6389571B43D09008828D6bC25e9997904E votes for proposal number 3

Awaiting confirmations

Transaction completed. Hash: 0xb20a92810e07ca74bf2a7d390252c3a012ea0baacf23b24bc90f1d0021b1cafa

Done in 104.51s.

# Voting Results

Contract address `0x067eA3431a0440F89774233fFCcD7eE170Ab37Bd`

First parameter is the contract address.

## Script usage

`yarn ts-node ./scripts/Ballot/votingResults.ts <contract address> <int proposal>`

### Example

`yarn ts-node ./scripts/Ballot/votingResults.ts 0x067eA3431a0440F89774233fFCcD7eE170Ab37Bd`

#### Output

Using address 0x89ebFFe6Cc220FCdd1291D3E95A80cee3C305360

Wallet balance 0.09988626399878682

Attaching ballot contract interface to address 0x067eA3431a0440F89774233fFCcD7eE170Ab37Bd

The winner of this vote is the Lasagna !

Done in 5.58s.
