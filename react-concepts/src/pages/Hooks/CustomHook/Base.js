import useCounter from "./useCounter";

function CustomHook() {

    // a
    const [ count, increment, decrement, reset ] = useCounter(0);

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
        </>
    );
}

export default CustomHook;
