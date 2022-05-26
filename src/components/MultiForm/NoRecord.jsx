import React from 'react';
import styled from 'styled-components';
import { ButtonStyles } from './ButtonStyles';
import { Button } from '../../components/index';
import notfound from '../../assets/not found.png';

const StyledSection = styled.section`
    margin: 120px 0 80px;
    
    .app__norecord {
        flex-direction: column;
    }

    img {
        margin: 10px 0 40px;
        width: 250px;
        height: 250px;
    }

    h2 {
        margin-bottom: 20px;
    }

    p {
        text-align: center;
        width: 800px;
    }

    button {
        margin-top: 40px;
    }
`

export default function NoRecord({ values, handle }) {
    return (
      <StyledSection>
          <div className="app__norecord app-container app__flex">
              <h1 className="app-h1">Vaccine Certificate</h1>
              <p className="p-gray">Your COVID-19 Digital Vaccination Certificate</p>
              <img src={notfound} alt="" />
              <h1 className="app-h1">Oops!</h1>
              <h2>No Vaccination Record Found...</h2>
              <p>The entered details do not match any record in our database or the LGU where you were vaccinated has not yet uploaded your record.</p>
              <p>Please check if you have entered the correct details in your vaccination card.</p>
              <Button button={ButtonStyles[4]} click={handle.handleStart}></Button>
          </div>
      </StyledSection>
    )
}
