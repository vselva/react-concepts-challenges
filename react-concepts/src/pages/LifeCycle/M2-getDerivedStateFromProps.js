import { Component } from "react"

class M2GetDerivedStateFromProps extends Component
{
    static defaultState = { counter: 0 }
    state = { counter: this.props.counter }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('');
        console.log('============================')
        console.log('In getDerivedStatefromProps():')
        console.log('nextProps.counter:', nextProps.counter);
        console.log('prevState.counter:', prevState.counter);
        console.log('============================')

        if (nextProps.counter !== prevState.counter) {
            return {
                counter: nextProps.counter
            }
        }
        return null;
    }

    render() {
        return <div className="card p-4 m-3">
            <h4>2. getDerivedStateFromProps():</h4>
            <p>props changed from parent - counter: { this.state.counter } </p>
        </div>
    }
}

export default M2GetDerivedStateFromProps;
