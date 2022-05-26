import React from 'react';
import { StyledCertificate } from './StyledCertificate.styled';
import { Card, Button } from '../../components/index';
import logo from '../../assets/VaccStat.png';
import card1 from '../../assets/card1.png';
import card2 from '../../assets/card2.png';
import card3 from '../../assets/card3.png';

const cardData = [
    {
        title: "Digital Certificate",
        text: "This digital vaccination certificate can be printed or saved on the computer or phone.",
        img: `${card1}`,
    },
    {
        title: "Hassle-free Access",
        text: "It is free and self-service that can be accessed through the VaccStat portal.",
        img: `${card2}`,
    },
    {
        title: "Voluntary ",
        text: "You can participate of your own free will and choose to create your digital vaccination certificate voluntarily.",
        img: `${card3}`,
    },
]

const buttonStyles = [
    {
        title: "generate",
        width: "18.75rem",
        height: "3.75rem",
        link: "#generate",
        background: "var(--button-color)",
        size: "25px",
    },
]

export default function Certificate() {
    return (
        <StyledCertificate id="certificate">
            <div className="app__certificate app-container app__flex">
                <h1 className="app-h1 app__flex">Generate a <img className="logo" src={logo} alt="" /> Now!</h1>
                <p className="w-70">If you have been fully vaccinated against coronavirus, you can convert your proof of vaccination into a COVID Certificate using VaccStat. 
                                    You can use this certificate to show your proof of vaccination when heading to certain establishments, tourist destinations, and other formal purposes.</p>
                <div className="app__certificate-cards app__flex">
                    <Card data={cardData[0]}/>
                    <Card data={cardData[1]}/>
                    <Card data={cardData[2]}/>
                </div>
                <Button button={buttonStyles[0]} />
            </div>
        </StyledCertificate>
    )
}
