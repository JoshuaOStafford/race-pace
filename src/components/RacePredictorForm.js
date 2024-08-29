import React, { useState } from 'react';
import { Select, Input } from 'semantic-ui-react'
import RaceResults from './RaceResults';

const RacePredictorForm = () => {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(7);
    const [seconds, setSeconds] = useState(15);
    const [distance, setDistance] = useState(0);

    const raceOptions = [
        { key: '400', value: 400, text: '400m' },
        { key: '1500', value: 1500, text: '1500m' },
        { key: '5000', value: 5000, text: '5k' },
        { key: '10000', value: 10000, text: '10k' },
        { key: '21098', value: 21098, text: 'Half Marathon' },
        { key: '42195', value: 42195, text: 'Marathon' },

      ];

      const handleChange = (e, { value }) => {
        setDistance(value);
      };

    return(
        <>
        <h2>Enter Race Result</h2>
        <Input
        label={{ basic: true, content: 'hours' }}
        labelPosition='right'
        value={hours} 
        onChange={(e) => setHours(Number(e.target.value))}
    />
    <br/>
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
    <h3>Select Race Distance</h3>
    <Select
        placeholder=''
        options={raceOptions}
        value={distance}
        onChange={handleChange}
      />
      <br/>
    {distance !== 0 && <RaceResults hours={hours} minutes={minutes} seconds={seconds} distance={distance}/>}
        </>
    );
};

export default RacePredictorForm;