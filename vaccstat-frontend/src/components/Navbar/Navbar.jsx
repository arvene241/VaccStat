import React from 'react';
import { Nav } from './Nav.styled';
import logo from '../../assets/logo - ver3.svg';
import Button from '../Button/Button';

const buttonStyles = [
  {
      title: "login",
      width: "120px",
      height: "40px",
      link: "#login",
      background: "var(--button-color)",
      size: "15px",
  },
]

export default function Navbar() {
  return (
    <Nav className="app__flex">
      <div className="app__navbar app-container app__flex">
        <a href="#home"><img className="app__navbar-logo" src={logo} alt="logo" /></a>
        <ul className="app__navbar-links app__flex">
            {['Home', 'Statistics', 'Certificate', 'FAQ'].map((item) => (
              <li className="app__flex p-text" key={`link-${item}`}>
                <a className="link" href={`#${item}`}>
                  {item}
                </a>
              </li>
            ))}
            <li><Button button={buttonStyles[0]}/></li>
        </ul>
      </div>
    </Nav>
  )
}
