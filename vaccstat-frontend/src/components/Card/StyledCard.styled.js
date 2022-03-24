import styled from 'styled-components';

export const StyledCard = styled.div`
    width: 350px;
    height: 400px;
    border-radius: 4px;
    background-color: var(--card-color);
    flex-direction: column;
    padding: 10px 30px;

    img {
        width: 120px;
        height: 120px;
        margin-bottom: 10px;
    }

    .p-blue {
        text-transform: capitalize;
        font-weight: 700;
        color: var(--card-text-color);
        margin-bottom: 20px;
    }
`