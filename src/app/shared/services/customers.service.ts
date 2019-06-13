import { ajax } from 'rxjs/ajax';

import { environment } from '../../../environment';

import { RequestServiceCustomers } from '../../core/interfaces/requests';

class CustomersService implements RequestServiceCustomers {
  
  public getCustomers = () => ajax.get(`${environment.apiUrl}customers`);
}

export default new CustomersService();
