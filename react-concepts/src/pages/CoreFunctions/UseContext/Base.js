import ChildComponent from "./ChildComponent";
import OnePageContextExample from "./OnePageContextExample";
import ParentComponent from "./ParentComponent";

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
        </>
    );
}

export default UseContextBase;
