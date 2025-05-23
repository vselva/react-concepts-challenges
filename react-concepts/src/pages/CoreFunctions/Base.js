import UseContextBase from "./ContextAPI/Base";
import PureComponent from "./UseMemo";

function CoreFunctionsBase() {

    return (
        <>
            <h2> React Core Functions:</h2>
            <hr />
            <UseContextBase /> 

            <hr />
            <PureComponent value={ 'test' }/>
        </>
    );
}

export default CoreFunctionsBase;
