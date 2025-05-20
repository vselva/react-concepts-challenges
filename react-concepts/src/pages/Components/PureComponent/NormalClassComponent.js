
import { Component } from "react";

class NormalClassComponent extends Component {

    static defaultProps = {
        counter: 0
    }

    render() {
        console.log('Rendering Normal Class Component ....');
        return (
            <>
                <h5>Normal Class Component</h5>
                <p> This is a simple Class Component (not pure). This will  render when counter 1 or counter 2 value is changed. Creates unnecessary rendering. </p>
                <p> Props passed: {this.props.counter} </p>
            </>
        );
    }
}

export default NormalClassComponent;
