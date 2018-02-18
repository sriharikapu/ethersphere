require('dotenv').config()

const tc = require('truffle-contract')
const {utils}= require('web3')
const pify = require('pify')
const {soliditySHA3} = require('ethereumjs-abi')
//const providerUri = 'https://mainnet.infura.io:443'
const providerUri = 'https://kovan.infura.io:443'
const Web3HttpProvider = require('web3-providers-http')

const abi = require('../../../resources/contracts/ethersphere.json')
const provider = new Web3HttpProvider(providerUri)

const address = '0x182A520E304C496fd9F22aeEE003660C92C3E9b9'
let instance = null

async function setInstance () {
  instance = tc({abi})
  instance.setProvider(provider)

  // https://github.com/trufflesuite/truffle-contract/issues/57
  if (typeof instance.currentProvider.sendAsync !== 'function') {
    instance.currentProvider.sendAsync = function() {
      return instance.currentProvider.send.apply(
        instance.currentProvider, arguments
      )
    }
  }

  instance = await instance.at(address)
}

async function getCoords(opts) {
  /*
  try {
    const data = await instance.myMethod.call(opts.something)
    return data
  } catch (error) {
    console.error(error)
    return []
  }
   */
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
  getCoords
}
