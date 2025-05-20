import ClassProps from "./ClassProps";
import FunctionalProps from "./FunctionalProps";

function Props() {
    return (
        <>
            <FunctionalProps color={ 'red' } lable={ 'Click Me' } />
            <FunctionalProps />

            <ClassProps color={ 'red' } lable={ 'Click Me' } />
            <ClassProps />
        </>
    )
}

export default Props;
