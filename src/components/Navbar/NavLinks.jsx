import React from 'react';
import { Link } from 'react-router-dom';
import { navbarData } from './navbarData';

export default function NavLinks(props) {
  return (
    <ul className="app__flex">
        {navbarData.map((item, index) => (
          <li className="app__flex p-text" key={`link-${index}`}>
            <Link className="link" to={`${item.path}`}>{item.title}</Link>
          </li>
        ))}
    </ul>
  )
}
