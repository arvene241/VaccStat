import React from 'react';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import { navbarData } from './navbarData';

const buttonStyles = [
  {
    title: "login",
    width: "7.5rem",
    height: "2.5rem",
    link: "#login",
    background: "var(--button-color)",
    size: "15px",
  },
]

export default function NavLinks(props) {
  return (
    <ul className="app__flex">
        {navbarData.map((item, index) => (
          <li className="app__flex p-text" key={`link-${index}`}>
            <Link className="link" to={`${item.path}`}>{item.title}</Link>
          </li>
        ))}
        {props.button ? <li style={{cursor: "pointer"}}>Login</li> : <li><Button button={buttonStyles[0]}/></li>}
    </ul>
  )
}
