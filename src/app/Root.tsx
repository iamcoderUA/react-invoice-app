import React from 'react';

import { Provider } from 'react-redux';

import CssBaseLine from '@material-ui/core/CssBaseline';

import App from './components/app.component';
import store from './store/store';

const Root: React.FC = () => {
  return (
    <React.Fragment>
      <CssBaseLine/>
      <Provider store={store}>
        <App/>
      </Provider>
    </React.Fragment>
  );
};

export default Root;
