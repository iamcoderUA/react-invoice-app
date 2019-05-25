import React from 'react';
import { NavLink } from 'react-router-dom';

import { NavMenuList } from '../../core/interfaces/nav-menu-list';

import './header.scss'

const Header: React.FC<NavMenuList> = ({navMenuList}) => {
  const navMenuListItems = navMenuList.map(item =>
    <li className='nav-list__item' key={item.title}>
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
      <div className="header-container">
        <nav className='nav'>
          <ul className='nav-list'>
            {navMenuListItems}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;