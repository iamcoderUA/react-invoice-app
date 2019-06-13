import { combineReducers } from 'redux';

import { reducer as customersGetReducer } from './nested-states/customers-get/reducer';

export const customersReducer = combineReducers({
  customersGet: customersGetReducer,
});