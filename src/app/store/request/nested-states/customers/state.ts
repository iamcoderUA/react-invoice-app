import { Customer } from '../../../../shared/interfaces/customer';

export interface RequestNestedState {
  loading: boolean;
  loaded: boolean;
  errors: string | null;
  data: Customer[] | null;
}

export interface CustomersRequestState {
  customersGet: RequestNestedState,
}
