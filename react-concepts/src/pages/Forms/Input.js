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
        <div>
            <h4>A reusable input component with label and validation (required field).</h4> 
            <label htmlFor="{lable}"> {lable} </label>
            <input
                value={ value }
                onBlur={ handleBlur }
                onChange={ (e) => { onChange(e.target.value) } } />
                { error && <span style={{color:"red"}}> { error } </span>}
        </div>
    );
}

export default TextInput;