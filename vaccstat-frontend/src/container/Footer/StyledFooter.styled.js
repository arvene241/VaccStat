import styled from 'styled-components';

export const StyledFooter = styled.footer`
    background-color: var(--footer-color);
    padding: 100px 0;

    .app__footer {
        align-items: flex-start;
        justify-content: space-between;
        height: 270px;

        p, li {
            color: var(--primary-color);
            font-size: 14px;
        }

        .logo {
            justify-self: flex-start;
            width: 250px;
            height: 80px;
        }

        &-info {
            height: 100%;
            width: 300px;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-between;

            &-address {
                line-height: 38px;
                font-weight: 400;
                font-size: 20px !important;
            }

            &-contact {
                padding-bottom: 10px;
            }
        }

        &-nav {
            height: 100%;
            width: 285px;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-between;

            ul {
                align-items: flex-start;
                flex-direction: column;

                li {
                    padding-bottom: 20px;
                }
            
                a {
                    font-weight: 400;
                }
            }
        }

        .arrow {
            width: 50px;
            height: 50px;
            cursor: pointer;
        }
    }
`