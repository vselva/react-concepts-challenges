import { Component } from "react"

class ComponentWillUnMount extends Component {

    componentWillUnmount() {
        console.log('');
        console.log('`````````````````````````````')
        console.log('componentWillUnmount()');
        console.log('`````````````````````````````')
    }
    render() {
        return <div className="card m-4 p-3">
            <h4>componentWillUnMount</h4>
            <p> 
                - Life Cycle Method which is called just before component gets Unmounted <br />
                - for Cleanup purposes 
            </p>
        </div>
    }
}

export default ComponentWillUnMount;
