import React from 'react';
import { StyledHeader } from './StyledHeader.styled';
import header from '../../assets/header.png';
import { Button } from '../../components/index';

const buttonStyles = [
  {
      title: "learn more",
      width: "18.75rem",
      height: "3.75rem",
      link: "#certificate",
      background: "var(--button-color)",
      size: "25px",
  },
]

export default function Header() {
  return (
    <StyledHeader id="home">
        <div className="app__header app-container app__flex">
          <div className="app__header-hero">
            <p className="p-blue">get vaccine, boost your health</p>
            <h1>with vaccination we can end this pandemic</h1>
            <p className="p-gray">Let's stop this pandemic by killing the virus with a vaccine, don't let yourself or your family get infected.
                                 Getting a COVID-19 vaccine will help keep you from getting COVID-19.</p>
            <Button button={buttonStyles[0]} link={buttonStyles[0].link}/>
          </div>
          <img src={header} alt="" />
        </div>
    </StyledHeader>
  )
}
