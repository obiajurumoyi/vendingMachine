# VendingMachine Contract

## Overview

The `VendingMachine` contract simulates a basic vending machine on the Ethereum blockchain. It allows users to deposit Ether, purchase items, and withdraw funds. The contract owner can set the price of each item.

## Features

- **Deposit Funds**: Users can deposit Ether into their account.
- **Purchase Items**: Users can buy items from the vending machine if they have sufficient funds.
- **Withdraw Funds**: Users can withdraw their deposited Ether.
- **Check Balance**: Users can check their account balance.
- **Set Item Price**: The contract owner can set the price for each item.

## Functions

### `function depositFunds() external payable`

Allows users to deposit Ether into their account. The deposited amount is added to the user's balance.

### `function purchaseItem(uint256 itemId, uint256 amount) external`

Allows users to purchase items from the vending machine. The user must have sufficient funds and the item must be in stock. If the item is out of stock, the transaction is reverted.

### `function checkBalance() external view returns (uint256)`

Returns the balance of the calling user.

### `function withdrawFunds(uint256 amount) external`

Allows users to withdraw a specified amount of Ether from their balance. The contract balance must be sufficient for the withdrawal.

### `function setItemPrice(uint256 newPrice) external`

Allows the contract owner to set a new price for each item.

## Deployment and Usage

1. **Deploy the Contract**: Use an Ethereum development environment like Remix, Hardhat, or Truffle to deploy the contract.

2. **Interact with the Contract**:
   - **Deposit Funds**: Call `depositFunds` with Ether.
   - **Purchase Items**: Call `purchaseItem` with the item ID and quantity.
   - **Withdraw Funds**: Call `withdrawFunds` with the amount to withdraw.
   - **Check Balance**: Call `checkBalance` to view your balance.
   - **Set Item Price**: Use `setItemPrice` to update the price of items (only accessible by the owner).
