import { combineEpics } from 'redux-observable';

import { customersEpics } from './customers/epics';
import { requestEpics } from './request';

const rootEpic = combineEpics(
  ...Object.values(customersEpics),
  ...Object.values(requestEpics)
);

export default rootEpic;