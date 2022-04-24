import React from 'react';
import { StyledForm } from './StyledForm.styled';
import { Button } from '../../components/index';
import { ButtonStyles } from './ButtonStyles';
import { cities } from './CityMunicipality';

const vaccines = [
  {},
  { label: 'Pfizer', value: 'Pfizer' },
  { label: 'AstraZeneca', value: 'AstraZeneca' },
  { label: 'Moderna', value: 'Moderna' },
  { label: 'Sinovac', value: 'Sinovac' },
  { label: 'Johnson & Johnson', value: 'Johnson & Johnson' },
  { label: 'Gamelya', value: 'Gamelya' },
  { label: 'Sinpharm', value: 'Sinopharm' },
];

export default function VaccineDetails({ values, handleChange, handleJj, isJohnsonJohnson, handle }) {
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
          <p>Please enter your vaccination details below. Please leave the filed for other dose/s blank if you are only partially vaccinated.</p>
          <h2>Vaccination Details</h2>
          <div>
            <label>Please tick if your brand is Johnson & Johnson</label><br/>
            <input 
              className="johnson"
              type="checkbox" 
              defaultValue={isJohnsonJohnson}
              onChange={handleJj(this)} />
          </div>
          {isJohnsonJohnson 
            ?
            <>
              <div>
                <label>Place of Dose Vaccination</label><br/>
                <select 
                  className="place"
                  id="place" 
                  defaultValue={values.jjFormValues.place} 
                  onChange={handleChange("place")}
                  required
                >
                  {cities.map((city) => <option value={city}>{city}</option>)}
                </select>
              </div>
              
              <div>
                <label>Date of Vaccination</label><br/>
                <input 
                  type="date"
                  defaultValue={values.jjFormValues.date} 
                  onChange={handleChange("date")}
                  required
                />
              </div>
            </>
            
            :  
            <>
              <div>
                <label>Vaccination Manufacturer</label><br/>
                <select 
                  id="firstVaccBrand" 
                  defaultValue={values.vaccineFormValues.firstVaccBrand} 
                  onChange={handleChange("firstVaccBrand")}
                  required
                >
                  {vaccines.map((vaccine) => <option value={vaccine.value}>{vaccine.label}</option>)}
                </select>
              </div>

              <div>
                <label>Place of 1st Dose Vaccination</label><br/>
                <select 
                  className="place"
                  id="firstPlace" 
                  defaultValue={values.vaccineFormValues.firstPlace} 
                  onChange={handleChange("firstPlace")}
                  required
                >
                  {cities.map((city) => <option value={city}>{city}</option>)}
                </select>
              </div>

              <div>
                <label>Date of 1st Vaccination</label><br/>
                <input 
                  type="date"
                  defaultValue={values.vaccineFormValues.firstDate} 
                  onChange={handleChange("firstDate")}
                  required
                />
              </div>
              
              <div>
                <label>Vaccination Manufacturer</label><br/>
                <select 
                  id="secondVaccBrand" 
                  defaultValue={values.vaccineFormValues.secondVaccBrand} 
                  onChange={handleChange("secondVaccBrand")}
                  required
                >
                  {vaccines.map((vaccine) => <option value={vaccine.value}>{vaccine.label}</option>)}
                </select>
              </div>

              <div>
                <label>Place of 2nd Dose Vaccination</label><br/>
                <select 
                  className="place"
                  id="secondPlace" 
                  defaultValue={values.vaccineFormValues.secondPlace} 
                  onChange={handleChange("secondPlace")}
                  required
                >
                  {cities.map((city) => <option value={city}>{city}</option>)}
                </select>
              </div>

              <div>
                <label>Date of 2nd Vaccination</label><br/>
                <input 
                  type="date"
                  defaultValue={values.vaccineFormValues.secondDate} 
                  onChange={handleChange("secondDate")}
                  required
                />
              </div>
            </>
          }
            
          {console.log(values)}
          <div className="verify">
            <Button button={ButtonStyles[0]}></Button>
          </div>
          <div className="prev-next">
            <Button button={ButtonStyles[1]} click={handle.handleBack}></Button>
          </div>
            
        </form>
      </div>
    </StyledForm>
  )
}
