import React from 'react';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';

function NavigationMenu(props) {
  return (
    <>
      <div className="font-bold py-3">AppName</div>
      <ul>
        <li>
          <Link
            to="/"
            className="text-blue-500 py-3 border-b border-t block"
            onClick={props.closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="text-blue-500 py-3 border-b block"
            onClick={props.closeMenu}>
            About
          </Link>
        </li>
      </ul>
    </>
  );
}

export default NavigationMenu;
