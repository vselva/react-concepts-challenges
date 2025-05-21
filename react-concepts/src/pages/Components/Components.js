import ClassComponent from "./ClassComponent";
import FunctionalComponent from "./FunctionalComponent";
import PureComponentBase from "./PureComponent/Base";
import HigherOrderComponent from "./HigherOrderCompsonent";
import ControlledComponentsBase from "./ControlledComponents/Base";

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
            <HigherOrderComponent />
            <br /> 
            <ControlledComponentsBase />
        </>
    );
}

export default Components;
