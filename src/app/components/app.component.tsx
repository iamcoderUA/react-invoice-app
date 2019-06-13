import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import Header from '../shared/header/header.component';

import Customers from './customers/customers.component';
import Products from './products/products.component';
import Invoices from './invoices/invoices.component';
import NotFound from './not-found/not-found.component';

const App: React.FC = () => {
  const navMenuList: {title: string, link: string}[] = [
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
        <main className='main'>
          <Switch>
            <Redirect exact from='/' to='/invoices'/>
            <Route path="/customers" component={Customers}/>
            <Route path="/products" component={Products}/>
            <Route path="/invoices" component={Invoices}/>
            <Route component={NotFound}/>
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;