import PropsInCC from "./PropsInCC";
import PropsInFC from "./PropsInFC";

function Props() {
    return (
        <>
            <PropsInFC color={ 'red' } lable={ 'Click Me' } />
            <PropsInFC />

            <PropsInCC color={ 'red' } lable={ 'Click Me' } />
            <PropsInCC />
        </>
    )
}

export default Props;
