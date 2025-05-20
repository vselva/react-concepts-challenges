function PropsInFC(props) {
    
    const { lable="Click", color="green" } = props;

    return (
        <>
            <h4>Functional Component With Props </h4>
            <p>color and lable are passed as props.  lable: "{lable}" color: "{color}" </p>
            <button 
                type="button" 
                className="btn btn-primary btn-sm" 
                style={{ backgroundColor: color }}> 
                    {lable} 
                </button>
        </>
    );
}

export default PropsInFC;