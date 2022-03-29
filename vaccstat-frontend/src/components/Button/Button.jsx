import React from 'react';
import styled from 'styled-components';

export default function Button(props) {
    const StyledButton = styled.button`  
        cursor: pointer;
        padding: 3px;
        border-radius: 4px;
        border: none;
    
        background-color: ${props.button.background};
        width: ${props.button.width};
        height: ${props.button.height}; 
        font-family: var(--font-base);
        text-transform: capitalize;
        color: var(--primary-color);
        font-weight: 500;
        size: ${props.button.size};
    `

    return (
        <StyledButton onClick={props.click} >
            {props.button.title}
        </StyledButton>
    )
}
