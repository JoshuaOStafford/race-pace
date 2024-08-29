import React, { useState } from 'react';
import { Button, Input } from 'semantic-ui-react'
import PaceResults from './PaceResults';

const PaceConversionForm = () => {

    const [minutes, setMinutes] = useState(7);
    const [seconds, setSeconds] = useState(15);
    const [isMiles, setIsMiles] = useState(true);

    return(
        <>
        <h2>Enter your pace</h2>
        <Input
        label={{ basic: true, content: 'minutes' }}
        labelPosition='right'
        value={minutes} 
        onChange={(e) => setMinutes(Number(e.target.value))}
    />
    <br/>
     <Input
        label={{ basic: true, content: 'seconds' }}
        labelPosition='right'
        value={seconds} 
        onChange={(e) => setSeconds(Number(e.target.value))}
    />
    <br/><br/>
    <Button color={isMiles ? 'green' : 'grey'} onClick={() => { setIsMiles(true)}}>per Mile</Button>
    <Button color={isMiles ? 'grey' : 'green'} onClick={() => { setIsMiles(false)}}>per KM</Button>
    <br/><br/>
    <PaceResults minutes={minutes} seconds={seconds} isMiles={isMiles} />
        </>
    );
};

export default PaceConversionForm;