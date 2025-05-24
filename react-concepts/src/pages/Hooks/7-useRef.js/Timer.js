import { useRef, useState } from "react";

function Timer() {

    const [ counter, setCounter ] = useState(0);
    const timeRef = useRef(null);

    const handleStart = () => {
        if(timeRef.current) return;
        timeRef.current = setInterval(() => {
            setCounter(sec => sec + 1)
        }, 1000);
    }

    const handleStop = () => {
        clearInterval(timeRef.current);;
        timeRef.current = null;
    }
    
    const handleReset = () => {
        setCounter(0);
    }

    return(
        <>
            <h4 className="mb-3">Timer with useRef:</h4>
            <p>Counter: {counter}</p>
            <button onClick={handleStart} type="button" className="btn btn-primary me-2">
                Start
            </button>
            <button onClick={handleStop} type="button" className="btn btn-danger me-2">
                Stop
            </button>
            <button onClick={handleReset} type="button" className="btn btn-danger">
                Reset
            </button>
        </>
    );
}

export default Timer;
