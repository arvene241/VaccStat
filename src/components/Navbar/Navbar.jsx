import React from 'react';
import { Nav } from './Nav.styled';
import logo from '../../assets/logo - ver3.svg';
import { NavLinks } from '../index';
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  let navigate = useNavigate();

  function handleClick() {
      navigate('/');
  }

  return (
    <Nav className="app__flex">
      <div className="app__navbar app-container app__flex">
        <img className="app__navbar-logo" src={logo} alt="logo" onClick={handleClick}/>
        <div className="app__navbar-links">
          <NavLinks/>
        </div>
      </div>
    </Nav>
  )
}
