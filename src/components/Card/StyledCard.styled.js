import styled from 'styled-components';

export const StyledCard = styled.div`
    width: 21.875rem;
    height: 25rem;
    border-radius: 4px;
    background-color: var(--card-color);
    flex-direction: column;
    padding: 10px 30px;

    img {
        width: 7.5rem;
        height: 7.5rem;
        margin-bottom: 10px;
    }

    .p-blue {
        text-transform: capitalize;
        font-weight: 700;
        color: var(--card-text-color);
        margin-bottom: 20px;
    }
`