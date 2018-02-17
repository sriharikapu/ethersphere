import cp from 'child_process';
import winston from 'winston';
import { initChainWorker } from './chain-filter';

let i = 1;

/* =============================================================================
=    Init
============================================================================= */
export default function initAllWokers() {
  // const hw = cp.fork('dist/workers.js', ['worker=head-worker']);
  // const cw = cp.fork('dist/workers.js', ['worker=chain-worker']);
  //
  // hw.on('error', winston.error);
  // cw.on('error', winston.error);
  // hw.on('close', () => winston.info('Closed head worker'));
  // cw.on('close', () => winston.info('Closed chain worker'));

  return workerRecurser(i);
}

function workerRecurser(id) {
  switch (id) {
    // Run things that write to db first

    // Then run the things that refresh the cache

    default:
      i = 1;
      return workerRecurser(i);
  }
}

function recurse() {

  i++;

  return workerRecurser(i);
}

function catchError(e) {
  winston.error(`Worker error: ${e.message}`);
  return recurse();
}
