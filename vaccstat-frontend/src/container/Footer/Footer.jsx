import React from 'react';
import { StyledFooter } from './StyledFooter.styled';
import logo from '../../assets/logo-transparent.png';
import arrow from '../../assets/Up arrow.png';
import { NavLinks } from '../../components/index';

export default function Footer() {
    return (
        <StyledFooter>
            <div className="app__footer app-container app__flex">
                <img className="logo" src={logo} alt="" />
                <div className="app__footer-info app__flex">
                    <p className="app__footer-info-address">123 Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    <div>
                        <p className="app__footer-info-contact">(+639) 123456789</p>
                        <p className="app__footer-info-email">vaccstat_bus@gmail.com</p>
                    </div>
                </div>
                <div className="app__footer-nav app__flex">
                    <NavLinks />
                    <p>© 2022 VaccStat. All rights reserved.</p>
                </div>
                <a href="#"><img className="arrow" src={arrow} alt="" /></a>
            </div>
        </StyledFooter>
    )
}
