
import { createContext, useContext, useState } from 'react';

// 1. Create a Context 
const ThemeContext = createContext();

// 2. Provider Component 

const Provider = ({ children }) => {
    const [ counter, setCounter ] = useState(0);
    return (
        <>
            <h4>One Page Context API Example:</h4>
            <p> Counter Value in Provider {counter } </p>
            <button onClick={() => { setCounter(counter + 1) }}> Increment </button>
            <ThemeContext.Provider value={ counter }>
                { children }
            </ThemeContext.Provider>
        </>
    );
}

// 3. Child to use the Context
const Child = () => {
    const counter = useContext(ThemeContext);

    return (
        <>
            <h4>Child Component: </h4>
            <p> Child Component which uses the conext to receive the values </p>
            <p> counter: {counter} </p>
        </>
    );
}

function OnePageContextExample() {
    return (
        <Provider>
            <Child />
        </Provider>
    );
}

export default OnePageContextExample;
