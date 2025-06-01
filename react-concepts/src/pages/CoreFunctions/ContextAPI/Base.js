import { createContext, useContext } from "react";
import ChildComponent from "./ChildComponent";
import OnePageContextExample from "./OnePageContextExample";
import ParentComponent from "./ParentComponent";

const simpleContext = createContext();

function UseContextBase() {

    return (
        <>
            <h4>useContext:</h4>
            <hr />

            <ParentComponent> 
                <ChildComponent />
            </ParentComponent>
            <hr/>

            <OnePageContextExample /> 
            <hr />

            <simpleContext.Provider value={{ name: 'Selva' }}>
                <UseContext />
            </simpleContext.Provider>
        </>
    );
}

function UseContext() {
    const user = useContext(simpleContext);

    return(
        <>
            <h4>UseContext (Child) Component:</h4>
            <p>UseContext Component to receive value 'name' from Parent Component (UseContextBase):</p>
            <p> Value Received: { user.name } </p>
        </>
    );
}

export default UseContextBase;
