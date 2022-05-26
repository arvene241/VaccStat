import React from 'react';
import { StyledForm } from './StyledForm.styled';
import { Button } from '../../components/index';
import { ButtonStyles } from './ButtonStyles';

export default function PersonalInformation({ values, handleChange, handle }) {

  const submitFormData = (e) => {
    e.preventDefault();
    
    handle.handleNext();
  };

  return (
    <StyledForm>
      <div className="app__form app__flex app-container">
        <h1 className="app-h1">Vaccine Certificate</h1>
        <p className="p-gray">Your COVID-19 Digital Vaccination Certificate</p>
        <form onSubmit={submitFormData} className="app__border">
          <p>Please enter your information below. Ensure that they match the details on your vaccination card.</p>
          <h2>Personal Information</h2>
          <div>
            <label>Last Name</label><br/>
            <input 
              type="text" 
              defaultValue={values.lastName} 
              onChange={handleChange("lastName")}
              required
              placeholder="Last Name"
            />
          </div>
          <div>
            <label>First Name</label><br/>
            <input 
              type="text" 
              defaultValue={values.firstName} 
              onChange={handleChange("firstName")}
              required
              placeholder="First Name"
            />
          </div>
          <div>
            <label>Middle Name</label><br/>
            <input
              type="text" 
              defaultValue={values.middleName} 
              onChange={handleChange("middleName")}
              required
              placeholder="Middle Name"
            />
          </div>
          <div>
            <label>Gender</label><br/>
            <select 
              id="gender" 
              defaultValue={values.gender} 
              onChange={handleChange("gender")}
              required
            >
              <option></option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div>
            <label>Birthday</label><br/>
            <input
              type="date" 
              defaultValue={values.birthday} 
              onChange={handleChange("birthday")}
              required 
            />
          </div>
          <div className="next">
            <Button button={ButtonStyles[2]} />
          </div>
        </form>
      </div>
    </StyledForm>
  )
}
