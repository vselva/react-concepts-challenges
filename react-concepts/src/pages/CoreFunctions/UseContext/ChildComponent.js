import { useContext } from "react";
import MyContext from "./MyContext";

// 3. Use the context in the child component 
function ChildComponent() {

    const { value, setValue } = useContext(MyContext);

    return(
        <>
            <h4>Child Component</h4>
            <p>This is Child Component. Gets the value with useContext(MyContext) call. </p>
            <p>value: { value }</p>
            <button onClick={() => setValue("Updated Value!")}> Update </button>
        </>
    );
}

export default ChildComponent;
