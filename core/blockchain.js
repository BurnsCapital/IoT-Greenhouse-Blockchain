/*
* web3 stuff
*/
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
const contract = "";
const abi = "";



/*
* Module exports
*/
exports.web3 = web3;
