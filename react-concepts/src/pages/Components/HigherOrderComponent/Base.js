import WrappedComponent from "./WrappedComponent";
import HigherOrderComponent from "./HigherOrderComponent";

const EnhancedComponent = HigherOrderComponent(WrappedComponent);

function HigherOrderComponentBase() {
    return (
        <>
            <h4>4. Higher Order Component</h4>
            <p>
                <strong>
                    This is the react component which takes component as
                    argument and returns a new component. This is an advanced
                    pattern.
                </strong>
            </p>

            <EnhancedComponent isLoading={true} />
            <br />
            <EnhancedComponent
                isLoading={false}
                data="Enhanced by HOC with isLoading is False"
            />
        </>
    );
}

export default HigherOrderComponentBase;
