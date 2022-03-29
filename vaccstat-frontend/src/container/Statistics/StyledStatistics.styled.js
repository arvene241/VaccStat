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
            
            img {
                width: 46.25rem;
                height: 31.25rem;
            }

            &-doses {
                display: flex;
                flex-wrap: wrap;
                gap: 20px;
                
                .stats {
                    border-radius: 4px;
                    background-color: var(--primary-color);
                    width: 15rem;
                    height: 14.375rem;
                    padding: 25px;
                }
            }
        }

        a {
            font-size: 20px;
            text-decoration-line: underline;
            line-height: 38px;
        }
    }
`