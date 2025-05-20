import { useState } from "react";

function FunctionalLoginForm() {

    const [ email, setEmail ] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log(email);
    }
    return(
        <>
            <h5> Login Form with Controlled Components:</h5>
            <form onSubmit={handleSubmit}>
                <input 
                    type="email"
                    value={email}
                    onChange={ (e) => setEmail(e.target.value) }
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
