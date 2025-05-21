import { useState } from "react";

const TextInput = ({ lable, value, onChange, required} ) => {

    const [ error, setError ] = useState('');

    const handleBlur = () => {
        if (required && !value) {
            setError(`The field '${lable}' Value is required`);
        } else {
            setError('');
        }
    }

    return(
        <div className="mb-3">
            <h4 className="mb-3">A reusable input component with label and validation (required field).</h4> 
            <label htmlFor={lable} className="form-label"> {lable} </label>
            <input
                className="form-control"
                value={value}
                onBlur={handleBlur}
                onChange={(e) => { onChange(e.target.value) }}
                id={lable}
            />
            {error && <span className="text-danger"> {error} </span>}
        </div>
    );
}

export default TextInput;