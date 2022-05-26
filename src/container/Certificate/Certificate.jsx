import React, { useState } from 'react';
import { PersonalInformation, VaccineDetails, VaccineVerify, NoRecord, RecordFound, AddData, DownloadCertificate } from '../../components/index';

export default function Certificate(props) {
    const [activeStep, setActiveStep] = useState(0);
    const [isJohnsonJohnson, setIsJohnsonJohnson] = useState();

    const [jjFormValues, setJjFormValues] = useState({
        vaccBrand: "Johnson & Johnson",
        place: "",
        date: "",
    })

    const [vaccineFormValues, setVaccineFormValues] = useState({
        firstVaccBrand: "",
        firstPlace: "",
        firstDate: "",
        secondVaccBrand: "",
        secondPlace: "",
        secondDate: "",
    })

    //state variables 
    const [multiFormValues, setMultiFormValues] = useState({
        lastName: "",
        firstName: "",
        middleName: "",
        gender: "",
        birthday: "",
    })

    //Navigates to the next page
    const handleNext = () => {
        setActiveStep((nextStep) => nextStep + 1);
    }
    //Navigates to the Previous page
    const handleBack = () => {
        setActiveStep((previousStep) => previousStep - 1);
    }

    const handleNoRecord = () => {
        setActiveStep(5);
    }

    const handleStart = () => {
        setActiveStep(0);
    }

    const handleJj = (input) => (e) => {
        setIsJohnsonJohnson(e.target.checked);
    }

    //Handle form value state on change
    const handleChange = (input) => (e) => {
        isJohnsonJohnson 
        ? setJjFormValues({...jjFormValues, [input]: e.target.value})
        : setVaccineFormValues({...vaccineFormValues, [input]: e.target.value})
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
                    values={{jjFormValues, vaccineFormValues}} 
                    handleJj={handleJj}
                    handleChange={handleChange}         
                    isJohnsonJohnson={isJohnsonJohnson}
                    handle={{handleNext, handleBack}} 
                />
            )}
            {activeStep === 2 && (
                props.add
                ? <AddData
                    values={{multiFormValues, jjFormValues, vaccineFormValues}} 
                    isJohnsonJohnson={isJohnsonJohnson}    
                    handle={{handleNext, handleBack}}  
                />
                : <VaccineVerify
                    values={{multiFormValues, jjFormValues, vaccineFormValues}} 
                    isJohnsonJohnson={isJohnsonJohnson}    
                    handle={{handleNext, handleBack, handleNoRecord}}  
                />
            )}
            {activeStep === 3 && (
                <RecordFound
                    values={{multiFormValues, jjFormValues, vaccineFormValues}} 
                    isJohnsonJohnson={isJohnsonJohnson}    
                    handle={{handleNext, handleBack, handleNoRecord}}   
                />
            )}
            {activeStep === 4 && (
                <DownloadCertificate
                    values={{multiFormValues, jjFormValues, vaccineFormValues}} 
                    isJohnsonJohnson={isJohnsonJohnson}    
                    handle={{handleNext, handleBack, handleNoRecord}}   
                />
            )}             
            {activeStep === 5 && (
                <NoRecord
                    values={multiFormValues}      
                    handle={{handleStart}}  
                />
            )}   
        </div>
    )
}