import { useRef, useState, useEffect } from 'react';

const Stopwatch = () => {
    const timerIdRef = useRef(0); // we use a ref to store the interval id bc ref's value persists between component renders, when the setInterval updates the count state each second, the component re renders thatt's why we dont use a regular var to store the interval id bc it will be lost after the second render
    const [count, setCount] = useState(0);

    const startHandler = () => {
        if (timerIdRef.current)  { return; } // this fucntion will be ignored and return nothing every additional click on the button, when the start is clicked again the ref.current will already be asigned an interval id, wich is different to 0 
        timerIdRef.current = setInterval(() => setCount(c => c+1), 1000);
    };

    const stopHandler = () => {
        clearInterval(timerIdRef.current);
        timerIdRef.current = 0; // the current value is reset to 0 so that the startHandler funtion can be accessed again and start a new setInterval
    };

    const resetHandler = () => {
        clearInterval(timerIdRef.current);
        timerIdRef.current = 0;
        setCount(0);
    }

    useEffect(() => { // useEffect in this case replaces the componentDidMount and componentWillUnmount in class components 
        console.log('hi im stopwatch'); // will trigger on mount
        return () => {
            console.log('bye im stopwatch'); // anything inside the return function will trigger on unmounting
            clearInterval(timerIdRef.current);
        }
    }, []);

    return (
        <div>
            <h2>Timer: {count}s</h2>
            <div>
                <button onClick={startHandler} >Start</button>
                <button onClick={stopHandler} >Stop</button>
                <button onClick={resetHandler} >Clear</button>
            </div>
        </div>
    )
}

export default Stopwatch;