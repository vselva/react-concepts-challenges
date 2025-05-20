import React from 'react';

function UnControlledComponent() {
    const inputRef = React.useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Submitted Value: ' + inputRef.current.value);
    }

    return(
        <>
            <h5> Form with Un Controlled Components:</h5>
            <p>Form values are not controlled by state. instead it is controlled by React.useRef. The value is retrived by inputRef.current.value. </p>
            <input type="text" ref={inputRef} />
            <button onClick={handleSubmit} className='btn btn-secondary btn-sm'> Submit </button>
        </>
    );
}

export default UnControlledComponent;
