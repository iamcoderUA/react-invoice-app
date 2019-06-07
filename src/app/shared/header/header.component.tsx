import React from 'react';
import { NavLink } from 'react-router-dom';

import './header.scss'

export interface NavMenuItem {
  title: string,
  link: string,
}

type Props = {navMenuList: NavMenuItem[]}

const Header: React.FC<Props> = ({navMenuList}) => {
  const navMenuListItems = navMenuList.map((item: NavMenuItem) =>
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