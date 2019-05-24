import React from 'react';
import { NavLink } from 'react-router-dom';

import { NavMenuList } from '../core/interfaces/nav-menu-list';

const Header: React.FC<NavMenuList> = ({navMenuList}) => {
  const navMenuListItems = navMenuList.map(item =>
    <li key={item.title}>
      <NavLink
        to={item.link}
        className='nav-list__link'
        activeClassName='nav-list__link_active'
      >
        {item.title}
      </NavLink>
    </li>
  );
  
  return (
    <header className='header'>
      <nav className='nav'>
        <ul className='nav-list'>
          {navMenuListItems}
        </ul>
      </nav>
    </header>
  );
};

export default Header;