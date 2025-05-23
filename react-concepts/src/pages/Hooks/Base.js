import UseEffectBase from "./3-UseEffect/Base";
import UseReducerBase from "./2-useReducer/Base";
import UseStateBase from "./1-useState/Base";
import UseCallBackBase from "./4-useCallBack/Base";

function HooksBase() {

    return (
        <>
            <h2> Hooks Base:</h2>
            <hr />
            <UseStateBase />
            <hr />
            <UseReducerBase />
            <hr />

            <UseEffectBase />
            <hr />
            
            <UseCallBackBase />
            <hr />
        </>
    );
}

export default HooksBase;
