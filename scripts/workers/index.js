/* eslint-disable import/no-unresolved, no-console */
import 'babel-core/register';
import 'babel-polyfill';
import runAllWorkers from './run-all';
import { initHeadWorker, initChainWorker } from './chain-filter';

const args = process.argv.slice();

if (args.length >= 2) {
  args.shift();
  args.shift();
}

const workerArg = args.find(a => /^worker=./.test(a));

if (workerArg) {
  const which = workerArg.split('=')[1];

  switch (which) {
    case 'head-worker':
      initHeadWorker();
      break;
    case 'chain-worker':
      initChainWorker();
      break;
    default:
      console.log(`Invalid worker id: ${which}`);
  }
} else {
  runAllWorkers();
}
