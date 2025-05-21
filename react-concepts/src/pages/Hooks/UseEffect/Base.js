import AsyncAwaitFetch from "./AsyncAwaitFetch";
import Fetch from "./Fetch";

function UseEffectBase() {

    return(
        <>
            <h4>useEffect:</h4>
            <hr /> 
            <Fetch />

            <hr />
            <AsyncAwaitFetch />
        </>
    );
}

export default UseEffectBase;
