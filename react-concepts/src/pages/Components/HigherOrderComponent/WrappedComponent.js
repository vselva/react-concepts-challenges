
function WrappedComponent({ data }) {

    return(
        <>
            <h5>Wrapped Component</h5>
            <p>This is a simple functional component (known as wrapped component) which will be passed as argument to another component (known as Higher Order Component). <br/> <b>data: </b>{ data } </p>
        </>
    );
}

export default WrappedComponent;
