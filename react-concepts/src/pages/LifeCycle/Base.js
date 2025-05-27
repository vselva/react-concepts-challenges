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
import { useState } from "react";

function LifeCycleBase() {
    const [ counter1, setCounter1 ] = useState(0);
    const [ counter2, setCounter2 ] = useState(0);
    const [ counter3, setCounter3 ] = useState([0]);
    const [ counter4, setCounter4 ] = useState(0);
    const [ counter5, setCounter5 ] = useState(0);

    return(
        <>
            <h1>Component Life Cycles</h1>
            <br/>

            <h2>1. Mounting Phase:</h2>

            <M1Constructor counter={ 123 } /> <hr />

            <M2GetDerivedStateFromProps counter={ counter1 } /> <hr />
                <button 
                    type="submit" 
                    className="btn btn-primary btn-sm"
                    onClick={() => setCounter1(c => c + 1) }>
                        Update counter prop (current: {counter1}) for M2GetDerivedStateFromProps
                </button>
                <hr />

            <M3Render name={'Selva'} /> <hr />

            <M4ComponentDidMount />

            <h2>2. Updating Phase:</h2>

            <U1GetDerivedStateFromProps counter={ counter2 } /> <hr />
                <button 
                    type="submit" 
                    className="btn btn-primary btn-sm"
                    onClick={() => setCounter2(c => c + 1) }>
                        Update counter prop (current: { counter2 }) for U1GetDerivedStateFromProps
                </button>
                <hr />

            <U2ShouldComponentUpdate counter={ counter3 } /> <hr />
                <button 
                    type="submit" 
                    className="btn btn-primary btn-sm"
                    onClick={() => setCounter3(p => [ p[0] + 1 ]) }>
                        Update counter prop (current: { counter3 }) for U2ShouldComponentUpdate
                </button>
                <hr />

            <U3Render counter={ counter4 } /> <hr />
                <button 
                    type="submit" 
                    className="btn btn-primary btn-sm"
                    onClick={() => setCounter4(p => p + 1 ) }>
                        Update counter prop (current: { counter4 }) for render() in Updating Phase
                </button>
                <hr />

            <U4GetSnapShotBeforeUpdate /> <hr />

            <U5ComponentDidUpdate counter={ counter5 } />
                <button 
                    type="submit" 
                    className="btn btn-primary btn-sm"
                    onClick={() => setCounter5(p => p + 1 ) }>
                        Update counter prop (current: { counter5 }) for render() in Updating Phase
                </button>
                <hr />

            <h2>3. Unmounting Phase:</h2>
            <ComponentWillUnMount /> <hr />

            <h2>4. Error Handling Phase:</h2>
            <EH1GetDerivedStateFromErrors /> <hr />
            <EH2ComponentDidCatch /> <hr />

        </>
    );
}

export default LifeCycleBase;
