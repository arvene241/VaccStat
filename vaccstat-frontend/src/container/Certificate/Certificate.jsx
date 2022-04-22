import React, { useState } from 'react';
import { PersonalInformation, VaccineDetails, VaccineVerify, NoRecord, AddData } from '../../components/index';

export default function Certificate(props) {
    const [activeStep, setActiveStep] = useState(0);
    const [isJohnsonJohnson, setIsJohnsonJohnson] = useState();

    const [jjFormValues, setJjFormValues] = useState({
        vaccBrand: "Johnson & Johnson",
        place: "",
        date: "",
    })

    //state variables 
    const [multiFormValues, setMultiFormValues] = useState({
        lastName: "",
        firstName: "",
        middleName: "",
        gender: "",
        birthday: "",
        firstVaccBrand: "",
        firstPlace: "",
        firstDate: "",
        secondVaccBrand: "",
        secondPlace: "",
        secondDate: "",
    })

    //Navigates to the next page
    const handleNext = () => {
        setActiveStep((nextStep) => nextStep + 1);
    }
    //Navigates to the Previous page
    const handleBack = () => {
        setActiveStep((previousStep) => previousStep - 1);
    }

    const handleStart = () => {
        setActiveStep(0);
    }

    const handleJj = (input) => (e) => {
        setIsJohnsonJohnson(e.target.checked);
    }

    //Handle form value state on change
    const handleChange = (input) => (e) => {
        setMultiFormValues({...multiFormValues, [input]: e.target.value});
        setJjFormValues({...jjFormValues, [input]: e.target.value});
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
                    handleJj={handleJj}
                    handleChange={handleChange}         
                    isJohnsonJohnson={isJohnsonJohnson}
                    handle={{handleNext, handleBack}} 
                />
            )}
            {console.log(props.add, activeStep)}
            {activeStep === 2 && (
                props.add
                ? <AddData
                    values={multiFormValues} 
                    jjValues={jjFormValues}
                    isJohnsonJohnson={isJohnsonJohnson}    
                    handle={{handleNext, handleBack}}  
                />
                : <VaccineVerify
                    values={multiFormValues} 
                    jjValues={jjFormValues}
                    isJohnsonJohnson={isJohnsonJohnson}    
                    handle={{handleNext, handleBack}}  
                />
            )}
            {/* {props.add && activeStep === 2 && (
                <AddData
                    values={multiFormValues} 
                    jjValues={jjFormValues}
                    isJohnsonJohnson={isJohnsonJohnson}    
                    handle={{handleNext, handleBack}}  
                />
            )}    */}
            {activeStep === 3 && (
                <NoRecord
                    values={multiFormValues}      
                    handle={{handleStart}}  
                />
            )}             
        </div>
    )
}