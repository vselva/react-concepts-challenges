import ClassProps from "./ClassProps";
import FunctionalProps from "./FunctionalProps";
import MouserTracker from "./MouseTracker";

function PropsBase() {
    return (
        <>
            <FunctionalProps color={ 'red' } lable={ 'Click Me' } />
            <hr />

            <FunctionalProps />
            <hr />

            <ClassProps color={ 'red' } lable={ 'Click Me' } />
            <hr />

            <ClassProps />
            <hr />

            <MouserTracker render={ ({x, y}) => <h5 style={{color: "blue"}} > {x}, {y} </h5> }/> 
        </>
    )
}

export default PropsBase;
