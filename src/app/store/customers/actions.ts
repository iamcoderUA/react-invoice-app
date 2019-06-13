import { ActionType, createAction } from 'typesafe-actions';

import { Customer } from '../../shared/interfaces/customer';

export enum ActionTypes {
  GET_CUSTOMERS = 'GET_CUSTOMERS',
  GET_CUSTOMERS_SUCCESS = 'GET_CUSTOMERS_SUCCESS',
  GET_CUSTOMERS_FAILURE = 'GET_CUSTOMERS_FAILURE',
}

export const actions = {
  getCustomers: createAction(ActionTypes.GET_CUSTOMERS),
  getCustomersSuccess: createAction(ActionTypes.GET_CUSTOMERS_SUCCESS, action => {
    return (data: Customer[]) => action(data)
  }),
  getCustomersFailure: createAction(ActionTypes.GET_CUSTOMERS_FAILURE, (action: any) => {
    return (data: any) => action(data)
  }),
};

export type Actions = ActionType<typeof actions>;
