import { Component } from "react";

class ErrorProneComponent  extends Component {

    render() {
        if(1) 
            throw new Error("This is a test error from ErrorProneComponent");
        
        return <div className="card m-4 p-3">
            <h4>2. componentDidCatch():</h4>
        </div>
    }
}

export default ErrorProneComponent ;
