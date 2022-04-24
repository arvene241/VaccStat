import React from 'react';
import { Button } from '../../components/index';
import { ButtonStyles } from './ButtonStyles';
import styled from 'styled-components';
import { db } from '../../firebase';

export default function VaccineDetails({ values, handle, isJohnsonJohnson }) {

  const {firstName, middleName, lastName, gender, birthday} = values.multiFormValues;
  const {firstVaccBrand, firstPlace, firstDate, secondVaccBrand, secondPlace, secondDate}  = values.vaccineFormValues;
  const {vaccBrand, place, date} = values.jjFormValues;

  const fullName = firstName + " " + middleName + " " +  lastName;

  const verify = () => {
    var docRef = db.collection("users").doc(fullName.toLowerCase());
    console.log(fullName)

    docRef.get().then((doc) => {
        if (doc.exists) {
          if(isJohnsonJohnson) {
            if (doc.data().gender === gender && doc.data().birthday === birthday &&
            doc.data().place === place && doc.data().vaccBrand === vaccBrand && doc.data().date === date) {
              console.log("Document data:", doc.data());
              console.log("Document data1:", doc.data().fname);
              handle.handleNext();
            } else {
              handle.handleNoRecord();
              console.log('somethings wrong, we couldn\'t find you in our database');
            }
          } else {
            if (doc.data().firstDate === firstDate && doc.data().firstVaccBrand === firstVaccBrand && 
            doc.data().firstPlace === firstPlace && doc.data().secondDate === secondDate && 
            doc.data().secondVaccBrand === secondVaccBrand && doc.data().secondPlace === secondPlace) {
              console.log("Document data:", doc.data());
              console.log("Document data1:", doc.data().fname);
              handle.handleNext();
            } else {
              handle.handleNoRecord();
              console.log('somethings wrong, we couldn\'t find you in our databse');
            }
          }
        } else {
          // doc.data() will be undefined in this case
          handle.handleNoRecord();
          console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
  }

  const StyledVaccineDetails = styled.section`
    margin: 80px 0 80px;

    .app__verify-details {
      p {
        font-weight: 600;
      }

      h2 {
        padding: 20px 0;
      }
    }

    .app__verify {
      flex-direction: column;
      padding-top: 40px;
    }

    .app-vaccine, .app-vaccineJJ {
      justify-content: space-between;
    }

    .app-identity {
      width: 80%;
      justify-content: space-between;
    }

    .prev-proceed {
      margin-top: 100px;
      width: 100%;
      justify-content: space-between;
    }
  `

  return (
    <StyledVaccineDetails>
      <div className="app__verify app__flex app-container">
        <h1 className="app-h1">Vaccine Certificate</h1>
        <p className="p-gray">Your COVID-19 Digital Vaccination Certificate</p>
        <div className="app__verify-details app__border">
          <p>Please check and review the details that you entered below and click the Proceed button if you wish to continue.</p>
          
          <h2>Personal Information</h2>
          <div className="app-identity app__flex">
            <div className="fname">
              <p className="p-gray">First Name</p>
              <p>{firstName}</p>
            </div>
            <div className="mname">
              <p className="p-gray">Middle Name</p>
              <p>{middleName}</p>
            </div>
            <div className="lname">
              <p className="p-gray">Last Name</p>
              <p>{lastName}</p>
            </div>
          </div>
          <div className="app-gender">
            <p className="p-gray">Gender</p>
            <p>{gender}</p>
          </div>
          <div className="app-birthday">
            <p className="p-gray">Birthday</p>
            <p>{birthday}</p>
          </div>

          <h2>Vaccine Details</h2>  
          {isJohnsonJohnson
            ?
            <div className="app-vaccineJJ app__flex">                            
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
            <div className="app-vaccine app__flex">
              <div className="left">                            
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
              </div>
            
              <div className="right">
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
            </div> 
          }
              
          <div className="prev-proceed app__flex">
            <Button button={ButtonStyles[1]} click={handle.handleBack}></Button>
            <Button button={ButtonStyles[3]} click={verify}></Button>
          </div>
        </div>
      </div>
    </StyledVaccineDetails>
  )
}
