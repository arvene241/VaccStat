import styled from 'styled-components';


export const StyledDownloadCertificate = styled.section`
    margin: 80px 0 80px;

    .app__download {
      flex-direction: column;
      padding-top: 40px;
    }

    .p-text {
      margin: 20px 0;
      text-align: center;
    }

    .w-50 {
      width: 50%;
    }

    .m-10 {
      margin: 10px 0;
    }

    .logo {
      width: 400px;
    }

    .flex-col {
      flex-direction: column;
      margin-bottom: 30px;
    }

    .prev-proceed {
      width: 100%;
    }

    .app__download-cert, .vaccine-details {
      width: 80%;
      margin: 0 0 30px;
      justify-content: space-between;
    }

    .doh-logo {
      img {
        width: 200px;
        height: 200px;
      }
    }

    .cert-id {
      background: var(--button-color);
      text-align: center;
      border-radius: 5px;
      color: var(--primary-color);
      font-size: 14px;
      padding: 3px;
    }

    th, td {
      text-align: center;
      padding: 20px 0;
    }

    .noOfDose {
      font-size: 20px;
      font-weight: 500;
    }

    tr {
      position: relative;
    }

    .breaker {
      position: absolute;
      width: 100%;
      border-bottom: 1px solid var(--black-color);
    }

    .app__disclaimer {
      width: 80%;

      p {
        margin: 20px 0 100px;
        text-align: justify;
        text-indent: 50px;
      }
    }

    .fname-capitalize {
      text-transform: capitalize;
    }

`