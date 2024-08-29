import React from 'react';
import {
    TableRow,
    TableHeaderCell,
    TableHeader,
    TableCell,
    TableBody,
    Table,
    Container
} from 'semantic-ui-react';
import './PaceResults.css'; // Import the CSS file

const PaceResults = ({minutes, seconds, isMiles}) => {

    const calculateSeconds = (meters) => {
        const paceSeconds = minutes*60 + seconds;
        const paceSecondsPerKM = isMiles ? paceSeconds/1.60934 : paceSeconds;
        const ratio = meters / 1000;
        return ratio*paceSecondsPerKM;
    };

    const formatResult = (totalSeconds) => {
        const hours = Math.floor(totalSeconds/3600);
        const remainingSeconds = totalSeconds - hours*3600;
        let minutes = Math.floor(remainingSeconds/60);
        let sec = Math.floor(totalSeconds - hours*3600 - minutes*60);
        if (minutes < 10)
            minutes = '0' + minutes;
        if (sec < 10)
            sec = '0' + sec;
        if (hours > 0)
            return `${hours}:${minutes}:${sec}`;
        else
            return `${minutes}:${sec}`;
    };

    const results = [
        {name: '400m', meters: 400, seconds: calculateSeconds(400)},
        {name: '800m', meters: 800, seconds: calculateSeconds(800)},
        {name: 'Kilometer', meters: 1000, seconds: calculateSeconds(1000)},
        {name: '1500m', meters: 1500, seconds: calculateSeconds(1500)},
        {name: 'Mile', meters: 1609, seconds: calculateSeconds(1610)},
        {name: '3k', meters: 3000, seconds: calculateSeconds(3000)},
        {name: '5k', meters: 5000, seconds: calculateSeconds(5000)},
        {name: '10k', meters: 10000, seconds: calculateSeconds(10000)},
        {name: '15k', meters: 15000, seconds: calculateSeconds(15000)},
        {name: 'Half marathon', meters: 21098, seconds: calculateSeconds(21098)},
        {name: 'Marathon', meters: 42195, seconds: calculateSeconds(42195)}
    ];

    return (
        <Container textAlign='center'>
            <Table celled className="responsive-table">
                <TableHeader>
                    <TableRow>
                        <TableHeaderCell>Distance</TableHeaderCell>
                        <TableHeaderCell>Time</TableHeaderCell>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {results.map(result => (
                        <TableRow key={result.name}>
                            <TableCell>{result.name}</TableCell>
                            <TableCell>{formatResult(result.seconds)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Container>
    );
};

export default PaceResults;