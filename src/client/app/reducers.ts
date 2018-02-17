import { getType } from 'typesafe-actions';
import { $call } from 'utility-types';
import actions from './actions';

const returnOfActions = Object.values(actions).map($call);
export type Action = typeof returnOfActions[number];
export type State = {

};

const initialState = {

};

const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {

    case getType(actions.setThing): return {
      ...state
    }

    default: return state;
  }
}

export default reducer;
