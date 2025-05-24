import { useMemo, useState } from "react";

function DoubleValueMemoExample() {
    const [count, setCount] = useState(0);

    // Memoized value that updates when count changes
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
                <strong>Double Count (with Dependency):</strong> {doubleCount}
            </p>
            <p className="alert alert-secondary">
                <strong>Initial Double Count (no Dependency):</strong> {initialDoubleCount}
            </p>

            <button
                type="button"
                className="btn btn-success"
                onClick={() => setCount(prev => prev + 1)}
            >
                Increment Count ({count})
            </button>
        </div>
    );
}

export default DoubleValueMemoExample;
