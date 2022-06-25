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

