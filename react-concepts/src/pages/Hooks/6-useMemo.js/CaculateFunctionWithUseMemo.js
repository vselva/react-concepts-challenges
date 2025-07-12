import { useEffect, useMemo, useState } from "react";

function DoubleValueMemoExample(props) {
    const [count, setCount] = useState(0);

    // Memoized value that updates when count changes
    // When the component rerenders, this call back function will executed even without count changes 
    useEffect(() => {
        console.log("Recomputing doubleCount...");
        // setCount((count) => count * 2);
        console.log(props);
    }, []);

    // Memoized value that updates when count changes
    // Even the component rerenders this call back function will NOT executed untill count changes 
    const doubleCount = useMemo(() => {
        console.log("Recomputing doubleCount...");
        return count * 2;
    }, [count]);

    // Memoized value that computes only once (on mount)
    const initialDoubleCount = useMemo(() => {
        console.log("Computing initialDoubleCount only once...");
        return count * 2;
    }, []);

    return (
        <div className="container mt-4">
            <h4 className="mb-3">useMemo Demonstration</h4>

            <p className="alert alert-primary">
                <strong>Double Count (with Dependency):</strong> 
                {doubleCount}
            </p>
            <p className="alert alert-secondary">
                <strong>Initial Double Count (no Dependency):</strong>
                {initialDoubleCount}
            </p>

            <button
                type="button"
                className="btn btn-success"
                onClick={() => setCount(prev => prev + 1)}
            >
                Increment Count ({count})
            </button>
            <p>Toggle via Props: {props.toggle ? 'TRUE' : 'FALSE'}</p>
        </div>
    );
}

export default DoubleValueMemoExample;
