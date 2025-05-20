import React from 'react';

class PropsInCC extends React.Component {
    
    static defaultProps = {
        color: "green",
        lable: "Click"
    }

    render() {
        console.log(this.props);
        return(
            <>
                <h4> Class Component With Props </h4>
                <p>Class component receives the props via 
                    this.props.color="{ this.props.color }" 
                    this.props.lable="{ this.props.lable }" 
                </p>
                <button 
                    type="button" 
                    className="btn btn-primary btn-sm" 
                    style={{ backgroundColor:this.props.color }}> 
                        { this.props.lable } 
                    </button>
            </>
        );
    }
}

export default PropsInCC;
