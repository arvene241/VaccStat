import styled from 'styled-components';

export const StyledStatistics = styled.section`
    padding: 60px 0 80px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    .app__statistics {

        &-intro {
            width: 47.5rem;
            padding-bottom: 20px;
        }

        &-filter {
            justify-content: flex-start !important;
            padding-bottom: 50px;

            p {
                padding: 0 15px;
            }
        }

        &-vaccine {
            gap: 30px;
            padding-bottom: 20px;

            

            &-doses {
                display: flex;
                //flex-wrap: wrap;
                gap: 20px;

                .linechart {
                border-radius: 8px;
                background-color: white;
                width: 46.5rem;
                height: 34rem;
                padding: 25px;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
                }
                
                .stats {
                    border-radius: 8px;
                    background-color: white;
                    width: 16rem;
                    height: 16.4rem;
                    padding: 25px;
                    text-align: center;
                    //justify-content: center;
                    align-items: center;
                    vertical-align: middle;
                    //align-content: center;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
                }

                .col {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }

                .row {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    gap: 20px;
                    //padding-left: 25px;
                }

                .title {
                    font-size: 14px;
                    font-weight: 500;
                    padding-top: 40px;
                }

                .value {
                    font-size: 80px;
                    font-weight: 500;
                }
            }
        }

        .linkButton {
            border: none;
            cursor: pointer;
            background-color: transparent;
            font-size: 20px;
            text-decoration-line: underline;
            line-height: 38px;
            font-family: var(--font-base);
            font-weight: 600;
        }
    }
`