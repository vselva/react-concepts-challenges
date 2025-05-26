import { Component } from "react"

class M2GetDerivedStateFromProps extends Component {

    M2GetDerivedStateFromProps() {
        console.log('In getDerivedStatefromProps()');
    }

    render() {
        console.log('In render()')
        return <div className="card p-4 m-3">
            <h4>2. getDerivedStateFromProps():</h4>
        </div>
    }
}

export default M2GetDerivedStateFromProps;
