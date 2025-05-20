
import { PureComponent } from "react";

class PureClassComponent extends PureComponent {

    static defaultProps = {
        counter: 0
    }

    render() {
        console.log('Rendering Pure Class Component ....');
        return (
            <>
                <h5>Pure Class Component</h5>
                <p> This is a simple Pure Class Component. This will not render when counter 1 is changed. This renders only when counter 2 value is changed. Avoid unnecessary rendering. </p>
                <p> Props passed: {this.props.counter} </p>
            </>
        );
    }
}

export default PureClassComponent;
