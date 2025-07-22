import useCounter from "./useCounter";
import UseWindowSize from "./useWindowSize";
import useCustomEffect from "./useCustomEffect";
import { useState } from "react";

function CustomHook() {
    // custom hook useCounter
    const [count, increment, decrement, reset] = useCounter(0);

    // custom hook - useWindowSize
    const windowSize = UseWindowSize();

    // counter
    const [counter, setCounter] = useState(0);

    // useEffect
    useCustomEffect(() => {
        console.log("Counter Updated");
    }, [counter]);

    return (
        <>
            <h4 className="mb-3">Custom Hooks:</h4>

            <div>
                <h5 className="mb-2">useCounter():</h5>
                <pre className="mb-3">count: {count} </pre>
                <div className="btn-group" role="group">
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={increment}
                    >
                        Increment
                    </button>
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={decrement}
                    >
                        Decrement
                    </button>
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={reset}
                    >
                        Reset
                    </button>
                </div>
            </div>
            <hr />

            <div>
                <h5 className="mb-2">useWindowSize():</h5>
                <p>
                    windowSize: {windowSize.height} x {windowSize.width}{" "}
                </p>
            </div>
            <hr />

            <div>
                <h5 className="mb-2">useCustomEffect():</h5>
                <p>{counter} </p>
                <button
                    type="button"
                    onClick={() => setCounter((prev) => prev + 1)}
                    className="btn btn-primary btn-sm"
                >
                    +
                </button>

                <button
                    type="button"
                    onClick={() => setCounter((prev) => prev - 1)}
                    className="btn btn-primary btn-sm"
                >
                    -
                </button>
            </div>
        </>
    );
}

export default CustomHook;
