import styled from 'styled-components';

export const StyledAccordion = styled.div`
    margin: 20px 0;

    .accordion-title {
        display: flex;
        cursor: pointer;

        p {
            font-weight: 500;
        }

        .accordion-icon {
            padding-right: 20px;
        }
    }

    .accordion-content {
        padding: 10px 0 0 30px;
    }
`