import { Component } from "react";

class U5ComponentDidUpdate extends Component {

    state = {
        counter: 0
    };

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('');
        console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
        console.log('getDerivedStateFromProps()');
        console.log('nextProps:', nextProps);
        console.log('prevState:', prevState);
        console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

        if (prevState.counter !== nextProps.counter) {
            return  { counter: nextProps.counter };
        }
        return null;
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('');
        console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
        console.log('componentDidUpdate()');
        console.log('prevProps:', prevProps);
        console.log('prevState:', prevState);
        console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
    }

    render() {
        return <div className="card m-4 p-3">
            <h4>5. componentDidUpdate():</h4>
            <p>This is called after DOM update. </p>
            <pre>Props: this.props - { this.props.counter } </pre>
        </div>
    }
}

export default U5ComponentDidUpdate;
