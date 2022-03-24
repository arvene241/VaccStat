import React from 'react';
import { StyledCard } from './StyledCard.styled';

export default function Card(props) {
    return (
        <StyledCard className="app__flex">
            <img src={props.data.img} alt="" />
            <p className="p-blue">{props.data.title}</p>
            <p className="p-gray">{props.data.text}</p>
        </StyledCard>
    )
}
