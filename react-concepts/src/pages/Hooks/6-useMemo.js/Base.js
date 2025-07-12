import { useState } from "react";
import DoubleValueMemoExample from "./CaculateFunctionWithUseMemo";

const UseMemoBase = () => {
    const [ toggle, setToggle ] = useState(true);

    return (
        <> 
            <h2>useMemo():</h2>
            <hr />
            
            <DoubleValueMemoExample props={toggle} />

             <button 
                type="button" 
                onClick={() => setToggle(prev => !prev)}>
                    Toggle {toggle ? 'True' : 'False'}
            </button>
            <hr />
        </>
    );
}

export default UseMemoBase;
