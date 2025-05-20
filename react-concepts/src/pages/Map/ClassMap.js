import React from "react";

class ClassMap extends React.Component {

    static defaultProps = {
        names: []
    }

    render() {
        return (
            <>
                <p> Map in Class Compoment: </p>            
                { 
                    this.props.names && this.props.names.length ?
                        ( this.props.names.map(name => <li key={ name }> { name } </li>) )
                        :
                        <p> No Names Found </p>
                }
            </>
        );
    }
}

export default ClassMap;
