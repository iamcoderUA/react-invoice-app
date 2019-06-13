import { Observable } from 'rxjs';
import { AjaxResponse } from 'rxjs/ajax';

import { Customer } from './customer';


interface RequestPayload {
  errors?: string,
}

export interface RequestPayloadCustomers extends RequestPayload {
  data?: Customer[],
}

export interface RequestServiceCustomers {
  getCustomers(payload?: RequestPayloadCustomers): Observable<AjaxResponse>;
}
