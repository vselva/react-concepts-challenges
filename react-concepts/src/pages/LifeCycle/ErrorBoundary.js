import { Component } from "react";


class ErrorBoundary extends Component {

    state = {
        hasError: false
    }

    static getDerivedStateFromError(error) {
        console.log('');
        console.log('/////////////////////////////////////');
        console.log('getDerivedStateFromErrors()');
        console.log('/////////////////////////////////////');
        return ({
            hasError: true
        });
    }

    componentDidCatch(error, info) {
        console.log('');
        console.log('/////////////////////////////////////');
        console.log("Caught error:", error, info);
        console.log('/////////////////////////////////////');
    }

    render() {
        if (this.state.hasError) {
            return <h2>Something went wrong.</h2>;
        }

        return (
            <div className="card m-4 p-3">
                <h4>1. Error Boundary using getDerivedStateFromError</h4>
                {this.props.children}
            </div>
        );
    }
}

export default ErrorBoundary;
