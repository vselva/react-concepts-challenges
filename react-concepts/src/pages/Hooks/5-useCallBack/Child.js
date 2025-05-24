import { memo } from "react";

const Child = memo ( ({ onClick }) => {

    console.log('Child Rendered.');

    return(
        <div className="card p-3 mb-3">
            <h4 className="card-title">Child Component:</h4>
            <p className="card-text">This is child component that receives memozed function from Parent.</p>
            <button className="btn btn-primary" onClick={ onClick }>Show Time </button>
        </div>
    );
} );

export default Child;
