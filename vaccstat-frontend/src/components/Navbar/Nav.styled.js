import styled from 'styled-components';

export const Nav = styled.nav`
    position: fixed;
    height: 80px;
    width: 100vw;
    top: 0;
    left: 0;
    background-color: var(--primary-color);
    z-index: 100;

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