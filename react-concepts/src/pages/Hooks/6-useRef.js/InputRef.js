import { useRef, useState } from "react";

function InputRef() {

    const inputRef = useRef();
    const [ input, setInput ] = useState('');

    const focusInput = () => {
        inputRef.current.focus();
    }

    const readInput = () => {
        setInput(inputRef.current.value);
    }

    return(
        <>
            <h4 className="mb-3">useRef():</h4>
            <div className="mb-3">
                <input ref={inputRef} type="text" className="form-control" />
            </div>
            <button onClick={ focusInput } className="btn btn-primary">
                Focus Input
            </button>
            <p>Input Value: {input}</p>
            <button onClick={ readInput } className="btn btn-primary">
                Read Input Value 
            </button>
        </>
    );
}

export default InputRef;
