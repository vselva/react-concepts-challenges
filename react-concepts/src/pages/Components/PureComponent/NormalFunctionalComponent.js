
function NormalFunctionalComponent({ counter }) {
    console.log('Rendering Normal Functional Component ....');

    return(
        <>
            <h5>Normal Functional Component</h5>
            <p> This is a simple Class Component (not pure). This will render when counter 1 or counter 2 value is changed. Creates unnecessary rendering.</p>
            <p>Props passed: {counter} </p>
        </>
    );
}

export default NormalFunctionalComponent;
