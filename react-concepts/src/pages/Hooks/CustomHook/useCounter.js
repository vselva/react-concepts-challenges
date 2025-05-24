import { useState } from "react";

function useCounter({ initValue = 0 }) {
    const [ count, setCount ] = useState(initValue);

    const increment = () => setCount(count => count + 1);
    const decrement = () => setCount(count => count - 1);
    const reset = () => setCount(0);
    
    return [ count, increment, decrement, reset ];
}

export default useCounter;
