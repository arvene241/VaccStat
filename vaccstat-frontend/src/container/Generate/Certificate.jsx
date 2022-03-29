import React from 'react';
import { StyledCertificate } from './StyledCertificate.styled';
import { Card, Button } from '../../components/index';
import logo from '../../assets/VaccStat.png';
import card1 from '../../assets/card1.png';
import card2 from '../../assets/card2.png';
import card3 from '../../assets/card3.png';

const cardData = [
    {
        title: "lorem ipsum1",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, corporis?",
        img: `${card1}`,
    },
    {
        title: "lorem ipsum2",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, corporis?",
        img: `${card2}`,
    },
    {
        title: "lorem ipsum3",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, corporis?",
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
                <p className="w-70">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio asperiores architecto reiciendis eius debitis dolorum, magni voluptas cum id quisquam?</p>
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
