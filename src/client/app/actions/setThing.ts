import { createAction } from 'typesafe-actions';

const type: 'APP:SET_THING' = 'APP:SET_THING';

const action = () => ({
  type,
  payload: null
})

export default createAction(type, action)
