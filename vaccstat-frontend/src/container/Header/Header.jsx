import React from 'react';
import { StyledHeader } from './StyledHeader.styled';
import header from '../../assets/header.png';
import { Button } from '../../components/index';

const buttonStyles = [
  {
      title: "learn more",
      width: "300px",
      height: "60px",
      link: "#learn-more",
      background: "var(--button-color)",
      size: "25px",
  },
]

export default function Header() {
  return (
    <StyledHeader id="Home">
        <div className="app__header app-container app__flex">
          <div className="app__header-hero">
            <p className="p-blue">get vaccine, boost your health</p>
            <h1>with vaccination we can end this pandemic</h1>
            <p className="p-gray">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatem, minus necessitatibus magni expedita voluptas dolore nisi? Quo, ipsum tempora.</p>
            <Button button={buttonStyles[0]}/>
          </div>
          <img src={header} alt="" />
        </div>
    </StyledHeader>
  )
}
