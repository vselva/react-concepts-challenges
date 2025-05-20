import { useState } from "react";

function FunctionalLoginForm() {

    const [ name, setName ] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        alert('Submitted Name ID: ' + name);
    }
    return(
        <>
            <h5> Login Form with Controlled Components:</h5>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={name}
                    onChange={ (e) => setName(e.target.value) }
                    />
                <button 
                    type="submit"
                    className="btn btn-primary btn-sm"> 
                        Submit 
                </button>
            </form>
        </>
    );
}

export default FunctionalLoginForm;
