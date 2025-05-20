import React from 'react';

function UnControlledComponent() {
    const inputRef = React.useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Email Submitted: ' + inputRef.current.value);
    }

    return(
        <>
            <input type="text" ref={inputRef} />
            <button onClick={handleSubmit} className='btn btn-secondary btn-sm'> Submit </button>
        </>
    );
}

export default UnControlledComponent;
