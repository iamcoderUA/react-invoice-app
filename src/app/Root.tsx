import React from 'react';

import CssBaseLine from '@material-ui/core/CssBaseline';
import App from './app-component/app.component';

const Root: React.FC = () => {
  return (
    <React.Fragment>
      <CssBaseLine/>
      <App/>
    </React.Fragment>
  );
};

export default Root;
