import styled from 'styled-components';

export const Nav = styled.nav`
    height: 80px;
    background-color: var(--primary-color);

    .app__navbar {
        width: 100%;
        justify-content: space-between !important;
        cursor: pointer;

        &-logo {
            width: 156.4px;
            height: 48.43px;
        }

        &-links {

            li {
                padding: 0 20px;
            }

            .link {
                font-family: var(--font-base);
                font-size: 18px;
                line-height: 34px;
                color: var(--neutral-black);
            }
        }
    }
`