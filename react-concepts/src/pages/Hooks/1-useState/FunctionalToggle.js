import { useState } from 'react';

function FunctionalToggle() {
    const [ isOn, toggleOn ] = useState(0);

    return (
        <>
            <h5> Toggle with Functional Compoment & useState Hook:</h5>
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
