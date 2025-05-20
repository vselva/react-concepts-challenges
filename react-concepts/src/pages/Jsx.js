
import { useState } from 'react';

function Jsx() {

    const [count, setCount] = useState(0);
    return (
        <>
            <h1 className="card-title text-primary mb-3">This is a JSX Syntax</h1>
            <p className="card-text">
                The JSX gets transpiled to <pre className="bg-light p-2">React.createElement();</pre>.
                Babel is respobsibke for the compilation.
                camelCase is used for events. Eg, onClick();
            </p>
            <button className="btn btn-primary mx-2" onClick={() => setCount(count + 1)}> Click Me </button>
            <p> Count: {count} </p>

        </>
    );
}

export default Jsx;
