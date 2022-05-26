import styled from 'styled-components';

export const StyledFAQ = styled.section`
    .app__faq {
        padding-top: 40px;

        .border {
            border-bottom: 1px solid var(--black-color);
            width: 100%;
            padding-top: 2px;
        }

        &-accordion-menu {
            padding-top: 20px;
        }

        &-privacy {
            .border {
                margin-bottom: 20px;
            }

            &-section {
                margin: 20px 0;

                &-title {
                    padding: 10px 0;
                    font-weight: 600;
                }
            }
        }
        
    }
`