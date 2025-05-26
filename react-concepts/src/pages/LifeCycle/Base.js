import ComponentDidMount from "./componentDidMount";
import MountingPhaseConstructor from "./Mounting-1-constructor";

function LifeCycleBase() {
    return(
        <>
            <h1>Component Life Cycles</h1>
            <br/>

            <h2>1. Mounting Phase:</h2>
            
            <MountingPhaseConstructor counter={ 123 } />
            <hr />
            
            <h2>2. Updating Phase:</h2>

            <ComponentDidMount />
            <hr />

            <h2>3. Unmounting Phase:</h2>


            <h2>4. Error Handling Phase:</h2>


        </>
    );
}

export default LifeCycleBase;
