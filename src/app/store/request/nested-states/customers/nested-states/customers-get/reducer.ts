import { RequestNestedState } from '../../state'

import * as fromActions from './actions';
import { initialState } from './state';


export function reducer(state = initialState, action: fromActions.Actions): RequestNestedState {
  
  switch (action.type) {
    case fromActions.ActionTypes.GET_CUSTOMERS_REQUEST:
      return {
        loading: true,
        loaded: false,
        errors: null,
        data: null,
      };
    
    case fromActions.ActionTypes.GET_CUSTOMERS_REQUEST_SUCCESS: {
      return {
        loading: false,
        loaded: true,
        errors: null,
        data: action.payload,
      };
    }
    
    case fromActions.ActionTypes.GET_CUSTOMERS_REQUEST_FAILURE: {
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    }
    
    default:
      return state
  }
}