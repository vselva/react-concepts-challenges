import { useLayoutEffect, useRef, useState } from "react";

function Box() {

    const boxRef = useRef();
    const [ size, setSize ] = useState({ width: 0, height: 0 });
    
    useLayoutEffect(() => {
        const box = boxRef.current;
        if(box) {
            setSize({
                width: box.offsetWidth,
                height: box.offsetHeight
            })
        }
    }, []);

    return(
        <>
            <h4>Box Width x Height</h4>
            <p>Box with width and height with useLayout hook.</p>
            <p>Width: { size.width } X height: { size.height }</p>
            <div 
                ref={boxRef}
                style={{ width:'300px', height:'150px', backgroundColor: 'lavender' }}>This is a box</div>
        </>
    );
}

export default Box;
