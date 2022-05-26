import React, { useState } from 'react'
import { StyledAccordion } from './StyledAccordion.styled';

export default function Accordion({ title, content }) {
    const [isActive, setIsActive] = useState(false);
    
    return (
        <StyledAccordion>
            <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
                <div className="accordion-icon">{isActive ? '-' : '+'}</div>
                <p>{title}</p>
            </div>
            {isActive && <p className="accordion-content">{content}</p>}
        </StyledAccordion>
    )
}
