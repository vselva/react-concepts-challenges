import React, { Component } from 'react';

class ClassToggle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOn: false
        }
    }

    handleToggle = () => {
        this.setState(prevState => (
            { isOn: !prevState.isOn }
        ));
    };

    render() {
        return (
            <>
                <h5>Toggle with ClassComponent & this.state and this.setState:</h5>
                <p> Toggle: { this.state.isOn ? 'ON' : 'OFF' } </p>
                <button 
                    type="button"
                    className="btn btn-primary btn-sm"
                    onClick={this.handleToggle}>
                        Toggle
                    </button>
            </>
        );
    }
}

export default ClassToggle;
