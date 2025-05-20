import ClassComponent from "./ClassComponent";
import FunctionalComponent from "./FunctionalComponent";
import PureComponentBase from "./PureComponent/Base";
import HigherOrderFunction from "./HigherOrderCompsonent";
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
            <HigherOrderFunction />
            <br /> 
            <ControlledComponentsBase />
        </>
    );
}

export default Components;
