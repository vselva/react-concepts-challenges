import { useEffect, useState } from "react";

function TrackInputChange() {

    const [name, setName ] = useState('');

    // Execute only once after component is mounted
    useEffect(() => {
        console.log('ONLY ONE TIME!', name);

        // the return function executes before component gets unmounted 
        return () => {
            console.log('CLEANUP!')
        }
    }, []);

    // Executes when name state is changed
    useEffect(() => {
        console.log('CHANGED!', name);
    }, [name]);

    // Executed for each render - Not recommeded 
    useEffect(() => {
        console.log('EACH TIME!', name);
    });


    return (
        <div className="mb-3">
            <p>When user changes the input field, the useEffect will execute the call back with console.log. Please check inspect element.</p>
            <label htmlFor="nameInput" className="form-label">Name</label>
            <input
                id="nameInput"
                type="text"
                className="form-control"
                onChange={ (e) => setName(e.target.value) }
                value={ name }
            />
        </div>
    );
}

export default TrackInputChange;
