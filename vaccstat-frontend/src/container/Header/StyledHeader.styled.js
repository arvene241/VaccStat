import styled from 'styled-components';

export const StyledHeader = styled.section`
    margin: 80px 0 80px;

    .app__header {
        justify-content: space-between !important;
        padding: 44px 0 60px;

        &-hero {
            width: 600px;
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
                font-weight: 300;
                color: var(--gray-color);
                padding-bottom: 35px;
            }
        }

        img { 
            width: 645px;
            height: 645px;
        }
    }
`