import { useReducer } from "react";

function ToggleSwitchAndCounter() {

    // initial value 
    const init = { 
        isOn: true,
        count: 0
    };

    // reducer function 
    const reducer = (state, action) => {
        switch(action.type) {
            case 'toggle':
                return { ...state, isOn: !state.isOn}
            case 'increment':
                return { ...state, count: state.count + 1 };
            case 'decrement':
                return { ...state, count: state.count - 1 };
            case 'reset':
                return { ...state, count: 0 } 
            default:
                throw Error('Invalid action type');
        }
    }

    // useReducer 
    const [ state, dispatch ] = useReducer(reducer, init);

    return (
        <div className="my-3">
            <h4 className="mb-3">Toggle Switch:</h4>
            { state.isOn && <p className="fs-4">{ state.count }</p> } 
            <button
                type="button"
                className={`btn ${state.isOn ? 'btn-success' : 'btn-secondary'}`}
                onClick={() => dispatch({ type: 'toggle' })}
            >
                {state.isOn ? 'Hide' : 'Show'} Counter
            </button>

            <div className="btn-group" role="group">
                <button
                    className="btn btn-primary"
                    onClick={() => dispatch({ type: 'increment' })}
                >
                    Increment
                </button>
                <button
                    className="btn btn-danger"
                    onClick={() => dispatch({ type: 'decrement' })}
                >
                    Decrement
                </button>
                <button
                    className="btn btn-danger"
                    onClick={() => dispatch({ type: 'reset' })}
                >
                    Reset
                </button>
            </div>
        </div>
    );
}

export default ToggleSwitchAndCounter;
