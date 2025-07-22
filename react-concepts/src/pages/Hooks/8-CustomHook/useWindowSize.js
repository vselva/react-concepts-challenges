import { useEffect, useState } from "react";

function UseWindowSize() {
    const [size, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleSize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", handleSize);

        return () => window.removeEventListener("", handleSize);
    }, []);

    return size;
}

export default UseWindowSize;
