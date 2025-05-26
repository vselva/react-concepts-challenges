import { Component } from "react"

class MountingPhaseConstructor extends Component {
    constructor(props) {
        // call parent class with props 
        super(props);
        console.log(props);

        // Intializing props
        this.state = {
            count: 100,
            isLoading: true
        }

        // For Binding Methods
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log('Click event obaserved!');
        this.setState((prevState) => ({ ...prevState, count: prevState.count + 1 }))
    }

    render() {
        return (
            <div className="card p-4 m-3">
            <h4 className="mb-3">constructor:</h4>
            <p>
                <span className="fw-bold">props:</span> {this.props.counter}
            </p>
            <p>
                <span className="fw-bold">state:</span> count - {this.state.count}, isLoading - {this.state.isLoading ? 'true' : 'false'}
            </p>
            <button type="button" className="btn btn-primary" onClick={this.handleClick}>
                Click Me
            </button>
            </div>
        )
    }
}

export default MountingPhaseConstructor;
