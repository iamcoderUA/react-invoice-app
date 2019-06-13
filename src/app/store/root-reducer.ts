import { combineReducers } from 'redux';

import { reducer as customersReducer } from './customers/reducer';
import { requestReducer } from './request';

const rootReducer = combineReducers({
  customers: customersReducer,
  request: requestReducer,
});

export default rootReducer;
