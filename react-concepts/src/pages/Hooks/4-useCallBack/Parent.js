import { useCallback, useState } from "react";
import Child from "./Child";

function Parent() {

    const [count, setCount ] = useState(0);
    const [ message, setMessage ] = useState('');

    const handleClick = useCallback(() => {
        const now = new Date();
        const time = 
            now.getHours().toString().padStart(2, '0') + ':' +
            now.getMinutes().toString().padStart(2, '0') + ':' +
            now.getSeconds().toString().padStart(2, '0') + ':' +
            now.getMilliseconds().toString().padStart(2, '0');
        setMessage(`Click Event at [${time}]`);
    }, []);

    return (
        <div className="container mt-4">
            <h4 className="mb-3">Parent Component:</h4>
            <p className="text-muted">This is Parent that passes memozed version of function.</p>
            <pre className="bg-light p-2 rounded">{ message } & Count: { count } </pre>
            <button 
                className="btn btn-primary me-2" 
                onClick={ () => setCount( p => p + 1 ) }>
                    Counter
            </button>
            <br /> 
            <br /> 
            <Child onClick={ handleClick } />
        </div>
    );
}

export default Parent;
