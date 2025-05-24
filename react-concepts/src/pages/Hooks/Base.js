import UseEffectBase from "./3-UseEffect/Base";
import UseReducerBase from "./2-useReducer/Base";
import UseStateBase from "./1-useState/Base";
import UseCallBackBase from "./4-useCallBack/Base";
import UseMemoBase from "./5-useMemo.js/Base";
import UseRefBase from "./6-useRef.js/Base";

function HooksBase() {

    return (
        <>
            <h1> React Hooks:</h1>
            <hr />

            <UseStateBase />
            <hr />

            <UseReducerBase />
            <hr />

            <UseEffectBase />
            <hr />
            
            <UseCallBackBase />
            <hr />

            <UseMemoBase />
            <br />

            <UseRefBase />
            <hr />
        </>
    );
}

export default HooksBase;
