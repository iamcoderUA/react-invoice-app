import { createSelector } from 'reselect';

import { RootState } from '../store';

import { Customer } from '../../shared/interfaces/customer';

export interface CustomersState {
  entities:
    {
      [_id: string]: Customer
    };
  ids: string[];
}

export const initialState: CustomersState = {
  entities: {},
  ids: [],
};

export const getCustomersState = createSelector(
  (state: RootState): CustomersState => state.customers,
  (customers: CustomersState): Customer[] => customers.ids.map((id) => customers.entities[id])
);