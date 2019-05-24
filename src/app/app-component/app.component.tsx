import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from '../shared/header.component';

import { NavMenuItem } from '../core/interfaces/nav-menu-item';

const App: React.FC = () => {
  const navMenuList: NavMenuItem[] = [
    {
      title: 'Customers',
      link: '/customers',
    },
    {
      title: 'Products',
      link: '/products',
    },
    {
      title: 'Invoices',
      link: '/invoices',
    },
  ];
  return (
    <Router>
      <div className="wrapper">
        <Header navMenuList={navMenuList}/>
      </div>
    </Router>
  );
};

export default App;