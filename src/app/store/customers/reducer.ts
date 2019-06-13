import { Customer } from '../../shared/interfaces/customer';

import * as fromActions from './actions';
import { initialState, CustomersState } from './state';

export function reducer(state = initialState, action: fromActions.Actions): CustomersState {
  switch (action.type) {
    
    case fromActions.ActionTypes.GET_CUSTOMERS_SUCCESS: {
      const customers: Customer[] = action.payload;
      return {
        entities: customers.reduce((acc: {}, customer: Customer) => ({
          ...acc,
          [customer._id]: customer
        }), {}),
        ids: customers.map((customer: Customer) => customer._id)
      };
    }
  
    case fromActions.ActionTypes.GET_CUSTOMERS_FAILURE: {
      return {
        ...state,
      };
    }
    
    default:
      return state;
  }
}