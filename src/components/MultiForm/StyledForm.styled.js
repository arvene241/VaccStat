import styled from 'styled-components';

export const StyledForm = styled.section`
    .app__form {
        flex-direction: column;
        padding-top: 40px;

        form {  
            
            .johnson {
                width: 20px;
                height: 20px;
            }

            p {
                padding-bottom: 20px;
                font-weight: 600;
            }

            label {
                font-weight: 600;
                font-size: 17px;
            }

            input, select, .select {
                font-family: var(--font-base);
                font-size: 17px;
                border: 1.77188px solid rgba(228, 228, 228, 0.6);
                border-radius: 6px;
                height: 40px;
                margin-top: 10px;
            }

            .error {
                border: 1.77188px solid red !important;
            }

            select, .select {
                padding-left: 10px;
            }

            .place {
                width: 100%;
                padding-left: 10px;
            }

            input { 
                width: 100%;
                padding: 15px;
            }

            #gender {
                width: 200px;
            }

            div {
                margin: 20px 0;
            }

            .verify {
                margin: 40px 0 50px;
            }

            .next, .prev {
                margin-top: 70px;
                display: flex;
            }

            .next {
                justify-content: flex-end;
            }

            .prev {
                width: 100%;
                justify-content: flex-start;
            }
        }
    }
`