import styled from 'styled-components';

export const StyledHeader = styled.section`
    .app__header {
        justify-content: space-between !important;
        padding: 44px 0 60px;

        &-hero {
            width: 37.5rem;
            padding-top: calc(147px - 44px);
            
            .p-blue {
                font-weight: 600;
                color: var(--light-blue-color);
                padding-bottom: 16px;
                text-transform: capitalize;
            }

            h1 {
                font-size: 60px;
                line-height: 90px;
                font-weight: 700;
                color: var(--black-color);
                padding-bottom: 30px;
                text-transform: capitalize;
            }

            .p-gray {
                padding-bottom: 35px;
            }
        }

        img { 
            width: 40.313rem;
            height: 40.313rem;
        }

        .link-button {
            width: 18.75rem;
            height: 3.75rem;
            background: var(--button-color);
            size: 25px;
            text-transform: capitalize;
        }
    }
`