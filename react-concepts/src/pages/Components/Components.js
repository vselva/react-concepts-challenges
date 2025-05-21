import ClassComponent from "./ClassComponent";
import FunctionalComponent from "./FunctionalComponent";
import PureComponentBase from "./PureComponent/Base";
import ControlledComponentsBase from "./ControlledComponents/Base";
import HigherOrderComponentBase from "./HigherOrderComponent/Base";

function Components() {
    return(
        <>
            <h2>Component Types:</h2>
            <hr />
            <FunctionalComponent />
            <br />
            <ClassComponent />
            <br />
            <PureComponentBase />
            <br />
            <HigherOrderComponentBase />
            <br /> 
            <ControlledComponentsBase />
        </>
    );
}

export default Components;
