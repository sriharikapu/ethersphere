require('dotenv').config()

const tc = require('truffle-contract')
const {utils}= require('web3')
const pify = require('pify')
const {soliditySHA3} = require('ethereumjs-abi')
const providerUri = 'https://mainnet.infura.io:443'
const Web3HttpProvider = require('web3-providers-http')

const ABI = null; // require('./contracts/ABI.json')
const provider = new Web3HttpProvider(providerUri)

let instance = null

async function setInstance () {
  instance = tc(ABI)
  instance.setProvider(provider)
  instance = await instance.deployed()
}

async function getData(opts) {
  try {
    const data = await instance.myMethod.call(opts.something)
    return data
  } catch (error) {
    console.error(error)
    return []
  }
}

function getInstance () {
  return instance
}

async function init () {
  await setInstance()
}

init()

module.exports = {
  init,
  getInstance,
  getData
}
