import useCounter from "./useCounter";
import UseWindowSize from "./useWindowSize";

function CustomHook() {

    // custom hook useCounter
    const [ count, increment, decrement, reset ] = useCounter(0);

    // custom hook - useWindowSize
    const windowSize = UseWindowSize();

    return(
        <>
            <h4 className="mb-3">Custom Hooks:</h4>
            <h5 className="mb-2">useCounter():</h5>
            <p className="mb-3">useCounter is a custom hook to increment and decrement values.</p>
            <pre className="mb-3">count: { count } </pre>
            <div className="btn-group" role="group">
                <button type="button" className="btn btn-primary" onClick={increment}>Increment</button>
                <button type="button" className="btn btn-secondary" onClick={decrement}>Decrement</button>
                <button type="button" className="btn btn-danger" onClick={reset}>Reset</button>
            </div>
            <hr />
            <h5 className="mb-2">useWindowSize():</h5>
            <p className="mb-3">useWindowSize is a custom hook to return window size.</p>
            <pre>windowSize: { windowSize.height } x { windowSize.width } </pre>
        </>
    );
}

export default CustomHook;
