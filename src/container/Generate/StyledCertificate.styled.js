import styled from 'styled-components';

export const StyledCertificate = styled.section`
    padding: 120px 0 80px;

    .app__certificate {
        flex-direction: column;

        .logo {
            width: 12.5rem;
            height: 1.875rem;
            transform: scale(1.25);
            margin: 0 40px;
        }

        h1, p {
            text-align: center;
        }

        .w-70 {
            width: 43.75rem;
            padding-bottom: 40px;
        }

        &-cards {
            gap: 30px;
            flex-wrap: wrap;
            margin-bottom: 60px;
        }
    }

`