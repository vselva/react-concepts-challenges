import UseEffectBase from "./3-UseEffect/Base";
import UseReducerBase from "./2-useReducer/Base";
import UseStateBase from "./1-useState/Base";
import UseCallBackBase from "./5-useCallBack/Base";
import UseMemoBase from "./6-useMemo.js/Base";
import UseRefBase from "./7-useRef.js/Base";
import UseLayoutEffectBase from "./4-useLayoutEffect.js/Base";
import CustomHook from "./CustomHook/Base";

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

            <UseLayoutEffectBase />
            <hr />

            <CustomHook />
        </>
    );
}

export default HooksBase;
