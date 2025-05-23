
import { memo } from 'react';

const PureComponent = memo (function Memo({ value }) {

    return (
        <>
            <h4>React Core Function - memo </h4>
            <p>The component sorrounded by memo api is called pure function which will not rendered unless the value passed to that component is changed. value: {value} </p>
        </>
    );
});

export default PureComponent; 
