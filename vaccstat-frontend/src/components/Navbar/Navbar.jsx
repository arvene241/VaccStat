import React from 'react';
import { Nav } from './Nav.styled';
import logo from '../../assets/logo - ver3.svg';
import { NavLinks } from '../index';

export default function Navbar() {
  return (
    <Nav className="app__flex">
      <div className="app__navbar app-container app__flex">
        <a href="#"><img className="app__navbar-logo" src={logo} alt="logo" /></a>
        <div className="app__navbar-links">
          <NavLinks/>
        </div>
      </div>
    </Nav>
  )
}
