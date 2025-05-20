import ClassMap from "./ClassMap";
import FunctionalMap from "./FunctionalMap";

function Map( names ) {
    return (
        <>
            <FunctionalMap names={['selva', 'diana', 'narumugai']} />
            <br />
            <FunctionalMap />
            <br /> 
            <ClassMap names={['selva', 'diana', 'narumugai']} />
            <br />
            <ClassMap />
        </>
    );
}

export default Map;
