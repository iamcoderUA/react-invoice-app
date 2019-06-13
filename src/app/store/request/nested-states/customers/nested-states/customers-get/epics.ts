import { Action } from 'redux';

import { Epic, ofType } from 'redux-observable';

import { AjaxResponse } from 'rxjs/ajax';
import { switchMap, map, catchError } from 'rxjs/operators';
import { Observable, of, from, pipe } from 'rxjs';

import customersService from '../../../../../../shared/services/customers.service';

import * as fromActions from '../../../../../customers/actions';

import * as fromRequestActions from './actions';

export const getCustomersRequestEpic: Epic = (action$: Observable<Action>) => action$.pipe(
  ofType<fromActions.Actions>(fromRequestActions.ActionTypes.GET_CUSTOMERS_REQUEST),
  switchMap(() =>
    from(customersService.getCustomers()).pipe(
      map((ajaxResponse: AjaxResponse) => fromRequestActions.actions.success(ajaxResponse.response)),
      catchError(pipe(fromRequestActions.actions.failure, of)),
    )
  )
);

export const getCustomersRequestSuccessEpic: Epic = (action$: Observable<Action>) => action$.pipe(
  ofType<fromActions.Actions>(fromRequestActions.ActionTypes.GET_CUSTOMERS_REQUEST_SUCCESS),
  map(({payload}) => fromActions.actions.getCustomersSuccess(payload)),
);