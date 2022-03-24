import React from 'react';
import { StyledButton } from './StyledButton.styled';
import styled from 'styled-components';

export default function Button(props) {

    const Button = styled(StyledButton)`  
        background-color: ${props.button.background};
        width: ${props.button.width};
        height: ${props.button.height};

        a {
            font-family: var(--font-base);
            text-transform: capitalize;
            color: var(--primary-color);
            font-weight: 500;
            size: ${props.button.size};
        }
    `

    return (
        <Button>
            <a href={props.button.link}>{props.button.title}</a>
        </Button>
    )
}
