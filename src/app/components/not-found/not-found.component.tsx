import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

type Props = RouteComponentProps

const NotFound: React.FC<Props> = (props) => {
  const {location} = props;
  
  return (
    <div>
      <h3>404 - Not found!</h3>
      <p>No match for <code>{location.pathname}</code></p>
    </div>
  );
};

export default NotFound;
