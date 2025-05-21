import { useState } from "react";
import TextInput from "./Input";

function FormsBase() {

    const [ inputValue, setInputValue ] = useState('');

    const handleChange = (value) => {
        setInputValue(value);
    }
    return(
        <>
            <h2> Form Related React code:</h2>

            <br />
            <TextInput lable={ 'name' } value={ inputValue } onChange={ handleChange } required={ true }/>
            <p> Input Value (Parent): { inputValue } </p>
        </>
    );
}

export default FormsBase;
