import { useLayoutEffect, useRef } from "react";

export default function useCustomEffect(effect, dependencies) {
    let firstTime = useRef(false);
    let prevDeps = useRef([]);

    let hasChanged = false;
    if (!dependencies) {
        hasChanged = true;
    } else if (dependencies && firstTime.current == false) {
        firstTime.current = true;
        hasChanged = true;
    } else {
        hasChanged = !dependencies.every((dep, idx) =>
            Object.is(dep, prevDeps.current[idx])
        );
    }

    if (hasChanged) {
        effect();
        prevDeps.current = dependencies;
    }
}
