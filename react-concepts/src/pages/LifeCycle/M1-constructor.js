import { Component } from "react"

class M1Constructor extends Component {
    constructor(props) {
        // Call parent's constructor with Initial Values 
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
            <h4 className="mb-3">1. constructor:</h4>
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

export default M1Constructor;
