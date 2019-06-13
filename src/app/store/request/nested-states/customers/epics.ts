import {
  getCustomersRequestEpic,
  getCustomersRequestSuccessEpic
} from './nested-states/customers-get/epics';

export const customersEpics = [
  getCustomersRequestEpic,
  getCustomersRequestSuccessEpic,
];