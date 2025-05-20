
function FunctionalMap({ names }) {

    return (
        <>
            <p> Map in Functional Compoment: </p>
            { 
                names && names.length ? 
                    ( names.map(name => <li key={ name }> { name } </li>) )
                :
                    ( <p> 'No names found' </p> ) 
            }
        </>
    );
} 

export default FunctionalMap;
