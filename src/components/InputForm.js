import React, { useState } from 'react';
import { Button, Divider } from 'semantic-ui-react'
import PaceConversionForm from './PaceConversionForm';

let InputForm = () => {
    const [racePredictor , setRacePredictor] = useState(false);
    
    
    return (
        <>
        <h1>Pace Calculator</h1>
        <h3>Enter your pace and see its equivalent time for popular distances.</h3>
        <Button color={racePredictor ? 'grey' : 'blue'} onClick={() => { setRacePredictor(false)}}>Pace Conversion</Button>
            <Button color={racePredictor ? 'blue' : 'grey'} onClick={() => { setRacePredictor(true)}}>Race Predictor</Button>
        <br/>
        {racePredictor ? <h3>Feature Coming Soon</h3> 
        : <PaceConversionForm /> }
        <br/>
        <Divider horizontal></Divider>
            
        </>
    );

}

export default InputForm;