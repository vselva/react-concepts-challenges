import { useEffect, useState } from "react";

function TrackInputChange() {

    const [name, setName ] = useState('');

    useEffect(() => {
        console.log('inout value changed!', name);
    }, [name]);

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
