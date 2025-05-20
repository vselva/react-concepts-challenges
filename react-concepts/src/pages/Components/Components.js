import ClassComponent from "./ClassComponent";
import ControlledComponents from "./ControlledComponents/ControlledComponents";
import FunctionalComponent from "./FunctionalComponent";
import HigherOrderFunction from "./HigherOrderCompsonent";
import PureComponentBase from "./PureComponent/Base";

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
            <ControlledComponents />
        </>
    );
}

export default Components;
