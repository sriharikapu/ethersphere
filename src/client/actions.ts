import { getReturnOfExpression } from 'react-redux-typescript';
import { RouterAction, LocationChangeAction } from 'react-router-redux';

import app from 'client/app';

const allActions = [
  ...Object.values(app.actions),
];
const returnOfActions = allActions.map(getReturnOfExpression);

type AppAction = typeof returnOfActions[number];
type ReactRouterAction = RouterAction | LocationChangeAction;

export type RootAction =
  | AppAction
  | ReactRouterAction;
