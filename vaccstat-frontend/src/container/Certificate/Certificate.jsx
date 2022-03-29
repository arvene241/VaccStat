import React, { useState } from 'react';
import { PersonalInformation, VaccineDetails, VaccineVerify } from '../../components/index';

export default function Certificate() {
    const [activeStep, setActiveStep] = useState(0);

    //state variables 
    const [multiFormValues, setMultiFormValues] = useState({
        lastName: "",
        firstName: "",
        middleName: "",
        gender: "Male",
        birthday: "",
        firstVaccBrand: "Pfizer",
        firstPlace: "",
        firstDate: "",
        secondVaccBrand: "Pfizer",
        secondPlace: "",
        secondDate: "",
    });

    //Navigates to the next page
    const handleNext = () => {
        setActiveStep((nextStep) => nextStep + 1);
    }
    //Navigates to the Previous page
    const handleBack = () => {
        setActiveStep((previousStep) => previousStep - 1);
    }

    //Handle form value state on change
    const handleChange = (input) => (e) => {
        setMultiFormValues({...multiFormValues, [input]: e.target.value});
    }

    return (
        <div>
            {activeStep === 0 && (
                <PersonalInformation 
                    values={multiFormValues} 
                    handleChange={handleChange} 
                    handle={{handleNext, handleBack}}
                />
            )}
            {activeStep === 1 && (
                <VaccineDetails 
                    values={multiFormValues} 
                    handleChange={handleChange}         
                    handle={{handleNext, handleBack}} 
                />
            )}
            {activeStep === 2 && (
                <VaccineVerify 
                    values={multiFormValues}      
                    handle={{handleNext, handleBack}}  
                />
            )}                        
        </div>
    )
}