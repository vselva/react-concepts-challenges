import { Component } from "react";
import _ from "lodash";

class U2ShouldComponentUpdate extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        // render only state changes
        console.log('');
        console.log('+++++++++++++++++++++++++');
        console.log('In shouldComponentUpdate()');
        console.log('nextProps:', nextProps);
        console.log('nextState:', nextState); // this is null because we are not updating state with getDerivedStateFromProps
        console.log('+++++++++++++++++++++++++');

        // Compare array values using Lodash
        return !_.isEqual(nextProps.counter, this.props.counter);
    }

    render() {
        return <div className="card m-3 p-4">
            <h4>2. shouldComponentUpdate():</h4>
            <p>Decided whether render should happen or not. Returns true or false.</p>
            <pre>Props: this.props.counter: {JSON.stringify(this.props.counter)}</pre>
        </div>
    }
}

export default U2ShouldComponentUpdate;
