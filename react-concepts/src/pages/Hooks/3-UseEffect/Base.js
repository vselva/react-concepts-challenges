import { useState } from "react";
import AsyncAwaitFetch from "./AsyncAwaitFetch";
import Fetch from "./Fetch";
import TrackInputChange from "./TrackInputChange";

function UseEffectBase() {

    const [ show, setShow ] = useState(true);

    return (
        <div className="container my-4">
            <h2 className="mb-3">useEffect:</h2>
            <hr />

            <div className="mb-4">
                <Fetch />
            </div>

            <hr />
            <div className="mb-4">
                <AsyncAwaitFetch />
            </div>

            <hr />
            <div className="mb-3">
                {show && <TrackInputChange />}
            </div>

            <button
                type="button"
                className="btn btn-primary"
                onClick={() => setShow(prev => !prev)}
            >
                {show ? 'Hide' : 'Show'} the Input Field
            </button>
        </div>
    );
}

export default UseEffectBase;
