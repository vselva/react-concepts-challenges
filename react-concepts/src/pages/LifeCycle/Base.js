import M1Constructor from "./M1-constructor";
import M3Render from "./M3-render";
import M2GetDerivedStateFromProps from "./M2-getDerivedStateFromProps";
import M4ComponentDidMount from "./M4-componentDidMount";
import U1GetDerivedStateFromProps from "./U1-getDerivedStateFromProps";
import U2ShouldComponentUpdate from "./U2-shouldComponentUpdate";
import U3Render from "./U3-render";
import U4GetSnapShotBeforeUpdate from "./U4-getSnapShotBeforeUpdate";
import U5ComponentDidUpdate from "./U5-componentDidUpdate";
import ComponentWillUnMount from "./UM-componentWillUnMount";
import EH1GetDerivedStateFromErrors from "./EH1-getDerivedStatefromErrors";
import EH2ComponentDidCatch from "./EH2-componentDidCatch";

function LifeCycleBase() {
    return(
        <>
            <h1>Component Life Cycles</h1>
            <br/>

            <h2>1. Mounting Phase:</h2>
            <M1Constructor counter={ 123 } /> <hr />
            <M2GetDerivedStateFromProps /> <hr />
            <M3Render /> <hr />
            <M4ComponentDidMount />

            <h2>2. Updating Phase:</h2>
            <U1GetDerivedStateFromProps /> <hr />
            <U2ShouldComponentUpdate /> <hr />
            <U3Render /> <hr />
            <U4GetSnapShotBeforeUpdate /> <hr />
            <U5ComponentDidUpdate />

            <h2>3. Unmounting Phase:</h2>
            <ComponentWillUnMount /> <hr />

            <h2>4. Error Handling Phase:</h2>
            <EH1GetDerivedStateFromErrors /> <hr />
            <EH2ComponentDidCatch /> <hr />

        </>
    );
}

export default LifeCycleBase;
