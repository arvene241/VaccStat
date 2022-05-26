import React from 'react';
import { Button } from '../../components/index';
import { ButtonStyles } from './ButtonStyles';
import styled from 'styled-components';

export default function RecordFound({ values, isJohnsonJohnson, handle }) {

    const {firstName, middleName, lastName, gender, birthday} = values.multiFormValues;
    const {firstVaccBrand, firstPlace, firstDate, secondVaccBrand, secondPlace, secondDate}  = values.vaccineFormValues;
    const {vaccBrand, place, date} = values.jjFormValues;

  const fullName = firstName + " " + middleName + " " +  lastName;

  const StyledVaccineDetails = styled.section`
    margin: 80px 0 80px;

    .app__record-details {
      justify-content: space-between;
      align-items: start;

      p {
        font-weight: 600;
      }

      h2 {
        padding: 20px 0;
      }
    }

    .app__record {
      flex-direction: column;
      padding-top: 40px;
    }

    .app-identitym, .app-vaccine, .app-vaccineJJ {
      display: flex;
      flex-direction: column;
    }

    .prev-proceed {
      margin-top: 100px;
      width: 100%;
      flex-direction: column;

      p {
          font-size: 12px;
          margin: 15px 10px;
      }
    }
  `

  return (
    <StyledVaccineDetails>
      <div className="app__record app__flex app-container">
        <h1 className="app-h1">Vaccine Certificate</h1>
        <p className="p-gray">Your COVID-19 Digital Vaccination Certificate</p>
        <div className="app__border">
          <p>Vaccination Record Found. If the details below are correct, click Generate button. If you want to update your details, click Update button.</p>
          
          <div className="app__record-details app__flex">
            <div className="app-identity">
              <h2>Vaccinee Details</h2>

              <div className="full-name">
                <p className="p-gray">Vaccinee Name</p>
                <p>{fullName}</p>
              </div>
              
              <div className="app-gender">
                <p className="p-gray">Gender</p>
                <p>{gender}</p>
              </div>
              <div className="app-birthday">
                <p className="p-gray">Birthday</p>
                <p>{birthday}</p>
              </div>
            </div>
            
            <div className="app-vaccine">
              <h2>Vaccination Details</h2>  
              {isJohnsonJohnson
                ?
                <div className="app-vaccineJJ">                            
                  <div>
                    <p className="p-gray">Vaccine Manufacturer</p>
                    <p>{vaccBrand}</p>
                  </div>
                  <div>
                    <p className="p-gray">Place of Vaccination</p>
                    <p>{place}</p>        
                  </div>
                  <div>
                    <p className="p-gray">Date of Vaccination</p>
                    <p>{date}</p>        
                  </div>
                </div>
                :
                <div className="app-vaccine">                         
                  <div>
                    <p className="p-gray">Vaccine Manufacturer</p>
                    <p>{firstVaccBrand}</p>
                  </div>
                  <div>
                    <p className="p-gray">Place of 1st Dose Vaccination</p>
                    <p>{firstPlace}</p>        
                  </div>
                  <div>
                    <p className="p-gray">Date of 1st Dose Vaccination</p>
                    <p>{firstDate}</p>        
                  </div>

                  <div>
                    <p className="p-gray">Vaccine Manufacturer</p>
                    <p>{secondVaccBrand}</p>
                  </div>
                  <div>
                    <p className="p-gray">Place of 2nd Dose Vaccination</p>
                    <p>{secondPlace}</p>        
                  </div>
                  <div>
                    <p className="p-gray">Date of 2nd Dose Vaccination</p>
                    <p>{secondDate}</p>        
                  </div>
                </div>
              }
            </div>
          </div>

          <div className="prev-proceed app__flex">
            <Button button={ButtonStyles[5]} click={handle.handleNext}></Button>
            <p className="p-gray">If there are incorrect and missing details or if you wish to update your details, click <b>Update</b> button.</p>
            <Button button={ButtonStyles[6]} ></Button>
          </div>
        </div>
      </div>
    </StyledVaccineDetails>
  )
}
