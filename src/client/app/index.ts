import * as Types from './types';
import actions from './actions';
import * as selectors from './selectors';
import reducer, { State, Action } from './reducers';

export { State, Action };
export default { Types, actions, selectors, reducer };
