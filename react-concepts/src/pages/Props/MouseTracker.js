import { useState } from "react";

function MouserTracker({ render }) {

    const [ position, setPosition ] = useState({ x: 0, y: 0 });
    return(
        <>
            <h4>Render Mouser Tracker </h4>
            <div onMouseMove={(e) => setPosition({ x: e.clientX, y: e.clientY }) } >
                    { render(position) }
            </div>
        </>
    );
}

export default MouserTracker;
