import { ActionType, createAsyncAction } from 'typesafe-actions';

import { Customer } from '../../../../../../shared/interfaces/customer';


export enum ActionTypes {
  GET_CUSTOMERS_REQUEST = 'GET_CUSTOMERS_REQUEST',
  GET_CUSTOMERS_REQUEST_SUCCESS = 'GET_CUSTOMERS_REQUEST_SUCCESS',
  GET_CUSTOMERS_REQUEST_FAILURE = 'GET_CUSTOMERS_REQUEST_FAILURE',
}

export const actions = createAsyncAction(
  'GET_CUSTOMERS_REQUEST',
  'GET_CUSTOMERS_REQUEST_SUCCESS',
  'GET_CUSTOMERS_REQUEST_FAILURE',
)<undefined, Customer[], string>();

export type Actions = ActionType<typeof actions>;
