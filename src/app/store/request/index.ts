import { combineReducers } from 'redux';

import { customersEpics } from './nested-states/customers/epics';
import { customersReducer } from './nested-states/customers/reducer';
import * as customersState from './nested-states/customers/state';


export { customersRequestAC } from './nested-states/customers/actions';

export const requestEpics = [
  ...customersEpics,
];

export const requestReducer = combineReducers({
  customers: customersReducer,
});

export interface RequestState {
  customers: customersState.CustomersRequestState,
}
