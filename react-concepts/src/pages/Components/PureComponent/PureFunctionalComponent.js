
import React from 'react';

const PureFunctional = React.memo(
    function PureFunctionalComponent({ counter }) {
        console.log('Rendering Pure Functional Component ....');
        return(
            <>
                <h5>Pure Functional Component </h5>
                <p> This is a simple Pure Class Component. This will not render when counter 1 is changed. This renders only when counter 2 value is changed. Avoid unnecessary rendering.</p>
                <p> Props passed: {counter} </p>
            </>
        );
    }
)

export default PureFunctional;
