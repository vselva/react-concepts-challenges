import AsyncAwaitFetch from "./AsyncAwaitFetch";
import Fetch from "./Fetch";
import TrackInputChange from "./TrackInputChange";

function UseEffectBase() {

    return(
        <>
            <h4>useEffect:</h4>
            <hr /> 
            <Fetch />

            <hr />
            <AsyncAwaitFetch />

            <br />
            <TrackInputChange />
        </>
    );
}

export default UseEffectBase;
