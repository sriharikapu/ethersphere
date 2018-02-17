/**
 * When web3 is provided by metamask, the accounts may not be available right
 * away. So, if you need the accounts to be available (like for a route that
 * requires a 'user'), the example that they give in their docs won't work.
 *
 * This function takes a callback that will be called when the accounts are
 * acually available. I ran some tests and found that this can take as long as
 * 5 seconds, so this should probably be used only when absolutely necessary.
 */
import Web3 from 'web3';

// caching
let instance;
let ready = false;

// Default export is a promise.
export default Promise.promisify(onWeb3);

// Callback version
export function onWeb3(cb) {
  // We already checked and confirmed its ready before.
  if (ready) {
    return cb();
  }

  // window 'load' event already happened.
  if (document.readyState === 'complete') {
    return onWindowReady(cb);
  }

  // ensure metamask is loaded before init.
  return window.addEventListener('load', () => onWindowReady(cb));
}

function onWindowReady(cb) {
  (window as any).web3 = getWeb3();

  return onCoinbaseAvailable(() => {
    ready = true;
    return cb();
  });
}

function onCoinbaseAvailable(cb) {
  try {
    // If metamask hasn't got the accounts yet, simply reading this value will
    // throw an error. When it doesn't we know it's ready.
    // eslint-disable-next-line
    const coinbase = (window as any).web3.eth.coinbase;

    return cb();
  } catch (err) {
    return setTimeout(() => onCoinbaseAvailable(cb), 50);
  }
}

function getWeb3() {
  if (instance) {
    return instance;
  }

  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  if (typeof (window as any).web3 !== 'undefined') {
    // Use Mist/MetaMask's provider
    instance = new Web3((window as any).web3.currentProvider);
  } else {
    // eslint-disable-next-line
    console.log('No provider found, falling back to RPC');
    const provider = new Web3.providers.HttpProvider('http://localhost:8545');

    instance = new Web3(provider);
  }

  return instance;
}
