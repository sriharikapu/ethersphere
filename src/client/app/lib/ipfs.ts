const request = require('browser-request')
const ipfsApi = require('ipfs-api')
const { promisify } = require('bluebird')

function ipfsUrl(hash) {
  //return `https://gateway.ipfs.io/ipfs/${hash}`
  return `https://ipfsgateway.ethersphe.re/ipfs/${hash}`
}

async function getJson (ipfsHash) {
  let json = {}

  try {
    json = await promisify(request)({
      url: ipfsUrl(ipfsHash),
      json: true
    })
  } catch (error) {
    console.error(error)
  }

  return json
}

const ipfs = ipfsApi({
  host: 'ipfsapi.ethersphe.re',
  port: '443',
  protocol: 'https'
})

function uploadJson(obj) {
  return ipfs.add(Buffer.from(JSON.stringify(obj)))
}

function uploadFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()

    reader.onloadend = () => {
      const buffer = Buffer.from(reader.result)
      ipfs.add(buffer)
      .then(files => {
        resolve(files)
      })
      .catch(error => reject(error))
    }

    reader.readAsArrayBuffer(file)
  })
}

function uploadFromUrl(url) {
  return new Promise((resolve, reject) => {
    ipfs.util.addFromURL(url)
    .then(files => {
      resolve(files)
    })
    .catch(error => reject(error))
  })
}

export {
  uploadJson,
  uploadFile,
  uploadFromUrl,
  getJson,
  ipfsUrl
}
