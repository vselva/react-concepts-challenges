import { useState } from "react";
import MyContext from "./MyContext";

// 2. Create a Provider Component
function ParentComponent({ children }) {

    const [ value, setValue ] = useState("Hello from Provider Context!");

    return (
        <>
            <h4>Provider (Parent) Component.</h4>
            <p>This is Provider Component consists of "MyContext.Provider" with 'value' passing and 'children' in it.</p>
            <p> value: { value } </p>
            <MyContext.Provider value={{ value, setValue }} >
                { children }
            </MyContext.Provider>
        </>
    );
}

export default ParentComponent;
