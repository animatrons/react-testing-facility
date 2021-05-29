import React, { useState, useRef, useEffect } from 'react';
import Stopwatch from './SubComponents/Stopwatch';

const This = () => {
    const [count, setCount] = useState(0);

    const countRef = useRef(0);
    
    const handleRef = () => {
        countRef.current++;
        console.log(`Clicked (ref) ${countRef.current} times`);
    }

    const handleState = () => {
        setCount(count + 1);
        console.log(`Clicked (state) ${count} times`);
        console.log(`Clicked (ref) ${countRef.current} times`);
    }

    console.log('I rendered jhbkbhlb!');

    return (
        <div>
            <h1>
                This???
            </h1>
            <button onClick={handleState}>Clicked {count} times</button>
            <button onClick={handleRef}>Update Ref</button>
            <h1>
                Stopwatch:
            </h1>
            <Stopwatch />
        </div>
    )
}

export default This;