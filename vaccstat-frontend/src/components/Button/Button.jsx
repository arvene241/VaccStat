import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`  
    cursor: pointer;
    padding: 3px;
    border-radius: 4px;
    border: none;

    background-color: ${props => props.bg};
    width: ${props => props.w};
    height: ${props =>props.h}; 
    font-family: var(--font-base);
    text-transform: capitalize;
    color: var(--primary-color);
    font-weight: 500;
    size: ${props => props.size};
`

export default function Button(props) {
    return (
        <StyledButton bg={props.button.background} w={props.button.width} h={props.button.height} size={props.button.size} onClick={props.click} >
            {props.button.link 
                ? <a href={props.link}>{props.button.title}</a>
                : props.button.title
            }
        </StyledButton>
    )
}
