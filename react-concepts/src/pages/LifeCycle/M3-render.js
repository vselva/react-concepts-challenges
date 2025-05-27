import { Component } from "react";

class M3Render extends Component {

    state = {
        message: 'Welcome to React Render() in Mouting Phase!'
    }
    
    render() {
        return <div className="card p-4 m-3">
            <h4>3. render()</h4>
            <pre>Props: <strong>this.props.name:</strong> { this.props.name }</pre>
            <pre>State: <strong>this.state.message:</strong> { this.state.message }</pre>
        </div>
    }
}

export default M3Render;
