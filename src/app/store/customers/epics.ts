import { Action } from 'redux';
import { Epic } from 'redux-observable';

import { isOfType } from 'typesafe-actions';

import { filter, map } from 'rxjs/operators';

import { RootState } from '../store';
import { customersRequestAC } from '../request';

import * as fromActions from './actions';


const getCustomersEpic: Epic<Action<fromActions.ActionTypes.GET_CUSTOMERS>, Action<any>, RootState> = (action$, store$) => action$.pipe(
  filter(isOfType(fromActions.ActionTypes.GET_CUSTOMERS)),
  filter(() => {
    const {loaded, loading} = store$.value.request.customers.customersGet;
    return !loaded && !loading;
  }),
  map(() => customersRequestAC.customersGet.actions.request())
);

export const customersEpics = [
  getCustomersEpic,
];