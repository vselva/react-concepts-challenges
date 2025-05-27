import { Component } from "react";

class U4GetSnapShotBeforeUpdate extends Component {

    state = {
        counter: 0
    };

    handleClick = () => this.setState(
        p => ({ ...p, counter: p.counter + 1 })
    );

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('prevState:', prevState);
        console.log('prevProps:', prevProps);
        console.log("Snapshot before update:", prevState.counter);
        return prevState.counter;
    }

    componentDidUpdate(prevProps, prevState, snapShot) {
        console.log('prevState:', prevState);
        console.log('prevProps:', prevProps);
        console.log('snapshot:', snapShot);
        console.log("Updated from", snapShot, "to", this.state.counter);
    }

    render() {
        return <div className="card m-4 p-3">
            <h4>4. getSnapShotBeforeUpdate():</h4>
            <p>
                - Invoked before DOM update <br/>
                - Return value of this will be passed as 3rd parameter (snapShot) to ComponentDidUpdate <br />
                - <small>Flow: render() - getSnapShotBeforeUpdate() - DOM Update - componentDidUpdate</small>
            </p>
            <pre>this.state.counter: { this.state.counter } </pre>
            <button 
                type="button" 
                className="btn btn-primary btn-sm" 
                onClick={ this.handleClick } >
                    Increment { this.state.counter } 
            </button>
        </div>
    }
}

export default U4GetSnapShotBeforeUpdate;
