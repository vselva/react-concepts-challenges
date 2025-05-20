import { useState } from 'react';

function FunctionalToggle() {
    const [ isOn, toggleOn ] = useState(0);

    return (
        <>
            <h4> Toggle with useState and Functional Compoment:</h4>
            <p> The State is now { isOn ? 'ON' : 'OFF' } </p>
            <button 
                type="button" 
                className="btn btn-primary btn-sm" 
                onClick={ () => toggleOn( !isOn ) }> 
                    Toggle 
                </button>
        </>
    );
}

export default FunctionalToggle;
