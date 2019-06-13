import { createSelector } from 'reselect';

import { RootState } from '../../../../../store';

import { RequestNestedState } from '../../state';

export const initialState: RequestNestedState = {
  loading: false,
  loaded: false,
  errors: null,
  data: null,
};

export const getCustomersRequestState = createSelector(
  (state: RootState): RequestNestedState => state.request.customers.customersGet,
  customersGetRequestState => customersGetRequestState
);
