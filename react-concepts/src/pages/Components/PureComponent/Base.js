import { useState } from "react";
import PureClassComponent from "./PureClassComponent";
import NormalClassComponent from "./NormalClassComponent";
import PureFunctional from "./PureFunctionalComponent";
import NormalFunctionalComponent from "./NormalFunctionalComponent";

function PureComponentBase() {

    const [ counter1, setCounter1 ] = useState(0);
    const [ counter2, setCounter2 ] = useState(0);

    return (
        <>
            <div style={{ display: "flex", gap: "24px" }}>
                <div style={{ border: "1px solid #ccc", padding: "16px", minWidth: "220px" }}>
                    <PureClassComponent counter={counter2} />
                    <br />
                    <NormalClassComponent counter={counter2} />
                </div>

                <div style={{ border: "1px solid #ccc", padding: "16px", minWidth: "220px" }}>
                    <PureFunctional counter={counter2} />
                    <br />
                    <NormalFunctionalComponent counter={counter2} /> 
                </div>

                <div style={{ border: "1px solid #ccc", padding: "16px", minWidth: "220px" }}>
                    <h4>Counters</h4>
                    <button
                        type="button"
                        onClick={() => setCounter1(counter1 + 1)}
                        style={{ marginBottom: "8px" }}
                    >
                        Increment Counter 1
                    </button>
                    <p>{counter1}</p>
                    <button
                        type="button"
                        onClick={() => setCounter2(counter2 + 1)}
                        style={{ marginBottom: "8px" }}
                    >
                        Increment Counter 2
                    </button>
                    <p>{counter2}</p>
                </div>
            </div>
        </>
    );
}

export default PureComponentBase;
